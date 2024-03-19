import rootDiv from ".";
import CheckEntries from "./checkentries";
import ReminderList from "./reminderlist";
import Sidebar from "./sidebar";

export default function Tile(tit, sta, det, due, cat, pro, id) {
    let reminders = JSON.parse(localStorage.getItem('reminders'));

    const tile = document.createElement('li');
    const title = document.createElement('h2');
    const details = document.createElement('p');
    const status = document.createElement('h3');
    const dueDate = document.createElement('p');
    const project = document.createElement('p');
    const category = document.createElement('h3');
    const topInfo = document.createElement('div');
    const bottomInfo = document.createElement('div');
    const expand = document.createElement('button');
    const titleButton = document.createElement('div');
    const deleteButton = document.createElement('button');

    tile.setAttribute('data-id', id);

    expand.innerHTML = '<ion-icon name="chevron-expand-outline"></ion-icon>';
    expand.classList.add('tile-open');
    deleteButton.innerHTML = '<ion-icon name="trash-outline"></ion-icon>';
    deleteButton.classList.add('tile-delete');

    topInfo.classList.add('hide');
    details.classList.add('hide');
    bottomInfo.classList.add('hide');

    title.style.width = '75%';
    title.style.padding = '0.5rem';
    title.style.borderRadius = '10px'

    expand.addEventListener('click', () => {
        let otherElements = [
            topInfo,
            details,
            bottomInfo
        ];
        otherElements.forEach(piece => {
            piece.classList.toggle('hide');
        })
    })

    deleteButton.addEventListener('click', () => {
        let thisReminder = reminders.find(thisId => thisId.id === id);
        let newReminders = reminders.filter(entry => entry.id != thisReminder.id);
        localStorage.setItem('reminders', JSON.stringify(newReminders));
        rootDiv.innerHTML = '';
        Sidebar();
        CheckEntries();
    })

    status.addEventListener('click', (e) => {
        let thisReminder = reminders.find(thisId => thisId.id === id);
        switch(e.target.textContent) {
            case "Not Started":
                e.target.textContent = "In Progress";
                break;
            case "In Progress":
                e.target.textContent = "Completed";
                break;
            case "Completed":
                e.target.textContent = "Not Started";
                break;
        };
        thisReminder.status = e.target.textContent;
        localStorage.setItem('reminders', JSON.stringify(reminders));
    })

    tile.classList.add('reminder-tile');
    titleButton.classList.add('title-button-container');

    title.textContent = tit;
    details.innerHTML = `Details:<br>${det}`;
    status.textContent = sta;
    dueDate.innerHTML = `Due: <br>${due}`;
    project.textContent = `Project: ${pro}`;
    category.textContent = cat;

    topInfo.classList.add('tile-top-info');
    bottomInfo.classList.add('tile-bottom-info');
  
    topInfo.appendChild(status);
    topInfo.appendChild(dueDate);

    titleButton.appendChild(title);
    titleButton.appendChild(expand);

    if (pro != "None") {
      bottomInfo.appendChild(project);
    }
    bottomInfo.appendChild(category);
    bottomInfo.appendChild(deleteButton);

    tile.appendChild(titleButton)
    tile.appendChild(topInfo);
    tile.appendChild(details);
    tile.appendChild(bottomInfo);

    return tile;
}