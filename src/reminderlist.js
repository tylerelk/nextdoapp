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
        let { title, duedate, desc, priority, category, project, id, status } = reminder;
        let newTile = Tile(title, status, desc, duedate, category, project, id);
        newTile.style.backgroundColor = priorityColor(priority);
        list.appendChild(newTile);
    };

    rootDiv.appendChild(list);
}