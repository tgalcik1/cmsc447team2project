import React from 'react';
import './coviddata.css';
import Covid1 from '../AllTabs/covidFirstTab';
import Covid2 from '../AllTabs/covidSecondTab';
import Covid3 from '../AllTabs/covidThirdTab';
import Crime1 from '../AllTabs/FirstTab';
import Crime2 from '../AllTabs/SecondTab';
import Crime3 from '../AllTabs/ThirdTab';

const CovidData = () => {
  return (
    <div>
      <div>
        <div><Covid1></Covid1></div>
        <div><Crime1></Crime1></div>
      </div>
      <div>
        <div><Covid2></Covid2></div>
        <div><Crime2></Crime2></div>
      </div>
      <div>
        <div><Covid3></Covid3></div>
        <div><Crime3></Crime3></div>
      </div>
    </div>
  );
};
  
export default CovidData;