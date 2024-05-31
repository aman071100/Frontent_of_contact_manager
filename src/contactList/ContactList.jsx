import React, { useEffect, useState } from 'react'
import "./ContactList.css"
import DataTable from "react-data-table-component"
import makeHttpRequest from '../httpServices'
import { useNavigate } from 'react-router-dom'

function ContactList() {

  const navigate = useNavigate()
  const [data, setData] = useState([])
  const [name, setName] = useState('')

  const columns = [{
    name: "Profile Image",
    selector: (row) => <img src={row?.image} alt='' className='image' />
  },
  {
    name: "Name",
    selector: (row) => row?.name
  },
  {
    name: "Email",
    selector: (row) => row?.email
  },
  {
    name: 'Created At',
    selector: (row) => new Date(row?.createdAt).toLocaleString()
  },
  {
    name: "Action",
    cell: (row) => {
      return (<div className='button'>
        <button onClick={() => {
          navigate(`/data-section?method=view&id=${row?._id}`);
        }}>View</button>
        <button onClick={() => {
          navigate(`/data-section?method=edit&id=${row?._id}`);
        }}>Edit</button>
        <button onClick={() => {
          deleteHandler(row?._id)
        }}>Delete</button>
      </div>)
    }
  }
  ]

  const deleteHandler = async (id) => {
    try {
      const resp = await makeHttpRequest('delete', `deletedContact/${id}`);
      getData();
    } catch (error) {

    }
  }

  const getData = async () => {
    try {
      const params = {
        name: name
      }
      const resp = await makeHttpRequest('get', "getAll", null, params);
      console.log(resp)
      setData(resp?.data)
    } catch (error) {

    }
  }

  useEffect(() => {

    const clearTimeId = setTimeout(() => {
      getData();
    }, 1000);

    return () => {
      clearTimeout(clearTimeId)
    }
  }, [name])

  return (
    <div className='container'>
      {/* <h1>Contact List</h1> */}
      <div className='header1'>
        <div className="text1">Contact List</div>
        <div className="underline1" id='1'></div>
      </div>
      <DataTable
        columns={columns}
        data={data}
        pagination
        fixedHeader
        fixedHeaderScrollHeight='400px'
        highlightOnHover
        subHeader
       
        subHeaderComponent={
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <input
              type='text'
              onChange={(e) => setName(e.target.value)}
              placeholder='Search here'
              style={{ fontSize: '16px', padding: '8px', borderRadius: "8px", boxShadow: '0 2px 4px rgb(0, 9, 12)' }}
            />
            <button
              type="button"
              onClick={() => {
                navigate(`/data-section?method=add`);
              }}
              style={{
                marginLeft: '8px', // Adjust margin as needed
                width: '93px',
                height: '39px',
                color: 'white',
                background: '#4c00b4',
                borderRadius: '9px',
                fontSize: '12px',
                fontWeight: 200,
                cursor: 'pointer',
              }}
            >Add Contact</button>
            <button
              type="button"
              onClick={() => {
                localStorage.removeItem("token")
                navigate(`/`);
              }}
              style={{
                marginLeft: '885px', // Adjust margin as needed
                width: '93px',
                height: '39px',
                color: 'white',
                background: '#4c00b4',
                borderRadius: '9px',
                fontSize: '12px',
                fontWeight: 200,
                cursor: 'pointer',
              }}
            >Log Out</button>
          </div>}


        subHeaderAlign='left'
        customStyles={{
          headCells: {
            style: {
              fontSize: '16px', // Adjust the font size as needed
            },
          },
        }}
      />
    </div>
  )
}

export default ContactList;