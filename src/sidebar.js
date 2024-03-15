export default function Sidebar() {
    const title = document.createElement('h2');
    const btnNew = document.createElement('button');
    const btnProj = document.createElement('button');
    const sidebar = document.createElement('div');

    sidebar.classList.add('sidebar-container');

    title.textContent = 'New';
    btnNew.textContent = 'New Do';
    btnProj.textContent = 'New Project';

    sidebar.appendChild(title);
    sidebar.appendChild(btnNew);
    sidebar.appendChild(btnProj);

    return sidebar;
}