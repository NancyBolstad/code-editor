import React from 'react';
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

function App() {
  return (
    <Container>
      <Column>
        <Button>New Rule</Button>
      </Column>
      <Column>
        <Button>Random Text</Button>
        <Document>
          <Editor />
          <Markup />
        </Document>
      </Column>
    </Container>
  );
}

export default App;
