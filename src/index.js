import _ from "lodash";
import "./styles.css";

import NoReminders from "./noreminders";
import Header from "./header";
import ReminderList from "./reminderlist";
import Footer from "./footer";

const rootDiv = document.getElementById('rootDiv');
export default rootDiv;

function buildSite () {
    Header();
    ReminderList();
    let list = document.getElementById('reminder-list').childNodes.length;
    if (list <= 0) {NoReminders()};

    Footer();
};

rootDiv.appendChild(buildSite());