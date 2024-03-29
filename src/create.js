import rootDiv from "./index";
import ReminderList from "./reminderlist";
import Sidebar from "./sidebar";


export default function Create() {
  const priorities = JSON.parse(localStorage.getItem("priority"));
  const types = JSON.parse(localStorage.getItem("type"));
  const reminders = JSON.parse(localStorage.getItem("reminders"));
  const projects = JSON.parse(localStorage.getItem('projects'));

  function inputMaker(type, name, id) {
    let input = document.createElement("input");
    input.setAttribute("type", type);
    input.setAttribute("name", name);
    input.setAttribute("id", id);
    return input;
  }
  function selectMaker(name, id, form, options) {
    let select = document.createElement("select");
    select.setAttribute("name", name);
    select.setAttribute("id", id);
    select.setAttribute("form", form);
    options.map((option) => {
      let thisOption = document.createElement("option");
      if (option === 0) {
        option = "Low";
      } else if (option === 1) {
        option = "Moderate";
      } else if (option === 2) {
        option = "High";
      }
      thisOption.setAttribute("value", option);
      thisOption.textContent = option;
      select.appendChild(thisOption);
    });
    return select;
  }
  function labelMaker(forInput, value) {
    let label = document.createElement("label");
    label.setAttribute("for", forInput);
    label.textContent = value;
    return label;
  }

  const close = document.createElement("button");
  close.innerHTML = '<ion-icon name="close-outline"></ion-icon>';
  close.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector('.sidebar-container').removeChild(form);
  });

  const form = document.createElement("form");
  form.setAttribute("id", "create-form");
  const inputTitle = inputMaker("text", "title", "create-title");
  const inputDue = inputMaker("date", "duedate", "create-due");
  const inputDesc = inputMaker("text", "desc", "create-desc");
  const inputProject = selectMaker("project", "create-project", "create-form", projects);
  const inputPriority = selectMaker(
    "priority",
    "create-priority",
    "create-form",
    priorities
  );
  const inputType = selectMaker("type", "create-type", "create-form", types);
  const labelTitle = labelMaker("create-title", "Title:");
  const labelDue = labelMaker("create-due", "Due Date:");
  const labelDesc = labelMaker("create-desc", "Brief Description:");
  const labelPriority = labelMaker("create-priority", "Priority Level:");
  const labelType = labelMaker("create-type", "Type:");
  const labelProject = labelMaker("create-project", "Project:");
  

  const submit = inputMaker("submit", null, "create-submit");
  submit.classList.add('form-button');

  form.appendChild(close);
  form.appendChild(labelTitle);
  form.appendChild(inputTitle);
  form.appendChild(labelDue);
  form.appendChild(inputDue);
  form.appendChild(labelDesc);
  form.appendChild(inputDesc);
  form.appendChild(labelPriority);
  form.appendChild(inputPriority);
  form.appendChild(labelType);
  form.appendChild(inputType);
  form.appendChild(labelProject);
  form.appendChild(inputProject);
  form.appendChild(submit);

  let priorityColor = (level) => {
    switch (level) {
      case "Low":
        return 0;
      case "Moderate":
        return 1;
      case "High":
        return 2;
    }
  };

  submit.addEventListener("click", (e) => {
    e.preventDefault();
    let formData = new FormData(form);
    form.reset();
    let formValues = [];
    for (let entry of formData) {
      formValues.push(entry[1]);
    }
    let [formTitle, formDueDate, formDesc, formPriority, formType, formProject] = formValues;
    let newData = {
      title: formTitle,
      status: "Not Started",
      duedate: formDueDate,
      desc: formDesc,
      priority: priorityColor(formPriority),
      category: formType,
      project: formProject,
      id: formTitle
    };
    reminders.push(newData);
    localStorage.setItem("reminders", JSON.stringify(reminders));
    document.querySelector('.sidebar-container').classList.toggle('hide');
    rootDiv.innerHTML = '';
    Sidebar();
    ReminderList();
  });

  return form;
}
