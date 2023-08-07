import Virtual from './virtual';
import Cricket from './Cricket';
import Football from './Football';
import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
function Dashbaord(){
const token = localStorage.getItem('token');
const navigate = useNavigate();
   const [events, setEvents] = useState([]);
useEffect(() => {
   fetch('http://159.89.161.128:4444/matches', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const sortedData = data.data.sort((a, b) => {
        const eventTypeIdA = Number(a.event_type_id);
        const eventTypeIdB = Number(b.event_type_id);
        // Events with eventtypeid 4 should come first
        if (eventTypeIdA === 4) {
          return -1;
        } else if (eventTypeIdB === 4) {
          return 1;
        }
        // Events with eventtypeid 1 should come next
        if (eventTypeIdA === 1) {
          return -1;
        } else if (eventTypeIdB === 1) {
          return 1;
        }
        // Events with eventtypeid 44 should come last
        if (eventTypeIdA === 44) {
          return 1;
        } else if (eventTypeIdB === 44) {
          return -1;
        }
        // If eventtypeid is not 4, 1, or 44, then sort by start_time in ascending order
        return new Date(a.start_time) - new Date(b.start_time);
      });
      setEvents(sortedData);
    // setEvents(data.data);
  })
  .catch(error => console.error(error));
  },[token]);







useEffect(() => {
const token = localStorage.getItem('token');
if (!token) {
navigate('/');
}
}, [navigate]);

const renderComponent = () => {
  const filteredEvents = events.filter((event) => {
    const eventTypeId = Number(event.event_type_id);
    const inplayValue = Number(event.in_play);
    // Filter events where eventTypeId is either 1, 4, or 44 and inplayValue is 0
    return (eventTypeId === 1 || eventTypeId === 4 || eventTypeId === 44) && inplayValue === 1;
  });
  console.log(filteredEvents);
  return filteredEvents.map((event, index) => {
    const eventTypeId = Number(event.event_type_id);
    // const startTime = new Date(event.start_time);
    // const formattedStartTime = `${startTime.toLocaleString('en-US', { month: 'short' })} ${startTime.getDate()}, ${convertTo12Hour(startTime)}`;
    switch (eventTypeId) {
      case 4:
        return (
          <React.Fragment key={index}>
                <Cricket game={event.long_name} blinker="blinker rounded-circle bg-success" />
          </React.Fragment>
        );
      case 1:
        return (
          <React.Fragment key={index}>
                <Football game={event.long_name} blinker="blinker rounded-circle bg-success"/>
          </React.Fragment>
        );
      case 44:
        return (
           <React.Fragment key={index}>
                <Virtual game={event.long_name} blinker="blinker rounded-circle bg-success"/>
          </React.Fragment>
        );
      default:
        return null;
    }
  });
};
return (
<>  
<div className="mobile-tab">
   <ul>
      <li><img src="./images/cricket.svg" alt=""></img><span> Cricket </span></li>
      <li><img src="./images/football.svg" alt=""></img><span> Football </span></li>
      <li><img src="./images/tennis.svg" alt=""></img><span> Tennis </span></li>
      <li><img src="./images/teenpatti.svg" alt=""></img><span> Card Game </span></li>
   </ul>
</div>
<div id="carouselExampleAutoplaying" className="carousel slide">
   <div className="carousel-inner">
      <div className="carousel-item active">
         <img src="./images/inplay-slide-1.jpg" alt=""></img>
      </div>
      <div className="carousel-item">
         <img src="./images/inplay-slide-2.jpg" alt=""></img>
      </div>
      <div className="carousel-item">
         <img src="./images/inplay-slide-3.jpg" alt=""></img>
      </div>
   </div>
</div>

    <Link to="/livetv"  >
      {events?.length > 0 &&
            renderComponent()}
            </Link>

<div className="container text-center mb-5 pb-5">
   <div className="row g-0">
      <div className="col-4 px-1 mb-2">
         <div className="single-card">
            <Link to="/lucky7">
            <img src="./images/lucky7.jpg" className="img-fluid" alt=""></img></Link>
            <span>Lucky 7</span>
         </div>
      </div>
      <div className="col-4 px-1 mb-2">
         <div className="single-card">
            <Link to="/TeenPatti">
            <img src="./images/teenpatti.jpg" className="img-fluid" alt=""></img></Link>
            <span>Teen patti 7</span>
         </div>
      </div>
      <div className="col-4 px-1 mb-2">
         <div className="single-card">
            <Link to="/Teenpattioneday">
            <img src="./images/poker.jpg" className="img-fluid" alt=""></img></Link>
            <span>Teen patti one day</span>
         </div>
      </div>
      <div className="col-4 px-1 mb-2">
         <div className="single-card">
            <Link to="/Dragon">
            <img src="./images/dt.jpg" className="img-fluid" alt=""></img></Link>
            <span>Dragon Tiger</span>
         </div>
      </div>
      <div className="col-4 px-1 mb-2">
         <div className="single-card">
            <Link to="/AndarBahar">
            <img src="./images/andar-bahar.jpg" className="img-fluid" alt=""></img></Link>
            <span>Andar Bahar</span>
         </div>
      </div>
   </div>
</div>
</>
)
}
export default Dashbaord