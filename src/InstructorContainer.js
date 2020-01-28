import React, { Component } from 'react';
import InstructorCard from './InstructorCard'

export default class InstructorContainer extends Component {
  render() {
      console.log(this.props);
    return (
        <div className="ui container">
            <InstructorCard instructor = {this.props.instructors[0]}/>)
            <InstructorCard instructor = {this.props.instructors[1]}/>)
            <InstructorCard instructor = {this.props.instructors[2]}/>)
        </div>
    );
  }
}
