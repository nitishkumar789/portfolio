import {useState} from "react";
import LuckyModal from './LuckyModal.js';

 function Dragon(){
const [showIframe, setShowIframe] = useState(true);
  const toggleIframe = () => {
    setShowIframe(!showIframe);
  }; 
 	return(
 			<div className="container-fluid mt-2 p-0">
   {/*<div style={{backgroundColor:'#454545'}}className=" mt-2">*/}
   <button  style={{backgroundColor:'#57d0ff'}} className="btn btn-default" onClick={toggleIframe}>
    <div className="row">
       
      <div className="col-6 ">  
         <p className="mb-0 text-black text-left rigth pe-2 ps-1" style={{width:'1px'}}> ROUND:36.231903123738  </p>
      </div>
    </div>
     <div className=" ml-auto">
         <button
         className={showIframe ? "btn btn-danger tvButton2" : "btn btn-warning tvButton"}
         onClick={toggleIframe}
         >
         X Live Tv
         </button>
      </div>
      
   </button>
    {/*</div>*/}
       <div className="embed-responsive embed-responsive-16by9 w-100">
      <iframe className="embed-responsive-item w-100" title="Video" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen ></iframe>
   </div>

  
   <div className="Lucky7 text-center mb-5 pb-5">
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
               <p className="mb-0">D</p>
            </div>
         </div>
         <div className="col p-1 ">
            <div className="rounded-circle bg-primary text-white text-center">
               <p className="mb-0">D</p>
            </div>
         </div>
         <div className="col p-1 ">
            <div style={{backgroundColor:'#f9c000'}} className="rounded-circle text-white text-center">
               <p className="mb-0">T</p>
            </div>
         </div>
         <div className="col p-1 ">
            <div className="rounded-circle bg-primary text-white text-center">
               <p className="mb-0">D</p>
            </div>
         </div>
         <div className="col p-1 ">
            <div style={{backgroundColor:'#f9c000'}} className="rounded-circle text-white text-center">
               <p className="mb-0">T</p>
            </div>
         </div>
         <div className="col p-1 ">
            <div style={{backgroundColor:'#007dff'}} className="rounded-circle bg-secondary text-white text-center">
               <p className="mb-0">7</p>
            </div>
         </div>
         <div className="col p-1 ">
            <div className="rounded-circle bg-primary text-white text-center">
               <p className="mb-0">L</p>
            </div>
         </div>
         <div className="col p-1 ">
            <div  style={{backgroundColor:'#007dff'}} className="rounded-circle text-white text-center">
               <p className="mb-0">L</p>
            </div>
         </div>
         <div className="col p-1 ">
            <div className="rounded-circle bg-primary text-white text-center">
               <p className="mb-0">L</p>
            </div>
         </div>
         <div className="col p-1 ">
            <div style={{backgroundColor:'#f9c000'}} className="rounded-circle text-white text-center">
               <p className="mb-0">T</p>
            </div>
         </div>
      </div>
      <div className="min text-end text-black">
         <p className="mb-0 me-2">MIN: 100 MAX: 10,000</p>
      </div>
      <table className="table table-bordered mb-0 border-left-0 border-right-0">
         <tbody>
            <tr  style={{backgroundColor:'#f2f2f2'}}>
               <td className="border-left-0 p-2">
                  <button className="btn btn-dark w-100" data-bs-toggle="modal" data-bs-target="#modal">
                     DRAGON
                  </button>
               </td>
               <td >
             <spam className="bodge bg-secondary pb-0">
                  <p className="mb-1">TIE</p>
               </spam>
                  {/*<img style={{height:'31px',width:'31px'}}  alt=""/>*/}
               </td>
               <td  className="border-right-0 p-2">
                  <button className="btn btn-dark w-100" data-bs-toggle="modal" data-bs-target="#modal1">
                     TIGER
                  </button>
               </td>
            </tr>
            <tr >
               <td  className="border-left-0 p-2">
                  <button className="btn btn-dark w-100" data-bs-toggle="modal" data-bs-target="#modal2">DRAGON EVEN</button>
               </td>
               <td >
               </td>
               <td className="border-right-0 p-2">
                  <button className="btn btn-dark w-100" data-bs-toggle="modal" data-bs-target="#modal3">DRAGON ODD</button>
               </td>
            </tr>
            <tr style={{backgroundColor:'#f2f2f2'}}>
               <td className="border-left-0 p-2">
                  <button className="btn btn-dark w-100" data-bs-toggle="modal" data-bs-target="#modal4">DRAGON RED</button>
               </td>
               <td >
               </td>
               <td className="border-right-0 p-2">
                  <button className="btn btn-dark w-100" data-bs-toggle="modal" data-bs-target="#modal5">TIGER ODD</button>
               </td>
               </tr>
            <tr style={{backgroundColor:''}}>
               <td className="border-left-0 p-2">
                  <button className="btn btn-dark w-100" data-bs-toggle="modal" data-bs-target="#modal6">TIGER EVEN</button>
               </td>
               <td >
               </td>
               <td className="border-right-0 p-2">
                  <button className="btn btn-dark w-100" data-bs-toggle="modal" data-bs-target="#modal7">TIGER ODD</button>
               </td>

            </tr>
              <tr style={{backgroundColor:'#f2f2f2'}}>
               <td className="border-left-0 p-2">
                  <button className="btn btn-dark w-100" data-bs-toggle="modal" data-bs-target="#modal8">TIGER RED</button>
               </td>
               <td >
               </td>
               <td className="border-right-0 p-2">
                  <button className="btn btn-dark w-100" data-bs-toggle="modal" data-bs-target="#modal9">TIGER BLACK</button>
               </td>

            </tr>
         </tbody>
      </table>
      <LuckyModal id="modal"  badge="DRAGON - L" title="DRAGON"/>
      <LuckyModal id="modal1" badge="TIGER - L" title="TIGER"/>
      <LuckyModal id="modal2" badge="DRAGON EVEN - L" title="DRAGON EVEN"/>
      <LuckyModal id="modal3" badge="DRAGON ODD - L" title="DRAGON ODD"/>
      <LuckyModal id="modal4" badge="DRAGON RED - L" title="DRAGON RED"/>
      <LuckyModal id="modal5" badge="TIGER ODD - L" title="TIGER ODD"/>
      <LuckyModal id="modal6" badge="TIGER EVEN - L" title="TIGER EVEN"/>
      <LuckyModal id="modal7" badge="TIGER ODD - L" title="TIGER ODD"/>
      <LuckyModal id="modal8" badge="TIGER RED- L" title="TIGER RED"/>
      <LuckyModal id="modal9" badge="TIGER BLACK - L" title="TIGER BLACK"/>
   </div>
</div>


 		);
 }

 export default Dragon;