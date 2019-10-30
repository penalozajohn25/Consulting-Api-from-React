/*
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
    constructor() {
        super();
        this.state = {
            persons: []
        }
    }

    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }

    render(){
        const getApi = this.state.persons.map((item, key)=>{
         return(

             <tr>
                 <th scope="row">{item.id}</th>
                 <td>{item.name}</td>
                 <td>{item.username}</td>
                 <td>@mdo</td>
             </tr>

         )
        })
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <p className="App-link">
                        Learn React
                    </p>
                </header>
                <div className="container-fluid">

                    <table className="table table-striped table-dark">
                        <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Username</th>
                            <th scope="col">Company</th>
                            <th scope="col">Website</th>
                        </tr>
                        </thead>
                        <tbody>
                          {getApi}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default App;
*/

import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
    const [count, setCount] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://jsonplaceholder.typicode.com/users',
            );
            setCount(result.data);
        };
        fetchData();
    }, []);
    console.log(count);

  const getApi =  count.map((item, i)=>{
        return (
            <tr>
                <th scope="row">{item.id}</th>
                <td>{item.username}</td>
                <td>{item.company.name}</td>
                <td>{item.website}</td>
            </tr>
        )
    });

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
       <div className="container-fluid">
           <table className="table table-striped table-dark">
               <thead>
               <tr>
                   <th scope="col">Id</th>
                   <th scope="col">Username</th>
                   <th scope="col">Company</th>
                   <th scope="col">Website</th>
               </tr>
               </thead>
               <tbody>
                 {getApi}
               </tbody>
           </table>
       </div>
    </div>
  );
}

export default App;
