import React from 'react'
import Form from 'react-bootstrap/Form';
import { data} from '../dummyData'
import { useSelector, useDispatch } from 'react-redux';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import Button from 'react-bootstrap/Button';
import appointments from './reducer';
import { addAppointment } from './actions';
;
function AppoinmnetForm({ handleClose }) {

    const dispatch = useDispatch()
    const [id, setId] = React.useState({
        employeeId: "",
        durationId: ""
    });
    const [initialValues, setInitialValues] = React.useState({
        name: "",
        employeeId: id.employeeId,
        employee: "select an employee",
        date: "",
        start_time: "",
        durationId: id.durationId,

    })
    const handleChangeAppointment = (e) => {
        const { name, value, id, selectedIndex } = e.target;
        console.log(name, 'asdas')
        if (name === "duration") {
            console.log('done')
            const el = e.target.childNodes[selectedIndex]
            initialValues.durationId = el.getAttribute('id');


        }
        if (name === "employee") {
            console.log('done')
            const el = e.target.childNodes[selectedIndex]
            initialValues.employeeId = el.getAttribute('id');
        }
        setInitialValues({
            ...initialValues,
            [e.target.name]: value
        });
    }
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(addAppointment(initialValues))
        handleClose();
    }
 
    return (
        <Form onSubmit={(e) => onSubmit(e)}>
            <Form.Group className="mb-3 col-xs">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" value={initialValues.name} placeholder="Name" onChange={handleChangeAppointment} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Employee</Form.Label>
                <Form.Select name="employee" value={initialValues.employee} onChange={handleChangeAppointment}>
                    {
                        data.employees.map((e) => <option id={e.id}>{e.name}</option>)
                    }
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3 col-lg" >
                <Form.Label>Date</Form.Label>
                <Form.Control name="date" value={initialValues.date} onChange={handleChangeAppointment} type="date" />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Start time (09:00 am)</Form.Label>
                <Form.Control name="start_time" value={initialValues.start_time} onChange={handleChangeAppointment} type="time" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Duration</Form.Label>
                <Form.Select name="duration" value={initialValues.duration} onChange={handleChangeAppointment}>
                    {
                        data.duration.map((e,) => <option id={e.id}>{e.time}</option>)
                    }
                </Form.Select>
            </Form.Group>
            <Button variant="primary" text-align-center type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default AppoinmnetForm;