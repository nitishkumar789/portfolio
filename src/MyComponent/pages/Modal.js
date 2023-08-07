import React from 'react';

 function Modal(){

 	return(
 			<div className="text-center inline p-2">
    <div className="row">
      <div className="col ">
        <button className="btn btn-dark m-1">100</button>
        <button className="btn btn-dark m-1">200</button>
        <button className="btn btn-dark m-1">500</button>
        <button className="btn btn-dark m-1">1K</button>
        <button className="btn btn-dark m-1">2K</button>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <button className="btn btn-dark m-1">3K</button>
        <button className="btn btn-dark m-1">5K</button>
        <button className="btn btn-dark m-1">10K</button>
        <button className="btn btn-dark m-1">c</button>
        {/*<button className="btn btn-dark m-1">25K</button>*/}
      </div>
    </div>

  </div>


 		);
 }

 export default Modal