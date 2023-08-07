import LuckyModal from './LuckyModal.js';
import {useState} from "react";
function Lucky7(){
const [showIframe, setShowIframe] = useState(true);
const toggleIframe = () => {
setShowIframe(!showIframe);
  };




  const urlParams = new URLSearchParams(window.location.search);
  const event_id = urlParams.get('event_id');

  const socket = window.io('https://cards.royal777.io', {transports : ['websocket']});
  socket.emit('event', event_id);

  const event_id_match_odds = `match_odds_${event_id}`;
socket.on(event_id_match_odds, (data) => {
  console.log("Match Odds", JSON.parse(data));
});
const event_id_match_result = `match_results_${event_id}`;
socket.on(event_id_match_result, (data) =>{
console.log("Match Result", JSON.parse(data));
});

// socket.addEventListener('open', (event) => {
//   console.log('WebSocket connection established.');
// });

// socket.addEventListener('message', (event) => {
//   console.log('Received message:', event.data);
// });

// socket.addEventListener('error', (event) => {
//   console.error('WebSocket error:', event);
// });

// socket.addEventListener('close', (event) => {
//   console.log('WebSocket connection closed:', event.code, event.reason);
// });


return(
<div className="container-fluid p-0" >
   <div style={{backgroundColor:'#454545'}}className=" mt-2">
   <button className="btn btn-default" onClick={toggleIframe}>
    <div className="row">
       <div className="col-6   ">
         <label className="text-white"><i className="fa fa-microphone text-white text-left" aria-hidden="true"></i> News</label> 
      </div>
      <div className="col-6 ">  
         <p className="mb-0 text-white text-left rigth pe-2 ps-1" style={{width:'59px'}}> ROUND:36.231903123738  </p>
      </div>
    </div>
   </button>
      
   </div>
   
   

   {showIframe && (
        <div className="embed-responsive embed-responsive-16by9">
          <iframe width="100%" height="315" src="https://tv.bet99.io/2222.php" title="videos"></iframe>
        </div>
      )}
   <div className="Lucky7 text-center mb-5 pb-5">
      <div className="bg-secondary text-white">
         <div className="d-flex justify-content-between">
            <div className="d-flex justify-content-start">
               <p style={{fontSize:"12px"}} className="m-0 pe-2 ps-2">
                  Last Result
               </p>
            </div>
            <div className="d-flex justify-content-end">
               <p style={{fontSize:"12px"}} className="m-0 pe-2">
                  Rules
               </p>
               <p style={{fontSize:"12px"}} className="m-0 pe-2">
                  View All
               </p>
            </div>
         </div>
      </div>
      <div className="row mx-0">
         <div className="col p-1 ">
            <div className="rounded-circle bg-primary text-white text-center" style={{height: "30px",fontSize: '18px',}}>
               <p className="mb-0">L</p>
            </div>
         </div>
         <div className="col p-1 ">
            <div className="rounded-circle bg-primary text-white text-center" style={{height: "30px",fontSize: '18px'}}>
               <p className="mb-0">L</p>
            </div>
         </div>
         <div className="col p-1 ">
            <div style={{backgroundColor:'#007dff', height: '30px',fontSize: '18px'}} className="rounded-circle text-white text-center">
               <p className="mb-0">L</p>
            </div>
         </div>
         <div className="col p-1 ">
            <div className="rounded-circle bg-primary text-white text-center" style={{height: "30px", fontSize: '18px'}} >
               <p className="mb-0">L</p>
            </div>
         </div>
         <div className="col p-1 ">
            <div style={{backgroundColor:'#f9c000', height: '30px',fontSize: '18px'}} className="rounded-circle text-white text-center">
               <p className="mb-0">H</p>
            </div>
         </div>
         <div className="col p-1 ">
            <div className="rounded-circle bg-secondary text-white text-center" style={{height: "30px",fontSize: '18px'}}>
               <p className="mb-0">7</p>
            </div>
         </div>
         <div className="col p-1 ">
            <div className="rounded-circle bg-primary text-white text-center" style={{height: "30px", fontSize: '18px'}}>
               <p className="mb-0">L</p>
            </div>
         </div>
         <div className="col p-1 ">
            <div  style={{backgroundColor:'#007dff', height: '30px',fontSize: '18px'}} className="rounded-circle text-white text-center">
               <p className="mb-0">L</p>
            </div>
         </div>
         <div className="col p-1 ">
            <div className="rounded-circle bg-primary text-white text-center" style={{height: "30px" ,fontSize: '18px'}}>
               <p className="mb-0">L</p>
            </div>
         </div>
         <div className="col p-1 ">
            <div style={{backgroundColor:'#f9c000', height: '30px',fontSize: '18px'}} className="rounded-circle text-white text-center">
               <p className="mb-0">H</p>
            </div>
         </div>
      </div>
      <div className="min text-end text-black">
         <p className="mb-0 me-1 fw-medium">MIN: 100 MAX: 10,000</p>
      </div>
      <table className="table table-bordered mb-0 border-left-0 border-right-0">
         <tbody>
            <tr  style={{backgroundColor:'#f2f2f2'}}>
               <td className="border-left-0   p-2">
                  <button className="btn btn-dark w-100" data-bs-toggle="modal" data-bs-target="#modal">
                     LOW CARD
                  </button>
               </td>
               <td >
                  <img style={{width:'28px',fontSize: '18px'}} src="./images/satti.jpg " alt=""/>
               </td>
               <td  className="border-right-0 p-2">
                  <button className="btn btn-dark w-100" data-bs-toggle="modal" data-bs-target="#modal1">
                     HIGH CARD
                  </button>
               </td>
            </tr>
            <tr >
               <td  className="border-left-0 p-2">
                  <button className="btn btn-dark w-100" data-bs-toggle="modal" data-bs-target="#modal2">EVEN</button>
               </td>
               <td >
               </td>
               <td className="border-right-0 p-2">
                  <button className="btn btn-dark w-100" data-bs-toggle="modal" data-bs-target="#modal3">ODD</button>
               </td>
            </tr>
            <tr style={{backgroundColor:'#f2f2f2'}}>
               <td className="border-left-0 p-2">
                  <button className="btn btn-dark w-100" data-bs-toggle="modal" data-bs-target="#modal4">RED</button>
               </td>
               <td >
               </td>
               <td className="border-right-0 p-2">
                  <button className="btn btn-dark w-100" data-bs-toggle="modal" data-bs-target="#modal5">BLACK</button>
               </td>
            </tr>
         </tbody>
      </table>
      <LuckyModal id="modal"  badge="LOW CardA - L" title="LOW CARD"/>
      <LuckyModal id="modal1" badge="HIGH CardA - L" title="HIGH CARD"/>
      <LuckyModal id="modal2" badge="EvenA CardA - L" title="EvenA CARD"/>
      <LuckyModal id="modal3" badge="ODDB CardA - L" title="ODDB CARD"/>
      <LuckyModal id="modal4" badge="REDA CardA - L" title="REDA CARD"/>
      <LuckyModal id="modal5" badge="BLACK CardA - L" title="BLACK CARD"/>
   </div>
</div>
);
}
export default Lucky7