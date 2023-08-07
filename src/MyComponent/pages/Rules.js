import React from 'react';


function Rules(){


	return(
		<div>

			{/*<h1> This is Rules page</h1>*/}

			{/*div className="container w-100 mt-2 mb-5">	*/}
	<div className="row">
		<div className="col small">
			<ol style={{listStyleType: 'decimal', marginLeft:'undefined'}}>
			  <li>1. All fancy bets will be validated when match has been tied.</li>
			  <li>2. All advance fancy will be suspended before toss or weather condition.</li>
			  <li>3. In case technical error or any circumstances any fancy is suspended and does not resume result will be given all previous bets will be valid (based on haar/jeet).</li>
			  <li>4. If any case wrong rate has been given in fancy that particular bets will be cancelled.</li>
			  <li>5. In any circumstances management decision will be final related to all exchange items.</li>
			  <li>6. In case customer make bets in wrong fancy we are not liable to delete, no changes will be made and bets will be consider as confirm bet.</li>
			  <li>7. Due to any technical error market is open and result has came all bets after result will be deleted.</li>
			  <li>8. Manual bets are not accepted in our exchange</li>
			  <li>9. Our exchange may provide 5 second delay in our live tv.</li>
			  <li>10. Once our exchange give username and password it is your responsibility to change a password.</li>
			  <li>11. Penalty runs will not be counted in any fancy.</li>
			  <li>12. Warning:- live scores and other data on this site is sourced from third party feeds and may be subject to time delays and/or be inaccurate. If you rely on this data to place bets, you do so at your own risk. Our exchange does not accept responsibility for loss suffered as a result of reliance on this data.</li>
			  <li>13. Our exchange is not responsible for misuse of client id.</li>
			</ol>
		</div>
	</div>
	<div className="row">
		<div className="col">
			<h5>TEST's RULE</h5>
			<ol className="decimal_type" style={{listStyleType: 'decimal',marginLeft:'8px'}}>
			  <li>1Session :
			    <ol className="decimal_type" style={{listStyleType: 'decimal'}}>
			      <li>1.Complete session valid in test.</li>
			      <li>2.Session is not completed for ex:- India 60 over run session Ind is running in case India team declares or all-out at 55 over next 5 over session will be continue in England inning.</li>
			      <li>3.1st day 1st session run minimum 25 over will be played then result is given otherwise 1st day 1st session will be deleted.</li>
			      <li>4.1st day 2nd session run minimum 25 over will be played then result is given otherwise 1st day 2nd session will be deleted.</li>
			      <li>5.1st day total run minimum 80 over will be played then result is given otherwise 1st day total run will be deleted.</li>
			      <li>6.Test match both advance session is valid.</li>
			    </ol>
			  </li>
			  <li>2.Test lambi :
			    <ol className="decimal_type" style={{listStyleType: 'undefined'}}>
			      <li>1.Mandatory 70 over played in test lambi paari. If any team all-out or declaration lambi paari is valid.</li>
			      <li>2.In case due to weather situation match has been stopped all lambi trades will be deleted.</li>
			      <li>3.In test both lambi paari is valid in advance fancy.</li>
			    </ol>
			  </li>
			  <li>3.Test batsman :
			    <ol className="decimal_type" style={{listStyleType: 'undefined'}}>
			      <li>1.In case batsmen is injured he/she is made 34 runs the result will be given 34 runs.</li>
			      <li>2.Batsman 50/100 run if batsman is injured or declaration the result will be given on particular run.</li>
			      <li>3.In next men out fancy if player is injured particular fancy will be deleted.</li>
			      <li>4.In advance fancy opening batsmen is only valid if same batsmen came in opening the fancy will be valid in case one batsmen is changed that particular player fancy will be deleted.</li>
			      <li>5.Test match both advance fancy batsmen run is valid.</li>
			    </ol>
			  </li>
			  <li>4.Test partnership :
			    <ol className="decimal_type" style={{listStyleType: 'undefined'}}>
			      <li>1.In partnership one batsman is injured partnership is continued in next batsman.</li>
			      <li>2.Partnership and player runs due to weather condition or match abandoned the result will be given as per score.</li>
			      <li>3.Advance partnership is valid in case both players are different or same.</li>
			      <li>4.Test match both advance fancy partnership is valid.</li>
			    </ol>
			  </li>
			  <li>5.Other fancy advance (test) :
			    <ol className="decimal_type" style={{listStyleType: 'undefined'}}>
			      <li>1.Four, sixes, wide, wicket, extra run, total run, highest over and top batsmen is valid only if 2 innings will be played otherwise all other fancy will be deleted.</li>
			    </ol>
			  </li>
			</ol>
		</div>
	</div>
	<div className="row">
		<div className="col">
			<h5>ODI's RULE</h5>
			<ol className="decimal_type" style={{listStyleType: 'decimal', marginLeft:'8px'}}>
			  <li>1.Session:-
			    <ol className="decimal_type" style={{listStyleType: 'decimal'}}>
			      <li>1.Match 1st over run advance fancy only 1st innings run will be counted.</li>
			      <li>2.Complete session is valid in case due to rain or match abandoned particular session will be deleted.</li>
			      <li>3.For example:- 35 over run team a is playing any case team A is all-out in 33 over team a has made 150 run the session result is validated on particular run.</li>
			      <li>4.Advance session is valid in only 1st innings.</li>
			    </ol>
			  </li>
			  <li>2.50 over runs:-
			    <ol className="decimal_type" style={{listStyleType: 'undefined'}}>
			      <li>1.In case 50 over is not completed all bet will be deleted due to weather or any condition.</li>
			      <li>2.Advance 50 over runs is valid in only 1st innings.</li>
			    </ol>
			  </li>
			  <li>3.Odi batsman runs:-
			    <ol className="decimal_type" style={{listStyleType: 'undefined'}}>
			      <li>1.In case batsman is injured he/she is made 34 runs the result will be given 34 runs.</li>
			      <li>2.In next men out fancy if player is injured particular fancy will be deleted.</li>
			      <li>3.In advance fancy opening batsmen is only valid if same batsmen came in opening the fancy will be valid in case one batsmen is changed that particular player fancy will be deleted.</li>
			    </ol>
			  </li>
			  <li>4.Odi partnership runs:-
			    <ol className="decimal_type" style={{listStyleType: 'undefined'}}>
			      <li>1.In partnership one batsman is injured partnership is continued in next batsman.</li>
			      <li>2.Advance partnership is valid in case both players are different or same.</li>
			      <li>3.Both team advance partnerships are valid in particular match.</li>
			    </ol>
			  </li>
			  <li>5.Other fancy:-
			    <ol>
			      <li><span style={{fontSize:'16px',fontFamily:'Cambria'}}>Four, sixes, wide, wicket, extra run, total run, highest over ,top batsman,maiden over,caught-out,no-ball,run-out,fifty and century are valid only match has been completed in case due to rain over has been reduced all other fancy will be deleted.</span></li>
			    </ol>
			  </li>
			</ol>
		</div>
	</div>
	<div className="row">
		<div className="col">
			<h5>T20's RULE</h5>
			<ol className="decimal_type" style={{listStyleType: 'decimal', marginLeft:'8px'}}>
			  <li>1.Session:-
			    <ol className="decimal_type" style={{listStyleType: 'decimal'}}>
			      <li>1.Match 1st over run advance fancy only 1st innings run will be counted.</li>
			      <li>2.Complete session is valid in case due to rain or match abandoned particular session will be deleted.</li>
			      <li>3.For example :- 15 over run team a is playing any case team a is all-out in 13 over team A has made 100 run the session result is validated on particular run.</li>
			      <li>4.Advance session is valid in only 1st innings.</li>
			    </ol>
			  </li>
			  <li>2.20 over runs:-
			    <ol className="decimal_type" style={{listStyleType: 'undefined'}}>
			      <li>1.In case 20 over is not completed all bet will be deleted due to weather or any condition.</li>
			      <li>2.Advance 20 over run is valid only in 1st innings.</li>
			    </ol>
			  </li>
			  <li>3.T20 batsman runs:-
			    <ol className="decimal_type" style={{listStyleType: 'undefined'}}>
			      <li>1.In case batsman is injured he/she is made 34 runs the result will be given 34 runs.</li>
			      <li>2.In next men out fancy if player is injured particular fancy will be deleted.</li>
			      <li>3.In advance fancy opening batsmen is only valid if same batsmen came in opening the fancy will be valid in case one batsmen is changed that particular player fancy will be deleted.</li>
			    </ol>
			  </li>
			  <li>4.T20 partnership runs:-
			    <ol className="decimal_type" style={{listStyleType: 'undefined'}}>
			      <li>1.In partnership one batsman is injured partnership is continued in next batsman.</li>
			      <li>2.Advance partnership is valid in case both players are different or same.</li>
			      <li>3.Both team advance partnerships are valid in particular match.</li>
			    </ol>
			  </li>
			  <li>5.Other fancy:-
			    <ol className="decimal_type" style={{listStyleType: 'undefined'}}>
			      <li>1.T-20 ,one day and test match in case current innings player and partnership are running in between match has been called off or abandoned that situation all current player and partnership results are valid.</li>
			      <li>2.Four, sixes, wide, wicket, extra run, total run, highest over and top batsman,maiden over,caught-out,no-ball,run-out,fifty and century are valid only match has been completed in case due to rain over has been reduced all other fancy will be deleted. 1st 6 over dot ball and 20 over dot ball fancy only valid is 1st innings.
			        <ol className="decimal_type" style={{listStyleType: 'undefined'}}>
			          <li>3.For example: Multiplication of 1st over run scenario is England 1st over run 5 and India 1st over run 0 the result will be announced as 0 run.This rules are applying in all multiplication related fancies</li>
			        </ol>
			      </li>
			    </ol>
			  </li>
			  <li>6.1st wicket lost to any team balls meaning that any team 1st wicket fall down in how many balls that particular fancy at least minimum one ball have to be played otherwise bets will be deleted.</li>
			  <li>7.1st wicket lost to any team fancy valid both innings.</li>
			  <li>8.How many balls for 50 runs any team meaning that any team achieved 50 runs in how many balls that particular fancy at least one ball have to be played otherwise that fancy bets will be deleted.</li>
			  <li>9.How many balls for 50 runs fancy any team only first inning valid.</li>
			  <li>10.For example:-Any team score is 49 run in 5.5 overs if next ball is wide or no-ball 50 runs completed the result will be announced in 35 balls.</li>
			  <li>11.1st 6 inning boundaries runs any team fancy will be counting only according to run scored fours and sixes at least 6 over must be played otherwise that fancy will be deleted.</li>
			  <li>12.1st inning 6 over boundaries runs any team run like wide ,no-ball ,leg-byes ,byes and over throw runs are not counted this fancy.</li>
			  <li>13.How many balls face any batsman meaning that any batsman how many balls he/she played that particular fancy at least one ball have to be played otherwise that fancy bets will be deleted.</li>
			  <li>14.How many balls face by any batsman both innings valid.</li>
			  <li>15.Concussion in Test:-</li>
			  <li>16.All bets of one over session will be deleted in test scenario, in case session is incomplete. For example innings declared or match suspended to bad light or any other conditions.</li>
			</ol>
			<ol style={{listStyleType: 'decimal', marginLeft:'none'}}>
			  <li>1.All bets will be considered as valid if a player has been replaced under concussion substitute, result will be given for the runs scored by the mentioned player. For example DM Bravo gets retired hurt at 23 runs, then result will be given for 23.</li>
			  <li>2.Bets of both the player will be valid under concussion substitute.</li>
			</ol>
		</div>
	</div>
</div>


		

		






		);
}

export default Rules