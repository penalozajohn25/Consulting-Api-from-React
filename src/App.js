/* usando funciones */
import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Table from './views/Table';
import Pagination from './views/Pagination';

function App() {
    const [count, setCount] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);

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

    const indexOfLastPost  = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts     = count.slice(indexOfFirstPost, indexOfLastPost);
    const paginate         = pageNumber => setCurrentPage(pageNumber);

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
      <Table data={currentPosts}/>
        <div className="container-fluid">
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={count.length}
                paginate={paginate}
            />
        </div>
    </div>
  );
}

export default App;

/* usando clases */

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