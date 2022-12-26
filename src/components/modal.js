import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AppoinmnetForm from './appointment/appoinmentForm';

export function AppointmentModal({ show, handleClose }) {


  return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body><AppoinmnetForm handleClose={handleClose} /></Modal.Body>
      </Modal>
  );
}

