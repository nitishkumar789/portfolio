import React from 'react';
// import { useNavigate} from 'react-router-dom';
// import {useEffect} from 'react';
// import io from "socket.io-client";
// import io from "  newSocket";
// import MyComponent from Component;

 function Livetv (){
 // const Mynav = useNavigate();
  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     Mynav('/');
  //   }
  // }, [Mynav]);




// class MyComponent extends React.Component {
//   componentDidMount() {
//     const socket = io("https://server.matka00.com");
    
//     // Now you can use the socket object to send and receive messages
//     socket.on("connect", () => {
//       console.log("Connected to server");
//     });

//     socket.on("disconnect", () => {
//       console.log("Disconnected from server");
//     });

//     socket.on("message", (data) => {
//       console.log("Received message:", data);
//     });

//     socket.emit("message", "Hello server");
//   }
  
//   // ...
// }
const urlParams = new URLSearchParams(window.location.search);
  const event_id = urlParams.get('event_id');

  const socket = window.io('https://cards.royal777.io', {transports : ['websocket']});
  socket.emit('event', event_id);

  const event_id_match_odds = `match_odds_${event_id}`;
socket.on(event_id_match_odds, (data) => {
  console.log("Match Odds", JSON.parse(data));
});
const event_id_match_result = `match_results_${event_id}`;
socket.on(event_id_match_result, (data) =>{
console.log("Match Result", JSON.parse(data));
});




 	return(



        <>
            <div className=" container-fluid mb-5 pb-5" >
                <div className="row">
                    <div className="col-3 ml-auto">
                        <span className="badge badge-danger">x Live Tv</span>
                    </div>
                </div>
                <div className="embed-responsive embed-responsive-16by9 w-100">
                    <iframe className="embed-responsive-item w-100" title="Video" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen></iframe>
                </div>
                <table className="table table-bordered table-sm mb-2 text-center" style={{fontSize:'14px'}}>
                  <thead>
                    <tr>
                      <th >100-10,000 </th>
                      <th className="table-primary">LAGAI</th>
                      <th className="table-danger">KHAI</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="p-3 table-warning" >Jersey</th>
                      <td className="p-3 table-primary"><span className=" border-dark p-1 suspended">SUSPENDED</span></td>
                      <td className="p-3 table-danger"><span className=" border-dark p-1 suspended">SUSPENDED</span></td>
                    </tr>
                    <tr>
                      <th className="p-3 col-10" >UAE</th>
                      <td className="p-3 table-primary"><span className=" border-dark p-1 suspended">SUSPENDED</span></td>
                      <td className="p-3 table-danger"><span className=" border-dark p-1 suspended">SUSPENDED</span></td>
                    </tr>
                  
                  </tbody>
                </table>
                <table className="table table-bordered table-sm mb-2">
                  <thead>
                    <tr>
                      <th style={{backgroundColor:'#202830'}} className="text-white">SESSION</th>
                      <th style={{backgroundColor:'#202830'}} className="text-white text-center">NOT</th>
                      <th style={{backgroundColor:'#202830'}} className="text-white text-center">YES</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="position-relative ">
                      <th className="table-secondary "><span className="text-danger" style={{fontSize:'12px'}}></span><span className="text-danger" style={{fontSize:'12px'}}></span> <span className="position-absolute" style={{fontSize:'8px', left:'5px', bottom:'21px'}}>5 OVER RUN NZV</span></th>
                      <td className="p-3 text-center table-danger"><label className="position-absolute" style={{fontSize:'10px', bottom:'25px'}}></label><span className=" border-dark p-1 suspended">100</span></td>
                      <td className="p-3 text-center table-primary"><label className="position-absolute" style={{fontSize:'10px', bottom:'25px'}}></label><span className=" border-dark p-1 suspended">100</span></td>
                    </tr>
                    <tr className="position-relative">
                      <th className="table-white "><span className="text-danger" style={{fontSize:'12px'}}></span><span className="text-danger" style={{fontSize:'12px'}}></span> <span className="position-absolute" style={{fontSize:'8px', left:'5px', bottom:'21px'}}>4 OVER RUN NZV</span></th>                  
                      <td className="p-3 text-center table-danger"><span className=" border-dark p-1 suspended">SUSPENDED</span></td>
                      <td className="p-3 text-center table-primary"><span className=" border-dark p-1 suspended">100</span></td>
                    </tr>
                  </tbody>
                </table>

                <table className="table table-bordered table-sm mb-2">
                  <thead>
                    <tr>
                      <th style={{backgroundColor:'#202830'}} className="text-white">EXTRA SESSION </th>
                      <th style={{backgroundColor:'#202830'}} className="text-white text-center">NOT</th>
                      <th style={{backgroundColor:'#202830'}} className="text-white text-center">YES</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="position-relative">
                      <th className="table-secondary"><span className="text-danger" style={{fontSize:'15px'}}></span><span className="text-danger" style={{fontSize:'12px'}}> </span> <span className="position-absolute" style={{fontSize:'8px', left:'5px', bottom:'21px'}}>Fall of 2nd wkt NEP</span></th>
                      <td className="p-3 text-center table-danger"><label  style={{ bottom:'25px'}}>82</label><span className=" border-dark p-1 suspended">100</span></td>
                      <td className="p-3 text-center table-primary"><label  style={{fontSize:'15px', bottom:'25px'}}>83</label><span className=" border-dark p-1 suspended">100</span></td>
                    </tr>
                  </tbody>
                </table>
               
                <table className="table table-bordered table-sm  ">
                  <thead>
                    <tr>
                      <th style={{backgroundColor:'#202830'}} className="text-white">EXTRA SESSION 2</th>
                      <th style={{backgroundColor:'#202830'}} className="text-white text-center">NOT</th>
                      <th style={{backgroundColor:'#202830'}} className="text-white text-center">YES</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="position-relative">
                      <th className="table-secondary"><span className="text-danger" style={{fontSize:'12px'}}></span><span className="text-danger" style={{fontSize:'12px'}}></span> <span className="position-absolute" style={{fontSize:'8px', left:'5px', bottom:'21px'}}>K Bhurtel run</span></th>
                      <td className="p-3 text-center table-danger"><label  style={{fontSize:'15px', bottom:'25px'}}>35</label><span className=" border-dark p-1 suspended">100</span></td>
                      <td className="p-3 text-center table-primary"><label  style={{fontSize:'15px', bottom:'25px'}}>67</label><span className=" border-dark p-1 suspended">100</span></td>
                    </tr>
                    <tr className="position-relative">
                      <th className="table-white"><span className="text-danger" style={{fontSize:'12px'}}></span><span className="text-danger" style={{fontSize:'12px'}}></span> <span className="position-absolute" style={{fontSize:'8px', left:'5px', bottom:'21px'}}>K Malla run</span></th>                  
                      <td className="p-3 text-center table-danger"><span className=" p-1 suspended">SUSPENDED</span></td>
                      <td className="p-3 text-center table-primary"><span className=" p-1 suspended">100</span></td>
                    </tr>
                  </tbody>
                </table>
            </div>
        </>
        );
}

 		
 

 export default Livetv;






 