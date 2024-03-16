import _ from "lodash";
import "./styles.css";
import Data from './reminders.json';

import NoReminders from "./noreminders";
import Header from "./header";
import ReminderList from "./reminderlist";
import Footer from "./footer";

const rootDiv = document.getElementById('rootDiv');
export default rootDiv;

function buildSite () {
    Header();
    Footer();
    if (Data["reminders"].length > 0) {
        ReminderList();
    } else {
        NoReminders();
    };
};

rootDiv.appendChild(buildSite());