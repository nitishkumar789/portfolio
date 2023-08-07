import React, { useState, useEffect } from "react";
// import ResultModal from "../../result-modal/ResultModal.js";
import LuckyModal from './LuckyModal.js';
export default function TeenPatti20(){
const [showIframe, setShowIframe] = useState(true);
const [isDataReceived, setIsDataReceived] = useState(false);
const [isPlayer, setIsPlayer] = useState(false)
const [isPlayer1, setIsPlayer1] = useState(false)
const [isAutotime, setIsAutotime] = useState(false)
const [isMid, setIsMid] = useState(false)
const [isBack1, setIsBack1] = useState(false)
const [isBack2, setIsBack2] = useState(false)
const [isLay1, setIsLay1] = useState(false)
const [isLay2, setIsLay2] = useState(false)
const [isMax, setIsMax] = useState(false)
const [isMin, setIsMin] = useState(false)
const [c1, setC1] = useState(null);
const [c2, setC2] = useState(null);
const [c3, setC3] = useState(null);
const [c4, setC4] = useState(null);
const [c5, setC5] = useState(null);
const [c6, setC6] = useState(null);
const [socket, setSocket] = useState(null);
const [isConnected, setIsConnected] = useState(false);
useEffect(() => {
const urlParams = new URLSearchParams(window.location.search);
const event_id = urlParams.get('event_id');
if (!isConnected) {
const newSocket =window.io('https://cards.royal777.io', { transports: ['websocket'] });
newSocket.emit('event', event_id);
setSocket(newSocket);
setIsConnected(true);
}
}, [isConnected]);
useEffect(() => {
if (socket) {
const urlParams = new URLSearchParams(window.location.search);
const event_id = urlParams.get('event_id');
const event_id_match_odds = `match_odds_${event_id}`;
socket.on(event_id_match_odds, (data) => {
const matchOdds = JSON.parse(data);
setC1(matchOdds[0].C1);
setC2(matchOdds[0].C2);
setC3(matchOdds[0].C3);
setC4(matchOdds[0].C4);
setC5(matchOdds[0].C5);
setC6(matchOdds[0].C6);
setIsPlayer(matchOdds[0].runners.obj.name1full);
setIsPlayer1(matchOdds[0].runners.obj.name2full);
setIsAutotime(matchOdds[0].autotime);
setIsBack1(matchOdds[0].runners.obj.back1);
setIsBack2(matchOdds[0].runners.obj.back2);
setIsLay1(matchOdds[0].runners.obj.lay1);
setIsLay2(matchOdds[0].runners.obj.lay2);
setIsMax(matchOdds[0].bet_max);
setIsMin(matchOdds[0].bet_min);
setIsMid(matchOdds[0].mid);
setIsDataReceived(true);
console.log("Match Odds", matchOdds);
});
const event_id_match_result = `match_results_${event_id}`;
socket.on(event_id_match_result, (data) => {
console.log("Match Result", JSON.parse(data));
});
}
}, [socket])
const toggleIframe = () => {
setShowIframe(!showIframe);
};
return(
<>
<div className="container-fluid p-0">
   <div style={{backgroundColor:'#454545'}}className=" mt-2">
      <button className="btn btn-default" onClick={toggleIframe}>
         <div className="row">
            <div className="col-6   ">
               <label className="text-white"><i className="fa fa-microphone text-white text-left" aria-hidden="true"></i> News</label> 
            </div>
            <div className="col-6 ">
               <p className="mb-0 text-info rigth pe-2 ps-1" style={{width:'59px'}}><span>ROUND:{isMid} </span>  </p>
            </div>
         </div>
      </button>
   </div>
   {showIframe && isDataReceived &&(
   <div className="position-relative ">
      <div className="embed-responsive embed-responsive-16by9 ">
          <iframe width="160" height="215" className="embed-responsive-item w-100" src="https://www.youtube.com/" title="Video"  allowFullScreen ></iframe>
      </div>
      <div className="position-absolute p-0 d-flex justify-content-between" style={{top: "0px",left: "0px", right:"0px"}}>
      <div className="pt-1">
         <img className="px-1" src={`https://dzm0kbaskt4pv.cloudfront.net/v2/static/front/img/cards/${c1}.png`} alt="C1" style={{height: "30px", width:"auto"}}/>             
         <img className="px-1" src={`https://dzm0kbaskt4pv.cloudfront.net/v2/static/front/img/cards/${c2}.png`} alt="C2" style={{height: "30px", width:"auto"}}/>             
         <img className="px-1" src={`https://dzm0kbaskt4pv.cloudfront.net/v2/static/front/img/cards/${c3}.png`} alt="C3" style={{height: "30px", width:"auto"}}/>                      
      </div>
      <div className="pt-1">
         <img className="px-1" src={`https://dzm0kbaskt4pv.cloudfront.net/v2/static/front/img/cards/${c4}.png`} alt="C4" style={{height: "30px", width:"auto"}}/>             
         <img className="px-1" src={`https://dzm0kbaskt4pv.cloudfront.net/v2/static/front/img/cards/${c5}.png`} alt="C5" style={{height: "30px", width:"auto"}}/>             
         <img className="px-1" src={`https://dzm0kbaskt4pv.cloudfront.net/v2/static/front/img/cards/${c6}.png`} alt="C6" style={{height: "30px", width:"auto"}}/>    
      </div>
   </div>
   <div className="position-absolute d-flex justify-content-between   " style={{top: "35px",left: "5px", right:"5px"}}>
   <div className="d-flex justify-content-start">
      <p className="mb-0 text-white" style={{fontSize: "15px"}}>{isPlayer}</p>
   </div>
   <div className="d-flex justify-content-end">
      <p className="mb-0 text-white" style={{fontSize: "15px"}}>{isPlayer1}</p>
   </div>
</div>
<div className="position-absolute d-flex justify-content-between p-2" style={{bottom: "0px", right:"8px"}}>
<div className="d-flex justify-content-end">
   <p className="mb-0 text-white" style={{fontSize: "13px"}}>{isAutotime}</p>
</div>
</div>
</div>
)}
<div className="card border-0 ">
   <div className="bg-secondary text-white">
      <div className="d-flex justify-content-between">
         <div className="d-flex justify-content-start">
            <p style={{fontSize:"12px"}} className="m-0 pe-2 ps-2">
               Last Result
            </p>
         </div>
         <div className="d-flex justify-content-end">
            <p style={{fontSize:"12px"}}  className="m-0 pe-2 ps-2">
               Rules
            </p>
            <p style={{fontSize:"12px"}} className="m-0 pe-2 ps-2">
               View All
            </p>
         </div>
      </div>
   </div>
   <div className="row mx-0">
      <div className="col p-1 ">
         <div className="rounded-circle bg-primary text-white text-center" data-toggle="modal" data-target="#Modal">
            <p className="mb-0">A</p>
         </div>
      </div>
      <div className="col p-1 ">
         <div className="rounded-circle bg-primary text-white text-center" data-toggle="modal" data-target="#Modal1">
            <p className="mb-0">A</p>
         </div>
      </div>
      <div className="col p-1 ">
         <div style={{backgroundColor:'#FF6600'}} className="rounded-circle text-white text-center" data-toggle="modal" data-target="#Modal2">
            <p className="mb-0">B</p>
         </div>
      </div>
      <div className="col p-1 ">
         <div className="rounded-circle bg-primary text-white text-center" data-toggle="modal" data-target="#Modal3">
            <p className="mb-0">A</p>
         </div>
      </div>
      <div className="col p-1 ">
         <div style={{backgroundColor:'#FF6600'}} className="rounded-circle text-white text-center" data-toggle="modal" data-target="#Modal4">
            <p className="mb-0">B</p>
         </div>
      </div>
      <div className="col p-1 ">
         <div style={{backgroundColor:'#FF6600'}} className="rounded-circle text-white text-center" data-toggle="modal" data-target="#Modal5">
            <p className="mb-0">B</p>
         </div>
      </div>
      <div className="col p-1 ">
         <div className="rounded-circle bg-primary text-white text-center">
            <p className="mb-0" data-toggle="modal" data-target="#Modal6">A</p>
         </div>
      </div>
      <div className="col p-1 ">
         <div  style={{backgroundColor:'#FF6600'}} className="rounded-circle text-white text-center" data-toggle="modal" data-target="#Modal7">
            <p className="mb-0">B</p>
         </div>
      </div>
      <div className="col p-1 ">
         <div className="rounded-circle bg-primary text-white text-center">
            <p className="mb-0" data-toggle="modal" data-target="#Modal8">A</p>
         </div>
      </div>
      <div className="col p-1 ">
         <div style={{backgroundColor:'#FF6600'}} className="rounded-circle text-white text-center" data-toggle="modal" data-target="#Modal9">
            <p className="mb-0">B</p>
         </div>
      </div>
   </div>
  
   <table className="table table-bordered table-sm mb-2 text-center p-2 " style={{fontSize:'14px'}}>
      <thead>
         <tr>
            <th className="p-2" style={{fontSize:"10px"}}>MAX: {isMax.toLocaleString('en')} MIN: {isMin}</th>
            <th style={{backgroundColor:'#5fafee'}} className="text-center">LAGAI</th>
            <th style={{backgroundColor:'#fb9eb1'}} className="text-center">KHAI</th>
         </tr>
      </thead>
      <tr>
         <th className="p-3 table-secondary" style={{fontSize:"11px"}}>{isPlayer}</th>
         <td style={{backgroundColor:'#5fafee'}}className="p-2" >
            { isBack1 ? 
            <div data-toggle="modal" data-target="#modal1"> {(isBack1 / 100)} </div>
            : <span className="badge badge-transparent border border-dark p-1 suspended">SUSPENDED</span>}
         </td>
         <td style={{backgroundColor:'#fb9eb1'}}className="p-2" >
            {isLay1 ? 
            <div data-toggle="modal" data-target="#lay1"> {(isLay1 / 100)} </div>
            :<span className="badge badge-transparent border border-dark p-1 suspended">SUSPENDED</span>}
         </td>
      </tr>
      <tr>
         <th  className="p-3 col-10" style={{fontSize:"11px"}}>{isPlayer1}</th>
         <td style={{backgroundColor:'#5fafee'}}className="p-2">
            {isBack2 ? 
            <div data-toggle="modal" data-target="#modal2"> {(isBack2 / 100)} </div>
            : <span className="badge badge-transparent border border-dark p-1 suspended">SUSPENDED</span>}
         </td>
         <td style={{backgroundColor:'#fb9eb1'}}className="p-2">
            {isLay2 ?
            <div data-toggle="modal" data-target="#lay2"> {(isLay2 / 100)} </div>
            :<span className="badge badge-transparent border border-dark p-1 suspended">SUSPENDED</span>}
         </td>
      </tr>
   </table>
</div>
</div>
  {/*<LuckyModal id="back1"  badge="Player A - L" title="Player A"/>
  <LuckyModal id="back2" badge="Player B - L" title="Player B"/>*/}

  {/*<LuckyModal id="modal"  badge="modal1" title="LOW CARD"/>
  <LuckyModal id="modal1" badge="HIGH CardA - L" title="HIGH CARD"/>
*/}


  {isBack1 &&(
<LuckyModal id="modal1"  badge={<>{isBack1 ? (
<p className="mb-0"> {isBack1/100} - L </p>
): " "} </>} title={isPlayer} isBack1={isBack1}/>
)}
<LuckyModal id="modal1"   badge={<>{isLay1 ? (
<p className="mb-0"> {isLay1/100} - L </p>
): " "} </>} title={isPlayer}/>
<LuckyModal id="modal2"  badge={<>{isBack2 ? (
<p className="mb-0"> {isBack2/100} - L </p>
): " "} </>} title={isPlayer1}/>
<LuckyModal id="modal2"   badge={<>{isLay2 ? (
<p className="mb-0"> {isLay2/100} - L </p>
): " "} </>} title={isPlayer1}/>

</>
);
}