import rootDiv from ".";

export default function Footer() {
    const footer = document.createElement('div');
    const byline = document.createElement('h5');

    footer.classList.add('footer-container');

    byline.textContent = `Copyright ${new Date().getFullYear()} Ty Lewis`;

    footer.appendChild(byline);

    rootDiv.appendChild(footer);
}