import ReminderList from "./reminderlist";
import NoReminders from './noreminders'

export default function CheckEntries() {
    if (JSON.parse(localStorage.getItem('reminders')).length > 0) {
        ReminderList();
    } else {
        NoReminders();
    };    
}