import rootDiv from ".";
import Data from "./reminders.json";
import Tile from "./tile";

export default function ReminderList(sort) {
    const reminders = Data["reminders"];
    const list = document.createElement('ul');

    const priorityColor = {
        0: "#238F51",
        1: "#FEC126",
        2: "#F05D4D"
    };

    for (let entry in reminders) {
        let {title, status, duedate, desc, category, project, priority} = reminders[entry];
        let newTile = Tile(title, status, desc, duedate, category, project);
        newTile.style.backgroundColor = `${priorityColor[+priority]}`
        list.appendChild(newTile);
    }

    rootDiv.appendChild(list);
}