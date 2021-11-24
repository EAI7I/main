import React from 'react';
import MainPage from './components/main_page/mainPage';
import Court from './components/service_pages/01_court/court';
import LaborLegislation from './components/service_pages/02_labor-legislation/labor-legislation';
import CivilLegislation from './components/service_pages/03_civil-legislation/civil-legislation';
import FamilyLegislation from './components/service_pages/04_family-legislation/family-legislation';
import HousingLegislation from './components/service_pages/05_housing-legislation/housing-legislation';
import ArbitrationLegislation from './components/service_pages/06_arbitration-legislation/arbitration-legislation';
import CriminalLegislation from './components/service_pages/07_criminal-legislation/criminal-legislation';
import HelpOrphans from './components/service_pages/08_help-orphans/help-orphans';
import BailiffsLegislation from './components/service_pages/09_bailiffs-legislation/bailiffs-legislation';
import BanksLegislation from './components/service_pages/10_banks-legislation/banks-legislation';
import ConsumersLegislation from './components/service_pages/11_consumers-legislation/consumers-legislation';
import AppealCitizensLegislation from './components/service_pages/12_appeal-citizens-legislation/appeal-citizens-legislation';
import PensionLegislation from './components/service_pages/13_pension-legislation/pension-legislation';
import AdministrativeLegislation from './components/service_pages/14_administrative-legislation/administrative-legislation';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';


const App = () => {
  return (
      <Router>
        <div>
          <Route path='/main' component={MainPage}/>
          <Route path='/court' component={Court}/>
          <Route path='/labor-legislation' component={LaborLegislation}/>
          <Route path='/civil-legislation' component={CivilLegislation}/>
          <Route path='/family-legislation' component={FamilyLegislation}/>
          <Route path='/housing-legislation' component={HousingLegislation}/>
          <Route path='/arbitration-legislation' component={ArbitrationLegislation}/>
          <Route path='/criminal-legislation' component={CriminalLegislation}/>
          <Route path='/help-orphans' component={HelpOrphans}/>
          <Route path='/bailiffs-legislation' component={BailiffsLegislation}/>
          <Route path='/banks-legislation' component={BanksLegislation}/>
          <Route path='/consumers-legislation' component={ConsumersLegislation}/>
          <Route path='/appeal-citizens-legislation' component={AppealCitizensLegislation}/>
          <Route path='/pension-legislation' component={PensionLegislation}/>
          <Route path='/administrative-legislation' component={AdministrativeLegislation}/>
          <Redirect from='/' to='/main'/>
        </div>
      </Router>
  )
}

export default App;