import React, { Component } from 'react';
import { List } from 'semantic-ui-react';
import { connect } from "react-redux";

import { getAllTodos } from "./../../actions/todos";


import moment from 'moment';




class AllTodosList extends Component {

  componentDidMount() {
    this.props.getAllTodos();
  }
  
  render() {
    return (
      <List celled selection size='huge'>
        <List.Item>
          <List.Content>
            <List.Header>Some future todo</List.Header>
            <List.Description>Created: {moment().fromNow()}</List.Description>
          </List.Content>
        </List.Item>
      </List>
    );
  }
}

function mapStateToProps(state){
  return { allTodos: state.todos.allTodos, getAllTodosError: state.todos.getAllTodosError };
}

export default connect(mapStateToProps, { getAllTodos })(AllTodosList);