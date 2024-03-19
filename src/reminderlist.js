import rootDiv from ".";
import Sidebar from "./sidebar";
import Tile from "./tile";

export default function ReminderList(sort) {
  const reminders = JSON.parse(localStorage.getItem("reminders"));
  const projects = JSON.parse(localStorage.getItem('projects'));
  const list = document.createElement("ul");
  const sortContainer = document.createElement('div');
  const allButton = document.createElement('button');

  allButton.classList.add('sort-button');
  allButton.textContent = 'All';
  allButton.addEventListener('click', (e) => {
    rootDiv.innerHTML = '';
    ReminderList();
    Sidebar();
  });

  sortContainer.classList.add('sort-container');

    projects.forEach(project => {
        let sortButton = document.createElement('button');
        sortButton.textContent = project;
        sortButton.classList.add('sort-button');
        sortButton.addEventListener('click', (e) => {
            console.log(e.target.textContent);
            rootDiv.innerHTML = '';
            ReminderList(e.target.textContent);
            Sidebar();
        })
        sortContainer.appendChild(sortButton);
    })

  const priorityColor = (priority) => {
    switch (priority) {
      case 0:
        return "var(--green)";
      case 1:
        return "var(--yellow)";
      case 2:
        return "var(--red)";
    }
  };

  if (sort) {
    const tileProject = JSON.parse(localStorage.projects).filter(
      (list) => list.trim() === sort
    )[0];
    for (let reminder of Object.values(reminders)) {
        let { title, duedate, desc, priority, category, project, id, status } =
          reminder;
        let newTile = Tile(title, status, desc, duedate, category, project, id);
        newTile.firstChild.firstChild.style.backgroundColor =
          priorityColor(priority);
        if (project === tileProject) {list.appendChild(newTile);}
      }
  } else {
    for (let reminder of Object.values(reminders)) {
      let { title, duedate, desc, priority, category, project, id, status } =
        reminder;
      let newTile = Tile(title, status, desc, duedate, category, project, id);
      newTile.firstChild.firstChild.style.backgroundColor =
        priorityColor(priority);
      list.appendChild(newTile);
    }
  }

  list.setAttribute("id", "reminder-list");

  sortContainer.appendChild(allButton);

  rootDiv.appendChild(sortContainer);
  rootDiv.appendChild(list);
}
