export default function DateTime(date, time) {
    const today = new Date().getDay();
    const day = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const hours = new Date().getHours();
    const mins = (new Date().getMinutes() < 10 ? '0' : '') + new Date().getMinutes()

    const months = {
        0: "January",
        1: "February",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December"
    }

    const days = {
        0: 'Sunday',
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday'
    };

    return {"Date": `${days[today]}, ${months[month]} ${day}, ${year}`, "Time": `${hours}:${mins}`};
    
}