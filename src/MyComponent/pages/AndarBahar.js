import LuckyModal from './LuckyModal.js'; 
import React,  { useState } from 'react';
export default function AndarBahar() {
const [showIframe, setShowIframe] = useState(true);
const toggleIframe = () => {
setShowIframe(!showIframe);
};
return(
<>
<div className="container-fluid">
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
      {/*</div>*/}
   </div>
   {showIframe && (
   <div className="embed-responsive embed-responsive-16by9 w-100 ">
      <iframe width="351" height="200" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0 w-100"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share webxr;"  allowFullScreen></iframe>
   </div>
   )}
   <div className="card border-0 mb-5 pb-5">
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
            <div className="rounded-circle bg-primary text-white text-center">
               <p className="mb-0">A</p>
            </div>
         </div>
         <div className="col p-1 ">
            <div style={{backgroundColor:'#ff6600'}} className="rounded-circle text-white text-center">
               <p className="mb-0">B</p>
            </div>
         </div>
         <div className="col p-1 ">
            <div className="rounded-circle bg-primary text-white text-center">
               <p className="mb-0">A</p>
            </div>
         </div>
         <div className="col p-1 ">
            <div style={{backgroundColor:'#ff6600'}} className="rounded-circle text-white text-center">
               <p className="mb-0">B</p>
            </div>
         </div>
         <div className="col p-1 ">
            <div style={{backgroundColor:'#ff6600'}} className="rounded-circle text-white text-center">
               <p className="mb-0">B</p>
            </div>
         </div>
         <div className="col p-1 ">
            <div className="rounded-circle bg-primary text-white text-center">
               <p className="mb-0">A</p>
            </div>
         </div>
         <div className="col p-1 ">
            <div  style={{backgroundColor:'#ff6600'}} className="rounded-circle text-white text-center">
               <p className="mb-0">B</p>
            </div>
         </div>
         <div className="col p-1 ">
            <div className="rounded-circle bg-primary text-white text-center">
               <p className="mb-0">A</p>
            </div>
         </div>
         <div className="col p-1 ">
            <div style={{backgroundColor:'#ff6600'}} className="rounded-circle text-white text-center">
               <p className="mb-0">B</p>
            </div>
         </div>
      </div>
      <div className="card text-center">
         <p className="mb-0">Andar</p>
         <hr className="ml-3 mr-3 mt-0 mb-2"/>
         <div className="row mb-2 px-3">
            <div className="col-4">
               <button className="btn btn-default text-white w-100" style={{ fontSize: "10px", backgroundColor:"#18a0b6" }} data-bs-toggle="modal" data-bs-target="#Modal">
               <div>SA</div>
               <span className="d-block"> (11) </span>
               </button>
            </div>
            <div className="col-4">
               <button className="btn btn-default text-white w-100" style={{ fontSize: "10px", backgroundColor:"#18a0b6"}} data-bs-toggle="modal" data-bs-target="#Modal2">
               <div>1ST BET</div>
               <span className="d-block"> (0.96) </span>
               </button>
            </div>
            <div className="col-4">
               <button className="btn btn-default text-white w-100" style={{ fontSize: "10px", backgroundColor:"#18a0b6"}} data-bs-toggle="modal" data-bs-target="#Modal3">
               <div>2ND BET</div>
               <span className="d-block"> (0.00) </span>
               </button>
            </div>
         </div>
         <hr className="ml-3 mr-3 mt-0 mb-0"/>
         <p className="mb-0">Bahar</p>
         <hr className="ml-3 mr-3 mt-0 mb-2"/>
         <div className="row mb-2 px-3">
            <div className="col-4">
               <button className="btn btn-dark text-white w-100" style={{ fontSize: "10px" }} data-bs-toggle="modal" data-bs-target="#Modal4">
               <div>SB</div>
               <span className="d-block"> (11) </span>
               </button>
            </div>
            <div className="col-4">
               <button className="btn btn-dark text-white w-100" style={{ fontSize: "10px" }} data-bs-toggle="modal" data-bs-target="#Modal5">
               <div>1ST BET</div>
               <span className="d-block"> (0.96) </span>
               </button>
            </div>
            <div className="col-4">
               <button className="btn btn-dark text-white w-100" style={{ fontSize: "10px" }} data-bs-toggle="modal" data-bs-target="#Modal6">
               <div>2ND BET</div>
               <span className="d-block"> (0.00) </span>
               </button>
            </div>
         </div>
         <hr className="mb-2 mt-0"/>
         <div className="row mb-2 px-3">
            <div className="col-6">
               <button className="btn btn-warning text-dark w-100" style={{ fontSize: "13px" }} data-bs-toggle="modal" data-bs-target="#Modal7">
               <div><b>JOKER ODD</b></div>
               <span className="d-block"> <b>(0.83)</b> </span>
               </button>
            </div>
            <div className="col-6">
               <button className="btn btn-warning text-dark w-100" style={{ fontSize: "13px" }} data-bs-toggle="modal" data-bs-target="#Modal8">
               <div><b>JOKER EVEN</b></div>
               <span className="d-block"> <b>(1.12)</b> </span>
               </button>
            </div>
         </div>
         <hr className="mb-2 mt-0"/>
         <div className="row mb-2 px-3">
            <div className="col-3">
               <img src= " ./images/hukum.png " style={{ height:"40px", width:"auto"}} alt="" data-bs-toggle="modal" data-bs-target="#Modal9"/> 
            </div>
            <div className="col-3">
               <img src= " ./images/chidi.png " style={{ height:"40px", width:"auto"}} alt="" data-bs-toggle="modal" data-bs-target="#Modal10"/>
            </div>
            <div className="col-3">
               <img src= " ./images/paan.png " style={{ height:"40px", width:"auto"}} alt="" data-bs-toggle="modal" data-bs-target="#Modal11"/>
            </div>
            <div className="col-3">
               <img src= " ./images/ennt.png " style={{ height:"40px", width:"auto"}} alt="" data-bs-toggle="modal" data-bs-target="#Modal12"/>
            </div>
         </div>
         <hr className="mb-2 mt-2"/>
         <p className="mb-2 text-danger">(0.00)</p>
         <div className="row mb-2 px-3">
            <div className="col-2">
               <img src= " ./images/ikka.jpeg " style={{ height:"40px", width:"auto"}} alt="" data-bs-toggle="modal" data-bs-target="#Modal13"/>
            </div>
            <div className="col-2">
               <img src= " ./images/duggi.jpeg " style={{ height:"40px", width:"auto"}} alt="" data-bs-toggle="modal" data-bs-target="#Modal14"/>
            </div>
            <div className="col-2">
               <img src= " ./images/tiggi.jpeg " style={{ height:"40px", width:"auto"}} alt="" data-bs-toggle="modal" data-bs-target="#Modal15"/>
            </div>
            <div className="col-2">
               <img src= " ./images/chaugi.jpeg " style={{ height:"40px", width:"auto"}} alt="" data-bs-toggle="modal" data-bs-target="#Modal16"/>
            </div>
            <div className="col-2">
               <img src= " ./images/pangi.jpeg " style={{ height:"40px", width:"auto"}} alt="" data-bs-toggle="modal" data-bs-target="#Modal17"/>
            </div>
            <div className="col-2">
               <img src= " ./images/chagi.jpeg " style={{ height:"40px", width:"auto"}} alt="" data-bs-toggle="modal" data-bs-target="#Modal18"/>
            </div>
         </div>
         <div className="row mb-2 px-3">
            <div className="col-2">
               <img src= " ./images/satti.jpg " style={{ height:"40px", width:"auto"}} alt="" data-bs-toggle="modal" data-bs-target="#Modal19"/>
            </div>
            <div className="col-2">
               <img src= " ./images/atthi.jpeg " style={{ height:"40px", width:"auto"}} alt="" data-bs-toggle="modal" data-bs-target="#Modal20"/>
            </div>
            <div className="col-2">
               <img src= " ./images/nehla.jpeg " style={{ height:"40px", width:"auto"}} alt="" data-bs-toggle="modal" data-bs-target="#Modal21"/>
            </div>
            <div className="col-2">
               <img src= " ./images/dehla.jpeg " style={{ height:"40px", width:"auto"}} alt="" data-bs-toggle="modal" data-bs-target="#Modal22"/>
            </div>
            <div className="col-2">
               <img src= " ./images/gulla.jpeg " style={{ height:"40px", width:"auto"}} alt="" data-bs-toggle="modal" data-bs-target="#Modal23"/>
            </div>
            <div className="col-2">
               <img src= " ./images/begum.jpeg " style={{ height:"40px", width:"auto"}} alt="" data-bs-toggle="modal" data-bs-target="#Modal24"/>
            </div>
         </div>
         <div className="row mb-2 px-3">
            <div className="col-2">
               <img src= " ./images/badshah.jpeg " style={{ height:"40px", width:"auto"}} alt="" data-bs-toggle="modal" data-bs-target="#Modal25"/>
            </div>
         </div>
      </div>
      <LuckyModal id="Modal"  badge="SA CardA - L" title="SA Bet (0.96)"/>
      <LuckyModal id="Modal2" badge="1st Bet( 0.96 )A - L" title="1st Bet (0.96)"/>
      <LuckyModal id="Modal3" badge="2nd Bet( 0.96 )A - L" title="2nd Bet (0.96)"/>
      <LuckyModal id="Modal4" badge="SB( 11 )A - L" title="SB (11)"/>
      <LuckyModal id="Modal5" badge="1st Bet( 0.96 )A - L" title="1st Bet (0.96)"/>
      <LuckyModal id="Modal6" badge="2nd Bet( 0.96 )A - L" title="2nd Bet (0.96)"/>
      <LuckyModal id="Modal7" badge="Joker Odd (0.83)A - L" title="Joker Odd (0.83)"/>
      <LuckyModal id="Modal8" badge="Joker Even (1.12)A - L" title="Joker Even (1.12)"/>
      <LuckyModal id="Modal9" badge="( 2.83 )A - L" title={<><img src= "./images/hukum.png" alt="" style={{ height:"40px", width:"auto"}}/><span>(2.83)</span></>}/>
      <LuckyModal id="Modal10" badge="( 2.83 )A - L" title={<><img src= "./images/chidi.png" alt="" style={{ height:"40px", width:"auto"}}/><span>(2.83)</span></>}/>
      <LuckyModal id="Modal11" badge="( 2.83 )A - L" title={<><img src= "./images/paan.png" alt="" style={{ height:"40px", width:"auto"}}/><span>(2.83)</span></>}/>
      <LuckyModal id="Modal12" badge="( 2.83 )A - L" title={<><img src= "./images/ennt.png" alt="" style={{ height:"40px", width:"auto"}}/><span>(2.83)</span></>}/>
      <LuckyModal id="Modal13" badge="A - L" title={<img src= "./images/ikka.jpeg" alt="" style={{ height:"40px", width:"auto"}}/>}/>
      <LuckyModal id="Modal14" badge="A - L" title={<img src= "./images/duggi.jpeg" alt="" style={{ height:"40px", width:"auto"}}/>}/>
      <LuckyModal id="Modal15" badge="A - L" title={<img src= "./images/tiggi.jpeg" alt="" style={{ height:"40px", width:"auto"}}/>}/>
      <LuckyModal id="Modal16" badge="A - L" title={<img src= "./images/chaugi.jpeg" alt="" style={{ height:"40px", width:"auto"}}/>}/>
      <LuckyModal id="Modal17" badge="A - L" title={<img src= "./images/pangi.jpeg" alt="" style={{ height:"40px", width:"auto"}}/>}/>
      <LuckyModal id="Modal18" badge="A - L" title={<img src= "./images/chagi.jpeg" alt="" style={{ height:"40px", width:"auto"}}/>}/>
      <LuckyModal id="Modal19" badge="A - L" title={<img src= "./images/satti.jpeg" alt="" style={{ height:"40px", width:"auto"}}/>}/>
      <LuckyModal id="Modal20" badge="A - L" title={<img src= "./images/atthi.jpeg" alt="" style={{ height:"40px", width:"auto"}}/>}/>
      <LuckyModal id="Modal21" badge="A - L" title={<img src= "./images/nehla.jpeg" alt="" style={{ height:"40px", width:"auto"}}/>}/>
      <LuckyModal id="Modal22" badge="A - L" title={<img src= "./images/dehla.jpeg" alt="" style={{ height:"40px", width:"auto"}}/>}/>
      <LuckyModal id="Modal23" badge="A - L" title={<img src= "./images/gulla.jpeg" alt="" style={{ height:"40px", width:"auto"}}/>}/>
      <LuckyModal id="Modal24" badge="A - L" title={<img src= "./images/begum.jpeg" alt="" style={{ height:"40px", width:"auto"}}/>}/>
      <LuckyModal id="Modal25" badge="A - L" title={<img src= "./images/badshah.jpeg" alt="" style={{ height:"40px", width:"auto"}}/>}/>
   </div>
</div>
</>
);
}