import React from "react";
import "./UserForm.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import Controlled from "./Form";

class UserForm extends React.Component {
render(){
  return (
    <PerfectScrollbar>
      <div className="container-fluid">
        <div className="section">
          <Controlled />
        </div>
      </div>
    </PerfectScrollbar>
  );
};
};

export default UserForm;