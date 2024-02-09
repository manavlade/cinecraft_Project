import React from 'react'
import Button from 'react-bootstrap/Button';
import home  from "../images/home.jpg"
const Home = () => {
    return (
        <>
            <div className="home" id='home'>
                <div className="container">
                 
                    <div className="homeabout">
                        <div className="hpara">
                            <h1 style={{
                                paddingTop: "20px",
                                paddingBottom: "20px"
                            }} >CineCraft</h1>
                           <div className="para">
                                <h4>
                                    Check out the best site to learn Cinematography,
                                    Movie Making and Screenplay Writing where learning is made easy with
                                    our courses
                                </h4>
                           </div>
                            <div className="buttons">
                                <div className="button">
                                    <Button style={{
                                        backgroundColor: "White",
                                        color: "Blue",
                                        fontSize: "larger"
                                    }} >View Courses</Button>
                                </div>
                                <div className="button">
                                    <Button style={{
                                        fontSize: "larger"  
                                    }} variant="primary">Sign Up</Button>
                                </div>  
                            </div>
                        </div>
                        <div className="home-img">
                            <img src={home} alt="" sizes="" srcset="" />
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
export default Home;