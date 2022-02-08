import React from 'react';
import Navpoint from './Nav';
import {BrowserRouter, Route} from "react-router-dom";
import Home from './Home';
import Overveiw from './Overveiw';
import Liveproduction from './Liveproduction';
import Reporttemp from './Reporttemp';
import Attendance from './Attendance';
import Iops from './Iops';
import Contactus from './Contactus';
import Localcharges from './Localcharges';
import Reportiop from './Reportiop';
import MrpBulk from './MrpBulk';
import Test from './Test';
import EditionUsrMnl from './EditionUsrMnl';
function App() {
  return (
    <BrowserRouter>
    <div>
      <Navpoint/>
      <Route exact path='/' component={Home}/>
      <Route path='/Overveiw' component={Overveiw}/>
      <Route path='/Liveproduction' component={Liveproduction}/>
      <Route path='/Reporttemp' component={Reporttemp}/>
      <Route path='/Attendance' component={Attendance}/>
      <Route path='/EditionUsrMnl' component={EditionUsrMnl}/>
      <Route path='/Iops' component={Iops}/>
      <Route path='/Reportiop' component={Reportiop}/>
      <Route path='/Localcharges' component={Localcharges}/>
      <Route path='/MrpBulk' component={MrpBulk}/>
      <Route path='/Test' component={Test}/>
      <Route path='/Contactus' component={Contactus}/>
      </div>
      </BrowserRouter>
)
};

export default App;
