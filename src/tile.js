export default function Tile(tit, sta, det, due, cat, pro, id) {
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

    expand.innerHTML = '<ion-icon name="chevron-expand-outline"></ion-icon>';
    expand.classList.add('tile-open');

    topInfo.classList.add('hide');
    details.classList.add('hide');
    bottomInfo.classList.add('hide');

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

    tile.classList.add('reminder-tile');
    titleButton.classList.add('title-button-container');

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

    topInfo.classList.add('tile-top-info');
    bottomInfo.classList.add('tile-bottom-info');
  
    topInfo.appendChild(status);
    topInfo.appendChild(dueDate);

    titleButton.appendChild(title);
    titleButton.appendChild(expand);

    if (pro != "none") {
      bottomInfo.appendChild(project);
    }
    bottomInfo.appendChild(category);

    tile.appendChild(titleButton)
    tile.appendChild(topInfo);
    tile.appendChild(details);
    tile.appendChild(bottomInfo);

    return tile;
}