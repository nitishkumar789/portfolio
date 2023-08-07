import {useNavigate} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Virtual from './virtual';
import Cricket from './Cricket';
import Football from './Football';
//  import {Link} from 'react-router-dom';
// import SingleMatch from './SingleMatch';
// import {Link} from 'react-router-dom';

 function Upcoming(){

  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  useEffect(() => {
  const token = localStorage.getItem('token');
  if (!token) {
    navigate('/');
  } else {
    navigate('/upcoming');
  }
}, [navigate]);
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
  // .catch(error => console.error(error));
  },[token]);
  // Function to render the appropriate component based on eventtypeid
  const renderComponent = () => {
  const filteredEvents = events.filter((event) => {
    const eventTypeId = Number(event.event_type_id);
    const inplayValue = Number(event.in_play);
    // Filter events where eventTypeId is either 1, 4, or 44 and inplayValue is 0
    return (eventTypeId === 1 || eventTypeId === 4 || eventTypeId === 44) && inplayValue === 0;
  });
  console.log(filteredEvents);
  return filteredEvents.map((event, index) => {
    const eventTypeId = Number(event.event_type_id);
    const startTime = new Date(event.start_time);
    const formattedStartTime = `${startTime.toLocaleString('en-US', { month: 'short' })} ${startTime.getDate()}, ${convertTo12Hour(startTime)}`;
    switch (eventTypeId) {
      case 4:
        return (
          <React.Fragment key={index}>
                <Cricket game={event.long_name} date={formattedStartTime} />
          </React.Fragment>
        );
      case 1:
        return (
          <React.Fragment key={index}>
                <Football game={event.long_name} date={formattedStartTime} />
          </React.Fragment>
        );
      case 44:
        return (
          <React.Fragment key={index}>
                <Virtual game={event.long_name} date={formattedStartTime} />
          </React.Fragment>
        );
      default:
        return null;
    }
  });
};
const convertTo12Hour = (date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const amPm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${formattedHours}:${formattedMinutes} ${amPm}`;
};

 	return(
 			<div className="match_list py-2 mb-5 pb-5">
  <div className="container">
      <div className="row">
      <div>
          {events?.length > 0 &&
            renderComponent()}
        </div>
         {/*<Link to="/livetv" className="text-decoration-none"> <div className="col-12 col-md-6"><SingleMatch></SingleMatch></div></Link>*/}
        {/*<div className="col-12 col-md-6"><SingleMatch></SingleMatch></div>*/}
      </div>
  </div>

</div>


 		);
 }

 export default Upcoming