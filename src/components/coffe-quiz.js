/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetchCoffee } from '../actions';

const CoffeeQuiz = (props) => {
  const [strength, setStrength] = useState('Default');
  const [flavors, setFlavors] = useState('Default');
  const [temp, setTemp] = useState('Default');
  const [speed, setSpeed] = useState('Default');
  const [experience, setExperience] = useState('Default');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCoffee());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (strength === 'bold') {
      // eslint-disable-next-line react/destructuring-assignment, react/prop-types
      props.history.push('recipe/1');
    } else if (strength === 'smooth') {
      // eslint-disable-next-line react/destructuring-assignment, react/prop-types
      props.history.push('recipe/3');
    }
  };

  return (
    <div>
      <div className="CoffeeQuiz">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicSelect">
            <Form.Label>
              <h6 className="text-dark">How Strong Do You Like It?</h6>
            </Form.Label>
            <Form.Control
              as="select"
              value={strength}
              onChange={(e) => {
                setStrength(e.target.value);
              }}
            >
              <option>Select Strength</option>
              <option value="light">Light and aromatic</option>
              <option value="smooth">Smooth and balanced</option>
              <option value="bold">Bold and roasty</option>
              <option value="kill">Kill my tastebuds</option>
            </Form.Control>

            <br />

            <Form.Label>
              <h6 className="text-dark">Which Flavors Appeal To You?</h6>
            </Form.Label>
            <Form.Select
              value={flavors}
              onChange={(e) => {
                setFlavors(e.target.value);
              }}
            >
              <option>Select Flavors</option>
              <option value="citrus">Citrus and mineral</option>
              <option value="stonefruit">Stonefruit and earth</option>
              <option value="berry">Berry and chocolate</option>
              <option value="caramel">Caramel and roasted nuts</option>
            </Form.Select>

            <br />

            <Form.Label>
              <h6 className="text-dark">Hot Or Cold?</h6>
            </Form.Label>
            <Form.Control
              as="select"
              value={temp}
              onChange={(e) => {
                setTemp(e.target.value);
              }}
            >
              <option>Select Temp</option>
              <option value="hot">Hot</option>
              <option value="cold">Cold</option>
            </Form.Control>

            <br />

            <Form.Label>
              <h6 className="text-dark">How Quick Do You Want It?</h6>
            </Form.Label>
            <Form.Control
              as="select"
              value={speed}
              onChange={(e) => {
                setSpeed(e.target.value);
              }}
            >
              <option>Select Wait Time</option>
              <option value="fast">Yesterday</option>
              <option value="medium">I don't mind waiting a bit</option>
              <option value="slow">I want to savor the process</option>
            </Form.Control>

            <br />

            <Form.Label>
              <h6 className="text-dark">
                How Experienced Are You With Pour-over Methods?
              </h6>
            </Form.Label>
            <Form.Control
              as="select"
              value={experience}
              onChange={(e) => {
                setExperience(e.target.value);
              }}
            >
              <option value="default">Select your experience</option>
              <option value="trying">Trying it out</option>
              <option value="some">Some. Looking for better results</option>
              <option value="confident">
                Confident. Expirementing with recipes.
              </option>
            </Form.Control>

            <br />
          </Form.Group>
          <Button id="get" type="submit" variant="warning">
            Get Recipe <i className="fa fa-coffee" />
          </Button>
        </Form>
        <Link to="/">
          <i className="back fa fa-arrow-left fa-lg" />
        </Link>
      </div>
    </div>
  );
};

export default CoffeeQuiz;
