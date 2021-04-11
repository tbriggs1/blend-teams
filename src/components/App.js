// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import React from 'react';
import './App.css';
import * as microsoftTeams from "@microsoft/teams-js";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Privacy from "./Privacy";
import TermsOfUse from "./TermsOfUse";
import Tab from "./Tab";
import ConsentPopup from "./ConsentPopup";
import ClosePopup from "./ClosePopup";
import TabConfig from "./TabConfig";
import Test from "./test";
import RenderLearningPlan from '.././components/Routes/RenderLearningPlan';
import RenderUpcomingEvents from './Routes/RenderUpcomingEvents';
import RenderCatalog from './Routes/RenderCatalog';
import RenderCurriculaDetails from './Routes/RenderCurriculaDetails';
import RenderFeaturedContent from './Routes/RenderFeaturedContent';
import CatalogJob from './data/CatalogJob';

/**
 * The main app which handles the initialization and routing
 * of the app.
 */
function App() {

  // Initialize the Microsoft Teams SDK
  microsoftTeams.initialize();

  // Display the app home page hosted in Teams
  return (
    <Router>
      <Route exact path="/privacy" component={Privacy} />
      <Route exact path="/termsofuse" component={TermsOfUse} />
      <Route exact path="/tab" component={Tab} />
      <Route exact path="/config" component={TabConfig}/>
      <Route exact path="/auth-start" component={ConsentPopup} />
      <Route exact path="/auth-end" component={ClosePopup} />
      <Route exact path="/Learning Plan" component={RenderLearningPlan} />
      <Route exact path="/Upcoming Events" component={RenderUpcomingEvents} />
      <Route exact path="/Catalog" component={RenderCatalog} />
      <Route exact path="/Curricula Details" component={RenderCurriculaDetails} />
      <Route exact path="/Featured Content" component={RenderFeaturedContent} />
      <Route exact path="/admin" component={CatalogJob} />
    </Router>
  );
}

export default App;
