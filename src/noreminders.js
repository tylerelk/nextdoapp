import rootDiv from ".";
import palm from "./palmtree.svg";

export default function NoReminders () {
    const container = document.createElement('div');
    const noReminders = document.createElement('h2');
    const palmTree = new Image();
    palmTree.src = palm;

    container.classList.add('idle-container');
    noReminders.textContent = 'Nothing to do next...';

    container.appendChild(palmTree);
    container.appendChild(noReminders);

    rootDiv.appendChild(container);
}