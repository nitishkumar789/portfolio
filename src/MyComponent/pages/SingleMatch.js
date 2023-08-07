import React from 'react'


function SingleMatch(){

	return(

		<div>
			<div className="match-list my-1">
				<div className="list-up d-flex justify-content-between align-items-center">
					<div className="list-left">
						<img src="./images/play.svg"></img>
						<img src="./images/power.svg"></img>
						<span>Upcoming</span>

					</div>
					<div className="list-right">
						<div className="sportsname">
							<img src="./images/capital-e.svg"></img>
							<span>Cricket</span>
						</div>
						<div className="set-pin">
							<img src="./images/set-pin.svg"></img>

						</div>

					</div>

				</div>
				<div className="list-dwn d-flex justify-content-between">
					<div className="matchname">Delhi Capitals Women v Mumbai Indians Women</div>
					<div className="matchtime">Mar 9, 5:30 PM</div>
				</div>

			</div>

		</div>


		)
}

export default SingleMatch