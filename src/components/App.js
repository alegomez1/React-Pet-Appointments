import React, {Component} from "react";
import "../css/App.css";
import AddAppointments from "../components/AddAppointments";
import ListAppointments from "../components/ListAppointments";
import SearchAppointments from "../components/SearchAppointments";

class App extends Component{

  constructor(){
    super();
    this.state={
      myName: 'Alex'
    }
  }

  componentDidMount(){
    fetch('./data.json')
    .then(response => response.json())
    .then(result => {
      const appts = result.map(item => {
        return item
      })
    })
  }

  render(){
  return (
    <main className="page bg-white" id="petratings">
      <div className="container">
        <div className="row">
          <div className="col-md-12 bg-white">
            <div className="container">
              {this.state.myName}
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
}

export default App;
