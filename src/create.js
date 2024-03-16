import rootDiv from "./index";
import Data from "./reminders.json";

export default function Create() {
  const priorities = Data["priority"];
  const types = Data["type"];

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
  };
  function labelMaker(forInput, value) {
    let label = document.createElement('label');
    label.setAttribute('for', forInput);
    label.textContent = value;
    return label;
  }

  const close = document.createElement('button');
  close.innerHTML = '<ion-icon name="close-outline"></ion-icon>';
  close.addEventListener('click', (e) => {
    e.preventDefault();
    rootDiv.removeChild(form);
  });

  const form = document.createElement("form");
  form.setAttribute("id", "create-form");
  const inputTitle = inputMaker("text", "title", "create-title");
  const inputDue = inputMaker("date", "duedate", "create-due");
  const inputDesc = inputMaker("text", "desc", "create-desc");
  const inputPriority = selectMaker(
    "priority",
    "create-priority",
    "create-form",
    priorities
  );
  const inputType = selectMaker("type", "create-type", "create-form", types);
  const labelTitle = labelMaker('create-title', 'Title:');
  const labelDue = labelMaker('create-due', 'Due Date:');
  const labelDesc = labelMaker('create-desc', 'Brief Description:');
  const labelPriority = labelMaker('create-priority', 'Priority Level:');
  const labelType = labelMaker('create-type', 'Type:');

  const submit = inputMaker('submit', null, 'create-submit');

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
  form.appendChild(submit);

  submit.addEventListener('click', (e) => {
    let formData = new FormData(form);
    form.reset();
    let formValues = [];
    for (let entry of formData) {
        formValues.push(entry[1]);
    };
    let [title, dueDate, desc, priority, type] = formValues;
    Data['reminders'].push({
        "title": title,
        "status": "not started",
        "duedate": dueDate,
        "desc": desc,
        "priority": priority,
        "category": type,
        "project": "none"
    });
    console.log(Data['reminders']);
    e.preventDefault();
  })

  return form;
}
