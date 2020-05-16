import React, { Component } from 'react';
import { List,Message } from 'semantic-ui-react';
import { connect } from "react-redux";

import { getAllTodos } from "./../../actions/todos";


import moment from 'moment';




class AllTodosList extends Component {

  componentDidMount() {
    this.props.getAllTodos();
  }
  

  renderList = () => {
    
  }

  render() {
    console.log(this.props);
    return (
      <List celled selection size='huge'>
        { this.props.getAllTodosError ? <Message negative header={this.props.getAllTodosError}/> : null }
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