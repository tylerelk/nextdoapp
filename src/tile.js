export default function Tile(tit, sta, det, due, cat, pro) {
    const tile = document.createElement('li');
    const title = document.createElement('h2');
    const details = document.createElement('p');
    const status = document.createElement('h3');
    const dueDate = document.createElement('p');
    const project = document.createElement('p');
    const category = document.createElement('h3');
    const topInfo = document.createElement('div');
    const bottomInfo = document.createElement('div');

    tile.classList.add('reminder-tile');

    title.textContent = tit;
    details.innerHTML = `Details:<br>${det}`;
    status.textContent = `Status: ${sta}`;
    dueDate.textContent = `Due: ${due}`;
    project.textContent = `Project: ${pro}`;
    category.textContent = cat;

    function getStatus() {
        switch(sta) {
            case 0:
                return 'Not Started';
            case 1:
                return 'In Progress';
            case 2:
                return 'Completed';
        }
    };
    status.textContent = getStatus();

    topInfo.appendChild(title);
    topInfo.appendChild(status);
    topInfo.appendChild(dueDate);

    bottomInfo.appendChild(project);
    bottomInfo.appendChild(category);

    tile.appendChild(topInfo);
    tile.appendChild(details);
    tile.appendChild(bottomInfo);

    return tile;
}