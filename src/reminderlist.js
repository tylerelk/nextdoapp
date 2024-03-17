import rootDiv from ".";
import Tile from "./tile";

export default function ReminderList(sort) {
    const reminders = JSON.parse(localStorage.getItem('reminders'));
    const list = document.createElement('ul');

    list.setAttribute('id', 'reminder-list');

    const priorityColor = (priority) => {
        switch(priority) {
            case 0:
                return "var(--green)";
            case 1:
                return "var(--yellow)";
            case 2:
                return "var(--red)";
        }
    }

    for (let reminder of Object.values(reminders)) {
        let { title, due, desc, priority, cat, proj } = reminder;
        let newTile = Tile(title, 0, desc, due, cat, proj);
        newTile.style.backgroundColor = priorityColor(priority);
        list.appendChild(newTile);
        console.log(reminder);
    };

    rootDiv.appendChild(list);
}