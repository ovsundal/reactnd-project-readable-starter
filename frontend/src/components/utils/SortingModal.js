import React from 'react';
import {Card, CardBody, FormGroup, Input, Label} from 'reactstrap';
import {connect} from "react-redux";
import {getPosts, sortPostsByCategory, sortPostsByMode} from "../../actions";
import {withRouter} from "react-router-dom";

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

    componentDidMount() {
        this.props.sortPostsByMode(this.state.selectedMode);
    }

    handleFilterByCategory = event => {
        const categoryValue = event.target.value;

        categoryValue === 'all'
        ? this.props.getPosts()
        : this.props.sortPostsByCategory(categoryValue);

        this.setState({
            selectedCategory: categoryValue
        });
        this.props.history.push(`/${categoryValue}`)
    };

    handleFilterBySortingMode = event => {
        const modeValue = event.target.value;
        this.props.sortPostsByMode(modeValue);
        this.setState({
            selectedMode: modeValue
        });
        //pass the value to MainPageView (parent) component
        this.props.applySorting(modeValue)
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

export default withRouter(connect(
    null,
    {getPosts, sortPostsByCategory, sortPostsByMode}
)(SortingModal))