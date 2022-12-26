import Card from 'react-bootstrap/Card';

function AppointmentCard({ appointment }) {
    return (
        <Card style={{ width: '10rem' }}>
            <Card.Body>
                <Card.Subtitle className=" d-flex mb-2 text-muted justify-content-around">{appointment.start_time}-{appointment.duration}</Card.Subtitle>
                <Card.Title>{appointment.name}</Card.Title>
                <Card.Text>
                    In house Appointment
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default AppointmentCard;