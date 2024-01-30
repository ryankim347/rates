import React from "react";
import './App.css';
import {Row} from './components/Row'

function App() {
  const [data, setData] = React.useState(null);
  const requestOptions = {
    method: 'GET'
  }

  React.useEffect(() => {
    fetch("/get-restaurants", requestOptions)
      .then((res) => res.json())
      .then((d) => {console.log(d); setData(d)});
  }, []);

  return (
    <div className="d-flex mx-auto flex-col justify-center">
        <div className='w-100 bg-black text-white p-5'> rizzyrates </div>
         <div className="mx-auto d-flex p-10">
          <input className='shadow-lg rounded-md border-slate-500 border-2 p-2 w-1/3' placeholder='Search'></input>
          <div className="w-full bg-white rounded-md flex flex-row p-2 justify-evenly"> 
        <p className="flex-1 font-bold" >Rating</p>
        <p className="flex-1 font-bold" >Name</p>
        <p className="flex-1 font-bold">Location</p>
        <p className="flex-1 font-bold">Cuisine</p>
        <p className="flex-1 font-bold">Price</p>
        </div>
        <hr className="border-1 border-slate-300"></hr>
          <p>{!data ? "Loading..." : data.map((row) => <Row data={row}></Row>)}</p>
         </div>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload. I sadfsadfhave rizzasdf
    //     </p>
    //     <an
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
