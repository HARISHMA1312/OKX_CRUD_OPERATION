import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

export default function Read() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get('https://666fc1d20900b5f87248205c.mockapi.io/Login')
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])
    const setData = (data) => {
        let { id, email, password } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Email', email);
        localStorage.setItem('Password', password);

    }
    const onDelete = (id) => {
        axios.delete(`https://666fc1d20900b5f87248205c.mockapi.io/Login/${id}`)
     .then(() => {
        getData();
    })
}
      const getData = () => {
        axios.get(`https://666fc1d20900b5f87248205c.mockapi.io/Login`)
            .then((getData) => {
                 setAPIData(getData.data);
             })
    }

    return (
        <div className="container mt-4">
          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>Email</th>
                <th>Password</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {APIData.map((data) => (
                <tr key={data.id}>
                  <td>{data.email}</td>
                  <td>{data.password}</td>
                  <td>
                    <Link to="/Update">
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => setData(data)}
                      >
                        Update
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => onDelete(data.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}