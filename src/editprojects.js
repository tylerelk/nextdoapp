export default function EditProjects() {
  const projectList = document.createElement("ul");
  const projects = JSON.parse(localStorage.getItem("projects"));

  projectList.style.marginTop = "5rem";

  const renderList = (arr) =>
    arr.forEach((project) => {
      let item = document.createElement("li");
      item.innerHTML = `${project} <ion-icon name="trash-outline"></ion-icon>`;
      projectList.appendChild(item);
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

  return projectList;
}
