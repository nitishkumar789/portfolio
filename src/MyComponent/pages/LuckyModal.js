// import { useState } from 'react';
function LuckyModal(props){

return(
<>
<div className="modal fade" id={props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
   <div className="modal-dialog">
      <div className="modal-content" style={{backgroundColor:'#5fafee'}}>
         <div className="modal-header ">
            <div className="row">
               <div className="col-12 d-flex justify-content-between">
                  <h6 className="modal-title" id={props.id} style={{fontSize:'16px'}}>{props.title} || </h6>
                  <span className="badge  badge-secondary ms-2">
                     <p className="mb-0 mt-1 "style={{fontSize:'18px'}}>{props.badge}</p>
                     {/*<span className="mb-0">{props.badge}</span>*/}
                  </span>
               </div>
            </div>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>
         <div className="modal-body  mb-0 p-2">
            <form>
             <button className="btn btn-success m-1"  >100</button>
                      <button className="btn btn-dark m-1" 
                  >100</button>
               <div className="form-group mx-auto ">
                  <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Amount"/>
               </div>
            </form>
            <div className="text-center p-2">
               <div className="row">
                  <div className="col ">
                     <button className="btn btn-dark m-1" onClick={() => {
                     const inputField = document.getElementById("exampleInputEmail1");
                     inputField.value = Number(inputField.value) + 100;
                     document.getElementById("")
                     }}>100</button>
                     <button className="btn btn-dark m-1" onClick={() => {
                     const inputField = document.getElementById("exampleInputEmail1");
                     inputField.value = Number(inputField.value) + 200;
                     }}>200</button>
                     <button className="btn btn-dark m-1" onClick={() => {
                     const inputField = document.getElementById("exampleInputEmail1");
                     inputField.value = Number(inputField.value) + 500;
                     }}>500</button>
                     <button className="btn btn-dark m-1" onClick={() => {
                     const inputField = document.getElementById("exampleInputEmail1");
                     inputField.value = Number(inputField.value) + 1000;
                     }}>1k</button>
                     <button className="btn btn-dark m-1" onClick={() => {
                     const inputField = document.getElementById("exampleInputEmail1");
                     inputField.value = Number(inputField.value) + 2000;
                     }}>2k</button>
                  </div>
               </div>
               <div className="row">
                  <div className="col">
                     <button className="btn btn-dark m-1" onClick={() => {
                     const inputField = document.getElementById("exampleInputEmail1");
                     inputField.value = Number(inputField.value) + 3000;
                     }}>3k</button>
                     <button className="btn btn-dark m-1" onClick={() => {
                     const inputField = document.getElementById("exampleInputEmail1");
                     inputField.value = Number(inputField.value) + 5000;
                     }}>5k</button>
                     <button className="btn btn-dark m-1" onClick={() => {
                     const inputField = document.getElementById("exampleInputEmail1");
                     inputField.value = Number(inputField.value) + 10000;
                     }}>10k</button>
                     <button className="btn btn-dark m-1" onClick={() => {
                     const inputField = document.getElementById("exampleInputEmail1");
                     inputField.value = Number(inputField.value) + 200;
                     }}>200</button>
                      
                  </div>
               </div>
            </div>
            <div className="bg-danger text-white rounded text-center mt-1 mb-0 p-2">
               <p className="mb-0">market suspended ! try after sometime !</p>
            </div>
         </div>
         <div className="modal-footer">
            <button type="button" className="btn btn-warning mr-auto">Cancel <i className="fa fa-times" > </i></button >
            <button type="button" className="btn btn-success">Submit <i className="fa fa-check"></i></button>
         </div>
      </div>
   </div>
</div>
</>
);
}
export default LuckyModal;