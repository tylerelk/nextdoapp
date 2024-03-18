import Create from "./create";
import rootDiv from ".";
import CreateProject from "./createproject";

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
    sidebar.classList.add('hide');
    btnNew.classList.add('sidebar-btn');
    btnProj.classList.add('sidebar-btn');
    btnAllProj.classList.add('sidebar-btn');
    btnSet.classList.add('sidebar-btn');

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
        sidebar.appendChild(Create());
    });

    btnProj.addEventListener('click', (e) => {
        e.preventDefault();
        sidebar.appendChild(CreateProject());
    })

    rootDiv.appendChild(sidebar);
}