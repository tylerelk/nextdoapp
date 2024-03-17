import Create from "./create";
import rootDiv from ".";

export default function Sidebar() {
    const newTitle = document.createElement('h2');
    const projTitle = document.createElement('h2');
    const setTitle = document.createElement('h2');
    const btnNew = document.createElement('button');
    const btnProj = document.createElement('button');
    const btnAllProj = document.createElement('button');
    const btnSet = document.createElement('button');
    const sidebar = document.createElement('div');

    sidebar.classList.add('sidebar-container');

    newTitle.textContent = 'New';
    projTitle.textContent = 'Project';
    setTitle.textContent = 'Settings';
    btnNew.textContent = 'New Do';
    btnProj.textContent = 'New Project';
    btnAllProj.textContent = 'View All';
    btnSet.textContent = 'Settings';

    sidebar.appendChild(newTitle);
    sidebar.appendChild(btnNew);
    sidebar.appendChild(btnProj);
    sidebar.appendChild(projTitle);
    sidebar.appendChild(btnAllProj)
    sidebar.appendChild(setTitle);
    sidebar.appendChild(btnSet);

    btnNew.addEventListener ('click', (e) => {
        e.preventDefault();
        rootDiv.appendChild(Create());
    })

    return sidebar;
}