
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link, useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
function OldData(){
    const navigate = useNavigate();
  useEffect(() => {
  const token = localStorage.getItem('token');
  if (!token) {
    navigate('/');
  } else {
    // Verify that the token is valid here
    // For example, you can send a request to the server to verify the token
    // If the token is invalid, remove it from localStorage and redirect to login
    navigate('/olddata');
  }
}, [navigate]);
        return(
                <>
                    <Container className="mt-3">
                        <Row>
                            <Col>
                                <div className="h-auto w-100 bg-dark text-center">
                                    <Link className="text-white text-decoration-none"><p>Feb 2023</p></Link>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="h-auto w-100 bg-dark text-center">
                                    <Link className="text-white text-decoration-none"><p>Oct 2022</p></Link>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="h-auto w-100 bg-dark text-center">
                                    <Link className="text-white text-decoration-none"><p>May 2022</p></Link>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="h-auto w-100 bg-dark text-center">
                                    <Link className="text-white text-decoration-none"><p>Feb 2022</p></Link>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="h-auto w-100 bg-dark text-center">
                                    <Link className="text-white text-decoration-none"><p>Aug 2021</p></Link>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="h-auto w-100 bg-dark text-center">
                                    <Link className="text-white text-decoration-none"><p>Aug 2021</p></Link>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="h-auto w-100 bg-dark text-center">
                                    <Link className="text-white text-decoration-none"><p>Jun 2021</p></Link>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="h-auto w-100 bg-dark text-center">
                                    <Link className="text-white text-decoration-none"><p>May 2021</p></Link>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="h-auto w-100 bg-dark text-center">
                                    <Link className="text-white text-decoration-none"><p>Apr 2021</p></Link>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="h-auto w-100 bg-dark text-center">
                                    <Link className="text-white text-decoration-none"><p>Feb 2021</p></Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </>
            );
}
export default OldData







