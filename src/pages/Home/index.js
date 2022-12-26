import React, { useState, useEffect } from 'react';
import EmloyeeAppointmentTable from '../../components/calender';
import Button from 'react-bootstrap/Button';
import './styles.css';
import { AppointmentModal } from '../../components/modal'
import { useSelector} from 'react-redux';
export const Home = () => {
  const dta = useSelector((state) => state.appointments);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="container-xs square border-start">
      <div className=''>
        <div className='d-flex justify-content-between'>
          <h4 className=''>Calender</h4>
          <div className='d-flex p-4 justify-content-between'>
            <Button variant="outline-dark fw-bold ">- Add block Time</Button>
            <Button onClick={handleShow} className='ms-3' variant="dark">New Apointment</Button>
          </div>
          <AppointmentModal handleClose={handleClose} show={show} />
        </div>
        <EmloyeeAppointmentTable />
      </div>
    </div>
  );
};
