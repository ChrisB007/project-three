import React, { Component } from 'react';
import { Form, Button } from 'bootstrap-4-react';

export default class UserAuth extends Component {
  render() {
    return (
      <Form>
        <Form.Group>
          <label htmlFor="exampleInputEmail1">Email address</label>
          <Form.Input type="email" id="exampleInputEmail1" placeholder="Enter email" />
          <Form.Text text="muted">Your email is safe and confidential</Form.Text>
        </Form.Group>
        <Form.Group>
          <label htmlFor="exampleInputPassword1">Password</label>
          <Form.Input type="password" id="exampleInputPassword1" placeholder="Password" />
        </Form.Group>
        <Form.Group>
          <label htmlFor="exampleInputPassword1">Confirm Password</label>
          <Form.Input type="password" id="exampleInputPassword2" placeholder="Password" />
        </Form.Group>
        <Form.Group>
          <Form.Check>
            <Form.CheckInput type="checkbox" id="exampleCheck1" />
            <Form.CheckLabel htmlFor="exampleCheck1">Remember Me</Form.CheckLabel>
          </Form.Check>
        </Form.Group>
        <Button primary type="submit">Submit</Button>
      </Form>
    )
  }
}


