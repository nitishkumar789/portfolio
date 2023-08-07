import React, {useState} from 'react';
function ProfitLoss(props){
  const [showResult,setShowResult]= useState(false);


// function ProfitLoss(){


	return(
<section className="mt-3 container-fluid">
    {!showResult && <div onClick={()=>setShowResult(true)} className="card rounded-lg border">
        <h5 className="card-title text-white text-center">{props.game}<i className="fa fa-arrow-right position-absolute" style={{right:"0.5rem"}} aria-hidden="true"></i></h5>
          <div className="row">
            <div className="col-6 text-left pl-4">
              <p style={{fontSize:'12px'}} className="mb-0"><b>Start On</b></p>
              <p style={{fontSize:'12px'}}>TOTAL</p>
            </div>
            <div className="col-6 text-right pr-4">
              <p style={{fontSize:'12px'}} className="mb-0"><b>Apr 12, 7:30 PM</b></p>
              <p className="text-danger" style={{fontSize:'12px'}}>-105</p>
            </div>
        </div>
        <span className=" text-left ml-2 card-date"><b>{props.date}</b></span>
      </div>
    }
    
    {showResult &&  <div onClick={()=>setShowResult(false)} className="card rounded-lg border">
            <h5 className="card-title text-white text-center">{props.game}<i className="fa fa-arrow-left position-absolute" style={{left:"0.5rem"}} aria-hidden="true"></i></h5>
          <div className="row">
            <div className="col-6 text-left pl-4">
              <p style={{fontSize:'12px'}} className="mb-0"><b>Match Status</b></p>
              <p style={{fontSize:'12px'}} className="mb-0"><b>Declare on</b></p>
              <p style={{fontSize:'12px'}} className="mb-0">Match</p>
            </div>
            <div className="col-6 text-right   pr-4">
              <p style={{fontSize:'12px'}} className="mb-0"><i className="fa fa-trophy pr-1 text-primary" aria-hidden="true"></i><b>CHSU</b></p>
              <p className="mb-0" style={{fontSize:'12px'}}><b>Apr 12, 7:30 PM</b></p>
              <p className="text-danger mb-0" style={{fontSize:'12px'}}>-105</p>
            </div>
        </div>
        <span className=" text-left ml-2 card-date"><b>{props.date}</b></span>
        <div className="card border-1 rounded-0" style={{backgroundColor:'#F7F7F7'}}>
          <div className="row">
            <div className="col-6 text-left pl-4">
              <p style={{fontSize:'12px'}} className="mb-0">Total</p>
            </div>
            <div className="col-6 text-right pr-4">
              <p className="text-danger mb-0" style={{fontSize:'12px'}}>-105</p>
            </div>
          </div>
        </div>
      </div>
    }
    </section>
		);
}

export default ProfitLoss