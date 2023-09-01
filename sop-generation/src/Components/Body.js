import React from "react";
import Forms from "./Forms";
import "./Body.css";

function Body() {
  return (
    <div className="Main-bodyContainer">
      <div className="Body-title">
        <h3 className="Body-heading">Customized SOP Generator</h3>
        <p>
          Fill this questionnaire for the student. After submitting, you will
          receive an email at the email address that you have provided with a
          Statement of Purpose customized for you. You can use and modify that
          as per your needs.
        </p>
      </div>
      <Forms/>
      <div>
        If you would like to get it edited, reviewed, or drafted by our experts,
        you can get in touch with us:
        <a href="https://effizient-immigration-inc.square.site/s/shop">
          https://effizient-immigration-inc.square.site/s/shop
        </a>
      </div>
    </div>
  );
}

export default Body;
