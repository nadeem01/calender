import React, { useState,useEffect } from 'react';
// import { Calendar } from 'react-calendar';
import EmloyeeTable from '../../components/dataTable';
import Button from 'react-bootstrap/Button';
import './styles.css';
// import { employees} from '../dummyData';
import {duration, data} from '../../components/dummyData'
import {AppointmentModal} from '../../components/modal'
import { useSelector, useDispatch } from 'react-redux';
export const Home = () => {
  let emply = data.employees
  let durtn = data.duration

  // useEffect(() => {
  //   console.log(emply,'dd')
  //   window.localStorage.setItem('employees', JSON.stringify(emply));
  //   window.localStorage.setItem('duration', JSON.stringify(durtn));
  //  const getEmployees = window.localStorage.getItem('employees')
  //  const getDuration = window.localStorage.getItem('duration')
  //   setEmploy(getEmployees)
  //   setDuration( getDuration)
  // }, []);
  const[employ, setEmploy] = useState([])
  const[duration, setDuration] = useState([])
  const dta = useSelector((state) => state.appointments);
  // const jsn = JSON.parse(employ)
  // console.log(jsn,'dtaaa');
  // console.log(JSON.parse(duration),'durrrrrrrr');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const showForm =()=>  handleShow()
  return (
    <div className="container-xs square border-start">
      <div className=''>
        <div  className='d-flex justify-content-between'>
        <h4 className=''>Calender</h4>
          <div className='d-flex p-4 justify-content-between'>
          <Button variant="outline-dark fw-bold ">- Add block Time</Button>
          <Button onClick={handleShow } className='ms-3' variant="dark">New Apointment</Button>
          </div>
        <AppointmentModal handleClose={handleClose} show={show}/>
        </div>
      <EmloyeeTable />
      </div>
    </div>

/* <div className=' container-sm square border-start rounded p-4'>
  <div className='d-flex flex-wrap p-3 justify-content-between'>
    <div className='w-70'>
    <h4 className=''>Calender</h4>
    </div>
    <div className='w-30 flex-wrap justify-content-aroung'>
         <Button className='btn-sm' variant="outline-dark fw-bold " btn-sm>- Add block Time</Button>
         <Button className='ms-3 btn-sm' variant="dark">New Apointment</Button>   
          </div>
  </div>
  <div>
  <table class="table">
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
  <div>
    
    </div>
</div> */

  );
};
