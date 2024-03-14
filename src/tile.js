export default function Tile(tit, sta, det, due, cat, pro) {
    const tile = document.createElement('div');
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
    details.textContent = det;
    status.textContent = sta;
    dueDate.textContent = due;
    project.textContent = pro;
    category.textContent = cat;

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