import DateTime from "./dateTime";

const header = document.querySelector('header');

export default function Header() {
    const container = document.createElement('div');
    const title = document.createElement('h3');
    const dropdown = document.createElement('button');
    const dateTime = document.createElement('div');

    container.classList.add('header-container');
    title.classList.add('header-title');
    dropdown.classList.add('header-button');
    dateTime.classList.add('header-time');

    dropdown.innerHTML = '<ion-icon name="menu-outline"></ion-icon>'
    dropdown.setAttribute('data-open', 'false');
    title.innerHTML = "next<b>Do</b>";
    dateTime.innerHTML = `
        <p>Today is:</p>
        <h4>${DateTime().Date}</h4>
        <p>The time is:</p>
        <h4>${DateTime().Time}</h4>
    `;

    dropdown.addEventListener('click', () => {
        let changeTrue = () => {
            dropdown.dataset.open = "true";
            dropdown.innerHTML = '<ion-icon name="arrow-down-outline"></ion-icon>'
        };
        let changeFalse = () => {
            dropdown.dataset.open = 'false';
            dropdown.innerHTML = '<ion-icon name="menu-outline"></ion-icon>';
        }
        dropdown.dataset.open == 'false' ? changeTrue() : changeFalse();
    })

    container.appendChild(dropdown);
    container.appendChild(title);
    container.appendChild(dateTime);

    header.appendChild(container);
}