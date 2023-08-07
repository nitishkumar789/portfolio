import {useState} from "react";
import LuckyModal from './LuckyModal.js';

 function Teenpattioneday(){
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
 	return(
 			<div className="container-fluid p-0">
   {/*<div className="row mt-2">
      <div className="col-3">
         <p className="mb-0"> ROUND:36.231903123738  </p>
      </div>
   </div>
   <div className="row">
      <div className="col-3 ml-auto">
         <span className="badge badge-danger">x Live Tv</span>
      </div>
   </div>*/}
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
   
   <div className="embed-responsive embed-responsive-16by9 w-100">
      <iframe className="embed-responsive-item w-100" title="Video" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen ></iframe>
   </div>
   <div className="Lucky7 text-center">
      <div className="bg-secondary text-white">
         <div className="d-flex justify-content-between">
            <div className="d-flex justify-content-start">
               <p style={{fontSize:"12px"}} className="m-0 pe-2 ps-2">
                  Last Result
               </p>
            </div>
            <div className="d-flex justify-content-end">
               <p style={{fontSize:"12px"}} className="m-0 pe-2 ps-2">
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
            <div className="rounded-circle bg-primary text-white text-center">
               <p className="mb-0">A</p>
            </div>
         </div>
         <div className="col p-1 ">
            <div style={{backgroundColor:'#ffc107'}} className="rounded-circle bg-primary text-white text-center">
               <p className="mb-0">A</p>
            </div>
         </div>
         <div className="col p-1 ">
            <div style={{backgroundColor:'#ffc107'}} className="rounded-circle text-white text-center">
               <p className="mb-0">B</p>
            </div>
         </div>
         <div className="col p-1 ">
            <div className="rounded-circle bg-primary text-white text-center">
               <p className="mb-0">A</p>
            </div>
         </div>
         <div className="col p-1 ">
            <div style={{backgroundColor:'#ffc107'}} className="rounded-circle text-white text-center">
               <p className="mb-0">B</p>
            </div>
         </div>
         <div className="col p-1 ">
            <div style={{backgroundColor:'#ffc107'}} className="rounded-circle  text-white text-center">
               <p className="mb-0">B</p>
            </div>
         </div>
         <div className="col p-1 ">
            <div className="rounded-circle bg-primary text-white text-center">
               <p className="mb-0">A</p>
            </div>
         </div>
         <div className="col p-1 ">
            <div  style={{backgroundColor:'#ffc107'}} className="rounded-circle text-white text-center">
               <p className="mb-0">B</p>
            </div>
         </div>
         <div className="col p-1 ">
            <div style={{backgroundColor:'#ffc107'}} className="rounded-circle bg-primary text-white text-center">
               <p className="mb-0">A</p>
            </div>
         </div>
         <div className="col p-1 ">
            <div style={{backgroundColor:'#ffc107'}} className="rounded-circle text-white text-center">
               <p className="mb-0">B</p>
            </div>
         </div>
      </div>
      <table className="table table-bordered table-sm mb-2 text-center p-2" style={{fontSize:'14px'}}>
                  <thead>
                    <tr>
                      <th >100-10,000</th>
                      <th className="">LAGAI</th>
                      <th className="">KHAI</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="p-3 bg-muted" >Player A</th>
                      <td className="p-3 bg-primary"><span className="badge badge-transparent  p-1 suspended">SUSPENDED</span></td>
                      <td className="p-3 bg-danger"><span className="badge badge-transparent  p-1 suspended">SUSPENDED</span></td>
                    </tr>
                    <tr>
                      <th className="p-3 col-10" >Player B</th>
                      <td className="p-3 bg-primary"><span className="badge badge-transparent  p-1 suspended">SUSPENDED</span></td>
                      <td className="p-3 bg-danger"><span className="badge badge-transparent  p-1 suspended">SUSPENDED</span></td>
                    </tr>
                   {/* <tr>
                      <th className="p-3 table-warning" >The Draw</th>
                      <td className="p-3 table-primary"><span className="badge badge-transparent border border-dark p-1 suspended">SUSPENDED</span></td>
                      <td className="p-3 table-danger"><span className="badge badge-transparent border border-dark p-1 suspended">SUSPENDED</span></td>
                    </tr>*/}
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

 export default Teenpattioneday;