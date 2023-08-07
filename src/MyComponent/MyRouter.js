import React from 'react';
// import { createRoot } from "react-dom/client";
import {Routes,Route, Navigate,useLocation} from 'react-router-dom';
import Dashbaord from './pages/Dashbaord';
import Upcoming from './pages/Upcoming';
import Rules from './pages/Rules';
import MyLedger from './pages/MyLedger';
import ProfitLoss from './pages/ProfitLoss';
import Login from './pages/Login';
import Modal from './pages/Modal';
import Lucky7 from './pages/Lucky7';
import Virtual from './pages/virtual.js';
import MyCommission from './pages/MyCommission';
import TeenPatti from './pages/TeenPatti';
import Teenpattioneday from './pages/Teenpattioneday';
import LuckyModal from './pages/LuckyModal';
import Dragon from './pages/Dragon';
import AndarBahar from './pages/AndarBahar';
import Livetv from './pages/livetv';
import Football from './pages/Football';
import Cricket from './pages/Cricket';
import OldData from './pages/OldData';
import Mynav from './Mynav';


function Myrouter(){
	


	const navlocation = useLocation();
	const siteLogin = navlocation.pathname === '/';


	return(

		<>
			{navlocation.pathname !== '/' && <Mynav/> }
				<Routes>
					<Route exact path="/" element={<Login/>} />
					<Route exact path="/dashbaord" element={<Dashbaord/>} />
					<Route exact path="/lucky7" element={<Lucky7/>} />
					<Route exact path="/MyLedger" element={<MyLedger/>} />
					<Route exact path="/MyCommission" element={<MyCommission/>} />
					<Route exact path="/TeenPatti" element={<TeenPatti/>} />
					<Route exact path="/Rules" element={<Rules/>} />
					<Route exact path="/Modal" element={<Modal/>} />
					<Route exact path="/virtual" element={<Virtual/>} />
					<Route exact path="/Teenpattioneday" element={<Teenpattioneday/>} />
					<Route exact path="/LuckyModal" element={<LuckyModal/>} />
					<Route exact path="/Dragon" element={<Dragon/>} />
					<Route exact path="/AndarBahar" element={<AndarBahar/>} />
					<Route exact path="/livetv" element={<Livetv/>} />
                    <Route exact path="/Football" element={<Football/>} />
                    <Route exact path="/Cricket" element={<Cricket/>} />
					<Route exact path="/OldData" element={<OldData/>} />
					<Route exact path="/upcoming" element={<Upcoming/>} />
					<Route exact path="/profit-loss" element={<ProfitLoss/>} />
					<Route exact path="/*" element={<Navigate to="/"/>} />
				</Routes>

			{!siteLogin}
		</>
		);
}


export default Myrouter