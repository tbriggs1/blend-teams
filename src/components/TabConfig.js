// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import React from 'react';
import './App.css';
import * as microsoftTeams from "@microsoft/teams-js";
import IndexDropdown from './IndexDropdown';
import {  FormDropdown, Form, FormButton } from '@fluentui/react-northstar'
import { Dropdown, Button } from '@fluentui/react-northstar'
import './styles/LandingPage.css'
import blendlogo from '../images/blend.png'
/**
 * The 'Config' component is used to display your group tabs
 * user configuration options.  Here you will allow the user to 
 * make their choices and once they are done you will need to validate
 * their choices and communicate that to Teams to enable the save button.
 */
class TabConfig extends React.Component {
    constructor(props){
      super(props);
      this.state = {page: ""};
      this.state = {inputItems: [
        'Learning Plan',
      'Curricula Details',
      'Upcoming Events',
      'Featured Content',
      'Catalog',
      'Custom',
      'Admin'
      ]}
      
    }



    // setPage(item){
      
    //   this.setState({
    //    page: "ho", () => {
    //      console.log()
    //    }
    //   });
    //   console.log(this.page)
    // }

    setPage(item) {
      this.setState({ page: item }, () => 
      console.log(this.state.page));
   }
        
    render() {
   
      /**
       * When the user clicks "Save", save the url for your configured tab.
       * This allows for the addition of query string parameters based on
       * the settings selected by the user.
       */
      
      microsoftTeams.settings.registerOnSaveHandler((saveEvent) => {

        const baseUrl = `https://${window.location.hostname}:${window.location.port}`;
        microsoftTeams.settings.setSettings({
          "suggestedDisplayName": this.state.page,
          "entityId": "Test",
          "contentUrl": baseUrl + `/${this.state.page}`,
          "websiteUrl": baseUrl + `/${this.state.page}`
        });
        saveEvent.notifySuccess();
       });
  
      /**
       * After verifying that the settings for your tab are correctly
       * filled in by the user you need to set the state of the dialog
       * to be valid.  This will enable the save button in the configuration
       * dialog.
       */
      microsoftTeams.settings.setValidityState(true);
  
      return (
        <div className="main">
           <div className="blend-home">
             <img src={blendlogo} height="60px" />
             <h3>BLEND - Learning Experience Platform</h3>
           </div>
           <p>Connect your employees to a world class Learning Experience Platform which blends together the best of SuccessFactors Learning, SAP JAM and any External Learning library into a single destination.</p>
           <h1>Choose a Widget below:</h1>
           <Dropdown
              items={this.state.inputItems}
              placeholder="Select your widget"
              checkable
              getA11ySelectionMessage={{
                onAdd: item => this.setPage(item),
                // onAdd: item => console.log(this.state.page),
            }}
          />
        </div>
      );
    }
  }

  export default TabConfig;


  
    
