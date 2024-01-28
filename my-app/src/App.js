import React from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="d-flex mx-auto flex-col justify-center">
        <div className='w-100 bg-black text-white p-5'> rizzyrates </div>
         <div className="mx-auto d-flex p-10">
          <input className='shadow-lg rounded-md border-black border-2 p-2 w-1/3' placeholder='Search'></input>
          <p>{!data ? "Loading..." : data}</p>
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
