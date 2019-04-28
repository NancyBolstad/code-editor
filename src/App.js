import React, { Component } from 'react';
import {
  Markup,
  Editor,
  Container,
  Column,
  Row,
  RuleInput,
  RuleLabel,
  StyleInput,
  Button,
  Document
} from './styled';

class App extends Component {
  state = {
    editor: '',
    name0: '',
    begin0: '',
    end0: '',
    style0: '',
    rules: 1
  };

  handleChange = event => {
    let { name, value } = event.target;
    this.setState({
      //computed property name
      [name]: value
    });
  };

  newFields = () => {
    this.setState(prevState => {
      //pull the number of rules from previous state
      let { rules } = prevState;
      //loop through the fields when creating new field
      let fields = ['name', 'begin', 'end', 'style'];
      //take in all of the input values
      let inputValues = {};
      //loop through the fields, this fields.forEach is going to create each of the fields
      fields.forEach(field => {
        inputValues = {
          //use spread operator to copy and paste all of the old input values into the new inputValue
          ...inputValues,
          //for new ones, use the computed property name to pu in the particular field and the number of rules that the application had so far
          [`${field}${rules}`]: ''
        };
      });
      //Just to make sure that I am incrementing the rules because we want the next time we create a rule for it to have a different index value than the past one. So we need to make sure we increment that
      rules++;
      //the setState function expects us to return an object that will represent the changes we are making to the state
      return {
        rules,
        //use the object assembly shorthand
        ...inputValues
      };
    });
  };

  render() {
    let { value } = this.state;
    let { handleChange, newFields } = this;

    return (
      <Container>
        <Column>
          <Button onClick={newFields}>New Rule</Button>
        </Column>
        <Column>
          <Button>Random Text</Button>
          <Document>
            <Editor name={'Editor'} value={value} onChange={handleChange} />
            <Markup />
          </Document>
        </Column>
      </Container>
    );
  }
}

export default App;
