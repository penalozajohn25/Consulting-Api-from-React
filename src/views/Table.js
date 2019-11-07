import React from 'react';

function Table(props) {

    const getApi =  props.data.map((item, i)=>{
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
    );
}
export default Table;