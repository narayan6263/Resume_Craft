import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Show = () => {
  const [data, setData] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState('');

  useEffect(() => {
    fetch();
  }, []);

  const fetch = () => {
    axios.get("https://66a4a5b65dc27a3c19096e14.mockapi.io/std/data/resumebuilder")
      .then((res) => {
        setData(res.data);
      });
  };

  const handleTemplateChange = (id, template) => {
    if (template) {
      window.location.href = `/${template}/${id}`;
    }
  };

  return (
    <div style={{ margin: '50px 200px 50px 200px' }}>
      <h1>Get Your Resume Here :</h1>
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
                <tr style={{ textAlign: 'center' }} key={value.id}>
                  <td>{index + 1}</td>
                  <td>{value.name}</td>
                  <td>{value.email}</td>
                  <td>
                    <select
                      value={selectedTemplate}
                      onChange={(e) => handleTemplateChange(value.id, e.target.value)}
                      style={{ padding: '10px' }}
                    >
                      <option value="">Select Template</option>
                    </select>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default Show;
