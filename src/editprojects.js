export default function EditProjects() {
  const container = document.createElement('div');
  const projectList = document.createElement("ul");
  const projects = JSON.parse(localStorage.getItem("projects"));

  container.classList.add('project-container');
  projectList.classList.add('project-list');

  const renderList = (arr) =>
    arr.forEach((project) => {
      if (project == 'None') {
        let item = document.createElement("li");
        item.innerHTML = `${project}`
        projectList.appendChild(item);
      } else {
      let item = document.createElement("li");
      item.innerHTML = `${project} <ion-icon name="trash-outline" class="trash-icon"></ion-icon>`;
      projectList.appendChild(item);
    }
    });

  renderList(projects);

  projectList.childNodes.forEach((child) => {
    child.lastChild.addEventListener("click", (e) => {
      let thisItem = e.target.parentNode.textContent;
      let projectsWithoutThis = projects.filter(project => project.trim() != thisItem.trim())
      localStorage.setItem('projects', JSON.stringify(projectsWithoutThis));
      location.reload();
    });
  });

  container.innerHTML = '<h2>Projects</h2>';
  container.appendChild(projectList);

  return container;
}
