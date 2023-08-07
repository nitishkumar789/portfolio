import React from 'react';

 function Football(props){

 	return(
 		
           <div>
            <div className="match-list my-1">
                <div className="list-up d-flex justify-content-between align-items-center">
                    <div className="list-left">
                        <img src="./images/play.svg"alt=""></img>
                        <img src="./images/power.svg"alt=""></img>
                        <label className="mb-0"><div className={props.blinker}></div></label>
                        <span className="text-dark">ln-Play</span>

                    </div>
                    <div className="list-right">
                        <div className="sportsname">
                            <img src="./images/capital-e.svg"alt=""></img>
                            <span className="text-dark">Football</span>
                        </div>
                        <div className="set-pin">
                            <img src="./images/set-pin.svg"alt=""></img>

                        </div>

                    </div>

                </div>
                <div className="list-dwn d-flex justify-content-between">
                    <div className="matchname">{props.game}</div>
                    <div className="matchtime">{props.date}</div>
                </div>
                

            </div>

        </div>
       


 		);
 }

 export default Football;