import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


function App() {
    const [count, setCount] = useState({persons: []});

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://devcs.zippyttech.com/cs/clients/?account=5',
            );
            setCount(result.data.list);
        };
        fetchData();
    }, []);
    console.log(count);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-link">
            {(count[0]) ? count[0].name : 'Learn React'}
        </p>
      </header>
       <div>
           <table className="table table-striped table-dark">
               <thead>
               <tr>
                   <th scope="col">#</th>
                   <th scope="col">First</th>
                   <th scope="col">Last</th>
                   <th scope="col">Handle</th>
               </tr>
               </thead>
               <tbody>
               <tr>
                   <th scope="row">1</th>
                   <td>Mark</td>
                   <td>Otto</td>
                   <td>@mdo</td>
               </tr>
               <tr>
                   <th scope="row">2</th>
                   <td>Jacob</td>
                   <td>Thornton</td>
                   <td>@fat</td>
               </tr>
               <tr>
                   <th scope="row">3</th>
                   <td>Larry</td>
                   <td>the Bird</td>
                   <td>@twitter</td>
               </tr>
               </tbody>
           </table>
       </div>
    </div>
  );
}

export default App;
