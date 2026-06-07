// ========================================================
// Shared Nawat Streak Rules
// ========================================================
// A local calendar day counts once. Missing days between the last practice and
// today consume protectors first; without protectors, the streak resets to 0.

globalThis.StreakRules = (() => {
    const MAX_PROTECTORS = 2;
    const DAY_MS = 24 * 60 * 60 * 1000;

    function todayStr(date = new Date()) {
        return dateStr(date);
    }

    function dateStr(date) {
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    }

    function parseDate(str) {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(String(str || ''))) return null;

        const [year, month, day] = str.split('-').map(Number);
        const date = new Date(year, month - 1, day);
        if (
            date.getFullYear() !== year ||
            date.getMonth() !== month - 1 ||
            date.getDate() !== day
        ) {
            return null;
        }

        return date;
    }

    function addDays(dateString, days) {
        const date = parseDate(dateString);
        if (!date) return null;

        date.setDate(date.getDate() + days);
        return dateStr(date);
    }

    function daysBetween(startString, endString) {
        const start = parseDate(startString);
        const end = parseDate(endString);
        if (!start || !end) return 0;

        return Math.round((end - start) / DAY_MS);
    }

    function cleanNumber(value, fallback = 0) {
        const number = Number(value);
        if (!Number.isFinite(number)) return fallback;
        return Math.max(0, Math.trunc(number));
    }

    function normalize(data) {
        data.streak = cleanNumber(data.streak);
        data.protectors = Math.min(cleanNumber(data.protectors), MAX_PROTECTORS);
        data.dayLog = data.dayLog && typeof data.dayLog === 'object' ? data.dayLog : {};
        return data;
    }

    function latestPracticeDate(dayLog, fallbackDate, today) {
        const dates = Object.keys(dayLog)
            .filter(date => dayLog[date] === 'practiced')
            .concat(fallbackDate ? [fallbackDate] : [])
            .filter(date => parseDate(date) && daysBetween(date, today) >= 0);

        if (dates.length === 0) return null;

        return dates.sort((a, b) => parseDate(a) - parseDate(b))[dates.length - 1];
    }

    function reconcile(data, today = todayStr()) {
        normalize(data);
        data.simulatedDate = today;

        const lastPractice = latestPracticeDate(data.dayLog, data.lastPracticeDate, today);
        if (!lastPractice) {
            data.lastPracticeDate = null;
            data.practicedToday = data.dayLog[today] === 'practiced';
            if (data.practicedToday) {
                data.lastPracticeDate = today;
                data.streak = Math.max(data.streak, 1);
            }
            return data;
        }

        data.lastPracticeDate = lastPractice;
        const distance = daysBetween(lastPractice, today);

        if (distance <= 0) {
            data.practicedToday = data.dayLog[today] === 'practiced';
            return data;
        }

        data.practicedToday = false;
        let streakBroken = data.streak === 0;

        for (let i = 1; i < distance; i++) {
            const missedDay = addDays(lastPractice, i);
            const status = data.dayLog[missedDay];

            if (status === 'practiced' || status === 'protector') continue;

            if (status === 'missed') {
                data.streak = 0;
                streakBroken = true;
                continue;
            }

            if (!streakBroken && data.protectors > 0) {
                data.protectors--;
                data.dayLog[missedDay] = 'protector';
            } else {
                data.dayLog[missedDay] = 'missed';
                data.streak = 0;
                streakBroken = true;
            }
        }

        data.protectors = Math.min(data.protectors, MAX_PROTECTORS);
        return data;
    }

    function recordPractice(data, today = todayStr()) {
        reconcile(data, today);

        if (data.dayLog[today] === 'practiced') {
            data.practicedToday = true;
            data.lastPracticeDate = today;
            return data;
        }

        data.streak++;
        data.practicedToday = true;
        data.lastPracticeDate = today;
        data.dayLog[today] = 'practiced';

        if (data.streak > 0 && data.streak % 3 === 0 && data.protectors < MAX_PROTECTORS) {
            data.protectors++;
        }

        data.protectors = Math.min(data.protectors, MAX_PROTECTORS);
        return data;
    }

    return {
        MAX_PROTECTORS,
        todayStr,
        parseDate,
        addDays,
        daysBetween,
        reconcile,
        recordPractice
    };
})();
