export default function CreateProject() {
    const form = document.createElement('form');
    const label = document.createElement('h2');
    const input = document.createElement('input');
    const submit =document.createElement('input');
    const projects = JSON.parse(localStorage.getItem('projects'));

    submit.addEventListener('click', (e) => {
        e.preventDefault();
        if (projects.includes(input.value)) {
            alert('Project already exists!');
        } else {
        projects.push(input.value);
        localStorage.setItem('projects', JSON.stringify(projects));
        };
        location.reload();
    });

    label.setAttribute('for', 'project-name');
    label.textContent = "Project name:";
    input.setAttribute('id', 'project-name');
    submit.setAttribute('type', 'submit');

    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(submit);

    return form;
}