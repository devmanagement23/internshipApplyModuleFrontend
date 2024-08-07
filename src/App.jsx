import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import ApplicationForm from './components/ApplicationForm';
import Dashboard from './components/Dashboard';
import Messaging from './components/Messaging';

import './App.css'

function App() {
  

  return (
    <>
      <Router>
      <Switch>
        {/* other routes */}
        <Route path="/" exact component={HomePage} />
        <Route path="/apply/:internshipId" component={ApplicationForm} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/messages/:applicationId" component={Messaging} />
        <Route path="/company-dashboard" component={CompanyDashboard} />
      </Switch>
    </Router>
    </>
  )
}

export default App
