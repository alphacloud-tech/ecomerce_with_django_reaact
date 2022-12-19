import React, { Children } from 'react'
import { Container, Row, Col } from 'react-bootstrap'


function FormContainer({children}) { // we use dis for styling our form
  // children is a props n dats goin to be our actual form in LoginScreen 
  return (
    <Container>
        <Row className='justify-content-md-center'>
            <Col xs={12} md={6}>
                {children}
            </Col>
        </Row>
    </Container>
  )
}

export default FormContainer