import React, { Component } from 'react';
import { render } from 'react-dom';


import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import ContactItem from './ContactItem'

import AddItem from './AddContact';
import CanvasJSReact from "./assets/canvasjs.react";


const baseUrl =
  "https://my.api.mockaroo.com/lestetelecom/test.json?key=f55c4060";
const headers = { "X-API-Key": "f55c4060" };

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      contacts: []
    
    };

    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  
  componentDidMount() {
    fetch(baseUrl, { headers })
      .then(response => response.json())
      .then(contacts => this.setState({ contacts }));
  }
 

  getcontacts() {
    return this.state.contacts;
  }


  onAdd(first_name, last_name, email, gender, language, birthday) {
    const contacts = this.getcontacts();

    contacts.push({
      first_name,
      last_name,
      email,
      gender,
      language,
      birthday
    });

    this.setState({ contacts });
  }

  onDelete(first_name) {
    const contacts = this.getcontacts();

    const filteredcontacts = contacts.filter(contact => {
      return contact.first_name !== first_name;
    });

    this.setState({ contacts: filteredcontacts });
  }

  onEditSubmit(
    first_name,
    last_name,
    email,
    gender,
    language,
    birthday,
    originalnome
  ) {
    let contacts = this.getcontacts();

    contacts = contacts.map(contact => {
      if (contact.first_name === originalnome) {
        contact.first_name = first_name;
        contact.last_name = last_name;
        contact.email = email;
        contact.gender = gender;
        contact.language = language;
        contact.birthday = birthday;
      }

      return contact;
    });

    this.setState({ contacts });
  }

 

  render() {
   const contacts = this.getcontacts();
    
   

    //Filter by gender to use in chart
    const GenderCounts = contacts.reduce(function(obj, contact) {
      if (!obj[contact.gender]) {
        obj[contact.gender] = 1;
      } else {
        obj[contact.gender]++;
      }
      return obj;
    }, {});

    //initializing the first chart
    const genderOptions = {
      exportEnabled: true,
      animationEnabled: true,
      title: {
        text: "Divisão por Genêro"
      },
      data: [
        {
          type: "pie",
          startAngle: 75,
          toolTipContent: "<b>{label}</b>: {y}%",
          showInLegend: "true",
          legendText: "{label}",
          indexLabelFontSize: 16,
          indexLabel: "{label} - {y}%",
          dataPoints: [
            { y: GenderCounts.M, label: "Homens" },
            { y: GenderCounts.F, label: "Mulheres" }
          ]
        }
      ]
    };

    //filter for Language to use in chart
    const LanguageCounts = contacts.reduce(function(obj, contact) {
      if (!obj[contact.language]) {
        obj[contact.language] = 1;
      } else {
        obj[contact.language]++;
      }
      return obj;
    }, {});

    //initializing the second chart
    var num = Object.entries(LanguageCounts);
    var data = [];
    var y = [];
    var label = [];
    var dataSeries = { type: "column" };
    var dataPoints = [];

    for (var i = 0; i < num.length; i += 1) {
      y = num[i][1];
      label = num[i][0];
      dataPoints.push({
        label: label,
        y: y
      });
    }
    dataSeries.dataPoints = dataPoints;
    data.push(dataSeries);

    const LanguageOptions = {
      title: {
        text: "Divisão por Idioma"
      },
      data: data
    };

    return (
      <div class="container-fluid">
        <h1>Leste Contact</h1>

        <div class="card mb-3">
          <div class="card-body">
            <AddItem onAdd={this.onAdd} />
          </div>
        </div>

        <div class="card mb-3">
          <div class="card-body">
            <div className="form">
              <div className="row">
                <div className="col-12 col-md-6">
                  
                </div>
              </div>
            </div>
            <div>
              {this.state.contacts.map(contact => {
                return (
                  <ContactItem
                    key={contact.first_name}
                    {...contact}
                    onDelete={this.onDelete}
                    onEditSubmit={this.onEditSubmit}
                  />
                );
              })}

              <hr />
            </div>
          </div>
        </div>
        <div class="card mb-3">
          <div class="card-body">
            <CanvasJSChart options={genderOptions} />
            <hr />
            <CanvasJSChart options={LanguageOptions} />
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

export default App;
