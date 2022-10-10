import React, { useState } from 'react'
import { actionType } from './Developer';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function DeveloperForm(props) {
  const [title, setTitle] = useState('');
  const [language, setLanguage] = useState('');
  const [technologies, setTechnologies] = useState('');
  const [food, setFood] = useState('');
  const [drink, setDrink] = useState('');
  // console.log(title);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!title) return;
    props.dispatch({type: actionType.ADD_DEVELOPER, payload: {title, language, technologies, food, drink}});
    setTitle('');
    setLanguage('')
    setTechnologies('')
    setFood('')
    setDrink('')
  }

  return (
    // <form onSubmit={handleSubmit}>
    //   <input placeholder='Book title' type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>
    //   <input placeholder='eg: Saeed' type="text" onChange={(e) => setAuthor(e.target.value)} value={author}/>
    //   <button type="submit">Save</button>
    // </form>
    <Form onSubmit={handleSubmit}>
    <fieldset>
      <Form.Group className="mb-3">
        <Form.Label >Developer Name</Form.Label>
        <Form.Control placeholder="developer name" type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label >programming language</Form.Label>
        <Form.Select onChange={(e) => setLanguage(e.target.value)} value={language}>
          <option>select language</option> 
          <option>JavaScript</option>
          <option>C++</option>
          <option>Python</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label >technologies</Form.Label>
        <Form.Select onChange={(e) => setTechnologies(e.target.value)} value={technologies}>
          <option>select technologies</option>               
          <option>Library</option>
          <option>Framework </option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label >Favorite Food</Form.Label>
        <Form.Control placeholder="Favorite Food" type="text" onChange={(e) => setFood(e.target.value)} value={food}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label >Favorite Drink</Form.Label>
        <Form.Control placeholder="Favorite Drink" type="text" onChange={(e) => setDrink(e.target.value)} value={drink}/>
      </Form.Group>
      <Button type="submit">Submit</Button>
    </fieldset>
  </Form>
  )
}

export default DeveloperForm