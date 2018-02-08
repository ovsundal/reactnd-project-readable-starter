import React from 'react';
import {Card, CardBody, FormGroup, Input, Label} from 'reactstrap';
import * as actions from "../actions";
import {connect} from "react-redux";

class SortingModal extends React.Component {


    // handleSorting = event => {
    //     console.log(event.target.value);
    // };

    handleFilterByCategory = event => {
        console.log(event.target.value);
        this.props.sortPostsByCategory(event.target.value);
    };


    render() {
        return (
            <Card>
                {/*<CardBody>*/}
                    {/*<FormGroup>*/}
                        {/*<legend>Sort By</legend>*/}
                        {/*<FormGroup check>*/}
                            {/*<Label check>*/}
                                {/*<Input*/}
                                    {/*type="radio"*/}
                                    {/*name="category"*/}
                                    {/*value="date"*/}
                                    {/*onChange={this.handleSorting}*/}
                                {/*/>*/}
                                {/*Date*/}
                            {/*</Label>*/}
                        {/*</FormGroup>*/}
                        {/*<FormGroup check>*/}
                            {/*<Label check>*/}
                                {/*<Input*/}
                                    {/*type="radio"*/}
                                    {/*name="category"*/}
                                    {/*value="score"*/}
                                    {/*onChange={this.handleSorting}*/}
                                {/*/>*/}
                                {/*Score*/}
                            {/*</Label>*/}
                        {/*</FormGroup>*/}
                    {/*</FormGroup>*/}
                {/*</CardBody>*/}
                <CardBody>
                    <FormGroup>
                        <legend>Categories</legend>
                        <FormGroup check>
                            <Label check>
                                <Input
                                    type="radio"
                                    name="category"
                                    value="react"
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
        sortPostsByCategory: (category) => dispatch(actions.sortPostsByCategory(category))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(SortingModal)