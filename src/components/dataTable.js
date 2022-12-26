import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { Row, Col } from 'react-bootstrap';
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import './styles.css'
import SearchBar from './search/searcbar';
// import { data, duration } from './dummyData'

import { addAppointment } from './appointment/actions';
import AppointmentCard from './appointmentCard';

export default function EmloyeeTable(props) {
  const dispatch = useDispatch();
  const { duration, employees, appointments } = useSelector((state) => state.callender);
  const [startDate, setStartDate] = React.useState(new Date());


  console.log("employees", employees);
  console.log("duration", duration);
  const tableRows = duration?.map(
    (element) => {
      return (

        <tr>
          <td>{element.time}</td>
          <td>{appointments?.map(
            appointment=>{
              if(appointment.durationId  == element.id  )
             return <AppointmentCard appointment={appointment}/>
             })}
             </td>
          <td></td>
          <td>2</td>
          <td>2</td>
          <td>2</td>
          <td>2</td>
          <td>2</td>
        </tr>

      )
    }
  )
  const tableHeads = employees?.map(
    (element) => {
      return (
        <th>{element.name}</th>

      )
    }
  )
  return (

    <div className='d-flex m-2 flex-column rounded-3  border mt-3'>
      <div className='d-flex   justify-content-between  my-3'>
        <div className='d-flex   justify-content-around p-3 m-2'>
          <button className="btn btn-text border btn-sm dropdown-toggle" type="button" varient="black" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            All employees
          </button>
          <button className="btn btn-text border btn-sm dropdown-toggle" type="button" varient="black" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Today
          </button>
          <div>
          <DatePicker className='d-flex justify-content-center ' style={{width:"80% !important"}} selected={startDate} onChange={(date) => setStartDate(date)} />

          </div>

        </div>
        <div className='d-flex  justify-content-around p-3 m-2 '>
          <SearchBar />
        </div>
      </div>
      <div>

        <Table hover>
          <thead>
            <tr>
              <th> Duration</th>
              {tableHeads}
            </tr>
          </thead>
          <tbody>

            {tableRows}
          </tbody>
        </Table>

      </div>
      {/* <div className='d-flex w-100 border'> */}
        {/* <div className='d-flex flex-column w-40 '> */}
          {/* <span className=' fw-bold p-3'>Duration</span> */}
          {/* {duration?.map((element) => <span className='border p-2' >{element.time}</span>)} */}
        
        {/* </div> */}
        {/* <span className='d-flex w-90 border overflow-x h-25 '> */}
        {/* <Table>
            <Thead >
              <Tr> */}
        {/* <div style={{ overflowX: 'scroll', whiteSpace: 'nowrap' }} className='d-flex h-25 overflow-x-scroll'> */}
          {/* {employees.map((employ, index) => <span style={{height:'min-content', padding: '15.5px 30.5px'}} className='d-flex  overflow-x border ' key={index}>{employ}</span>)} */}
          {/* {employees?.map((employ) => <span style={{height:'min-content', padding: '15.5px 30.5px', color:'black'}} className='d-flex  overflow-x border ' >{employ.name}</span>)} */}
        {/* </div> */}
        {/* </Tr>
            </Thead>
            <Tbody>
            </Tbody>
          </Table> */}
        {/* </span> */}

      {/* </div> */}
    </div>
  );
}