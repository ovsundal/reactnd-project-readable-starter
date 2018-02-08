import React from 'react';
import {Card, CardBody, FormGroup, Input, Label} from 'reactstrap';
import * as actions from "../actions";
import {connect} from "react-redux";

class SortingModal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedOption: ''
        };
    }


    handleFilterByCategory = event => {

        //if all is selected, use getAll query, otherwise use category sorter query
        if (event.target.value === 'all') {
            this.props.getPosts();
        } else {
            this.props.sortPostsByCategory(event.target.value);
        }

        this.setState({
            selectedOption: event.target.value
        })
    };

    handleFilterBySorting = event => {
        this.props.sortPostsByMode(event.target.value);
        this.setState({
            selectedOption: event.target.value
        })
    };

    render() {
        return (
            <Card>
                <CardBody>
                    <FormGroup>
                        <legend>Categories</legend>
                        <FormGroup check>
                            <Label check>
                                <Input
                                    type="radio"
                                    name="category"
                                    value="all"
                                    checked={this.state.selectedOption === "all"}
                                    onChange={this.handleFilterByCategory}
                                />
                                all
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input
                                    type="radio"
                                    name="category"
                                    value="react"
                                    checked={this.state.selectedOption === "react"}
                                    onChange={this.handleFilterByCategory}
                                />
                                react
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input
                                    type="radio"
                                    name="category"
                                    value="redux"
                                    checked={this.state.selectedOption === "redux"}
                                    onChange={this.handleFilterByCategory}
                                />
                                redux
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input
                                    type="radio"
                                    name="category"
                                    value="udacity"
                                    checked={this.state.selectedOption === "udacity"}
                                    onChange={this.handleFilterByCategory}
                                />
                                udacity
                            </Label>
                        </FormGroup>
                    </FormGroup>
                </CardBody>
            </Card>
        );
    };
}

function mapDispatchToProps(dispatch) {
    return {
        sortPostsByCategory: (category) => dispatch(actions.sortPostsByCategory(category)),
        sortPostsByMode: (mode) => dispatch(actions.sortPostsByMode(mode))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(SortingModal)