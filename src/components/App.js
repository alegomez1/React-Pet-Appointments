import React from "react";
import "../css/App.css";
import AddAppointments from "../components/AddAppointments";
import ListAppointments from "../components/ListAppointments";
import SearchAppointments from "../components/SearchAppointments";


function App() {
  return (
    <main className="page bg-white" id="petratings">
      <div className="container">
        <div className="row">
          <div className="col-md-12 bg-white">
            <div className="container">
              <AddAppointments />
              <ListAppointments />
              <SearchAppointments />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
