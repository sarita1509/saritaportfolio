import React from 'react'
import Card from 'react-bootstrap/Card';

const EducationCard = () => {
  return (
    <Card  className="shadow-lg p-3 rounded mb-5">
      
      <Card.Body>
        <Card.Title>M.C.A</Card.Title>
        <Card.Text className="college mb-0">
          Nalanda Open University Patna
        </Card.Text>
        <Card.Text className="year mb-3">
          2019
        </Card.Text>
        </Card.Body>
    </Card>
    
  )
}

export default EducationCard