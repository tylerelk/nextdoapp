export default function InitializeStorage() {
  if (!localStorage.getItem("projects")) {
    localStorage.setItem("project", JSON.stringify([]));
  }
  if (!localStorage.getItem("reminders")) {
    localStorage.setItem("reminders", JSON.stringify([]));
  }
  localStorage.setItem(
    "type",
    JSON.stringify(["Task", "Appointment", "Meeting", "Social", "Other"])
  );
  localStorage.setItem("status", JSON.stringify([0, 1, 2]));
  localStorage.setItem("priority", JSON.stringify([0, 1, 2]));
  if (!localStorage.getItem('projects')) {
  localStorage.setItem('projects', JSON.stringify(["None"]))
  };
}
