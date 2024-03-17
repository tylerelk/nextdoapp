import _ from "lodash";
import "./styles.css";

import InitializeStorage from "./initializestorage";
import Header from "./header";
import Footer from "./footer";
import CheckEntries from "./checkentries";
import Sidebar from "./sidebar";

const rootDiv = document.getElementById('rootDiv');
export default rootDiv;
InitializeStorage();

function buildSite () {
    CheckEntries();
    Header();
    Sidebar();
    Footer();
};

rootDiv.appendChild(buildSite());