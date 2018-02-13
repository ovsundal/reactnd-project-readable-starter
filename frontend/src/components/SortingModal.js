import React from 'react';
import {Card, CardBody, FormGroup, Input, Label} from 'reactstrap';
import * as actions from "../actions";
import {connect} from "react-redux";

class SortingModal extends React.Component {

    constructor(props) {
        super(props);

        //initialize with get all posts, sorted by date
        this.state = {
            selectedCategory: 'all',
            selectedMode: 'date'
        };
        this.props.getPosts();
    }

    componentWillReceiveProps(props) {
        console.log('props')
        console.log(props.state.PostReducer.forEach((post) => {
            console.log(post)
        }))
    }

    handleFilterByCategory = event => {
        const categoryValue = event.target.value;

        categoryValue === 'all'
        ? this.props.getPosts()
        : this.props.sortPostsByCategory(categoryValue);

        this.setState({
            selectedCategory: categoryValue
        })
    };

    handleFilterBySortingMode = event => {
        const modeValue = event.target.value;
        console.log(this.props)
        this.props.sortPostsByMode(modeValue);
        this.setState({
            selectedMode: modeValue
        })
    };

    render() {
        return (
            <Card>
                <CardBody>
                    <FormGroup>
                        <legend>Sort By</legend>
                        <FormGroup check>
                            <Label check>
                                <Input
                                    type="radio"
                                    name="mode"
                                    value="date"
                                    checked={this.state.selectedMode === "date"}
                                    onChange={this.handleFilterBySortingMode}
                                />
                                Date
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input
                                    type="radio"
                                    name="mode"
                                    value="score"
                                    checked={this.state.selectedMode === "score"}
                                    onChange={this.handleFilterBySortingMode}
                                />
                                Score
                            </Label>
                        </FormGroup>
                    </FormGroup>
                </CardBody>
                <CardBody>
                    <FormGroup>
                        <legend>Categories</legend>
                        <FormGroup check>
                            <Label check>
                                <Input
                                    type="radio"
                                    name="category"
                                    value="all"
                                    checked={this.state.selectedCategory === "all"}
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
                                    checked={this.state.selectedCategory === "react"}
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
                                    checked={this.state.selectedCategory === "redux"}
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
                                    checked={this.state.selectedCategory === "udacity"}
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

function mapStateToProps(state) {
    console.log(state)
    return {state};
}


function mapDispatchToProps(dispatch) {
    return {
        getPosts: () => dispatch(actions.getPosts()),
        sortPostsByCategory: (category) => dispatch(actions.sortPostsByCategory(category)),
        sortPostsByMode: (mode) => dispatch(actions.sortPostsByMode(mode))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SortingModal)