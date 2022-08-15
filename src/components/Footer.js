import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-2 pb-60px'>Copyright &copy; </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
