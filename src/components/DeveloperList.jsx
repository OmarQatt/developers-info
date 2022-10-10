import React from 'react'
import {actionType} from './Developer'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import person from '../assets/person.jpg'
function DeveloperList(props) {
    console.log(props.developerList)
  return props.developerList.length ? (
    <div>
      
        {props.developerList.map(develop => (
        
    <Row xs={1} md={2} className="g-4" key={develop.id} onClick={() => props.dispatch({type: actionType.REMOVE_DEVELOPER, payload: {id: develop.id}})}>
     
        <Col>
          <Card>
        
            <Card.Img variant="top" src={person} alt="person" width='150' height='150'/>
            <Card.Body>
              <Card.Title>Developer info</Card.Title>
              <Card.Text>
              {develop.title}
              </Card.Text>
              <Card.Text>
              {develop.language}
              </Card.Text>
              <Card.Text>
              {develop.technologies}
              </Card.Text>
              <Card.Text>
              {develop.food}
              </Card.Text>
              <Card.Text>
              {develop.drink}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
   
    </Row>
      
        ))
        }
    
    </div>
  ) : <h3>the list is empty!</h3>
}

export default DeveloperList