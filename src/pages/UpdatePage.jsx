import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';


const UpdatePage = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch()
  }, [])

  const fetch = () => {
    axios.get("https://66a4a5b65dc27a3c19096e14.mockapi.io/std/data/resumebuilder")
      .then((res) => {
        setData(res.data)
      })
  }

  return (
    <div style={{ margin: '50px 200px 50px 200px' }}>
      <h1>Update Your Resume Here :</h1>
      <table className="table" style={{ border: '2px solid black', padding: '30px', marginTop: '30px', boxShadow: '0px 0px 50px 0px black' }}>
        <thead className="thead-dark">
          <tr style={{ textAlign: 'center' }}>
            <th scope="col">S.no</th>
            <th scope="col">Maker Name</th>
            <th scope="col">Email Id</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>

          {
            data.map((value, index) => {
              return (
                <tr style={{ textAlign: 'center', }} key={value.id}>
                  <td>{index + 1}</td>
                  <td>{value.name}</td>
                  <td>{value.email}</td>
                  <td>
                    <Link to={`/update/${value.id}`}>
                      <Button variant="outline-danger" type="submit" style={{ padding: '10px 20px', margin: '0px 10px 0px 10px' }}>
                        Update Resume
                      </Button>
                    </Link>
                  </td>
                </tr>
              )
            })
          }

        </tbody>
      </table>
    </div>
  )
}

export default UpdatePage