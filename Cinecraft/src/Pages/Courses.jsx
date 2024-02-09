import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Course = () => {
    return (
        <>
            <div className="phead" id="courses">
                <h1 style={{
                    textAlign:"center" 
                }}>Course</h1>
            </div>
           <div className="main" >
            <div className="card1">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://pbblogassets.s3.amazonaws.com/uploads/2015/11/Cinematography-Manual.jpg" />
                        <Card.Body>
                            <Card.Title>Cinematography</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">View Course</Button>
                        </Card.Body>
                    </Card>
            </div>
            <div className="card2">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://pbblogassets.s3.amazonaws.com/uploads/2015/11/Cinematography-Manual.jpg" />
                        <Card.Body>
                            <Card.Title>Movie Making</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">View Course</Button>
                        </Card.Body>
                    </Card>
            </div>
            <div className="card3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://pbblogassets.s3.amazonaws.com/uploads/2015/11/Cinematography-Manual.jpg" />
                        <Card.Body>
                            <Card.Title>Screenplay Writing </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">View Course</Button>
                        </Card.Body>
                    </Card>
            </div>
           </div>
        </>
    )
}
export default Course;


