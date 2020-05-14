import React, { Component } from 'react';
import { Grid, Header, Button } from 'semantic-ui-react';

class Counter extends Component {
  render() {
    return (
      <Grid centered>
        <Grid.Column textAlign='center'>
          <Header
            as='h1'
            textAlign='center'
            content='Welcome to the Counter App'
          />
          <Header as='h2' textAlign='center'>Counter: <span>0</span></Header>
        </Grid.Column>
      </Grid>
    );
  }
}
export default Counter;