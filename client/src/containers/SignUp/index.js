import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Segment, Button } from "semantic-ui-react";
import { email, length, required } from "redux-form-validators";

class SignUp extends Component {


    renderEmail = formProps => {
        console.log(formProps);
        return (
            <Form.Input
                {...formProps.input }
                fluid
                icon="user"
                iconPosition='left'a
                autoComplete='off'
                placeholder='Email Address'
            />
        );
    }


    render() {
        console.log("Inside of signup render", this.props )
        return (
            <Form size="large">
                <Segment stacked>
                    <Field
                        name="email"
                        component={this.renderEmail}
                        validate={
                            [
                                required({ msg: "Email is required" }),
                                email({ msg: "You must provide a valid email address " }),

                            ]
                        }
                    />
                </Segment>
            </Form>
        )
    }
}


export default reduxForm({ form: "signup" })(SignUp);
