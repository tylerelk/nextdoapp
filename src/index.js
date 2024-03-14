import _ from "lodash";
import "./styles.css";

import NoReminders from "./noreminders";
import Header from "./header";
import ReminderList from "./reminderlist";

const rootDiv = document.getElementById('rootDiv');
export default rootDiv;

function buildSite () {
    const root = document.createElement('div');

    Header();
    ReminderList();

    return root;
};

rootDiv.appendChild(buildSite());