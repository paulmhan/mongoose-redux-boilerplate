import React, { Component } from 'react';
import { Grid, Header, Button } from 'semantic-ui-react';
import { connect } from "react-redux";
import { increment } from "../../actions/counter";



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
          <Button.Group>
            <Button
              icon='minus circle'
              content='Decrement'
              negative
            />
            <Button.Or/>
            <Button
              icon='plus circle'
              content='Increment'
              positive
            />
          </Button.Group>
        </Grid.Column>
      </Grid>
    );
  }
}

function mapStateToProps(state){
  return { counter: state.counter };
};

export default connect(mapStateToProps, { increment })(Counter);
