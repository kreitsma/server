import React from 'react';

import $ from 'jquery';
import JobList from './adminVolunteerJobList.js'

module.exports = React.createClass({
  getInitialState: function(){
    return {data: []};
  },
  componentDidMount: function() {
    var temp = [{title: "Testing", id: 1, description: "This is a test job."}, {title: "Testing 2 Components", id: 2, description: "Second test job."}]
    this.setState({data: temp})
  },
  render: function() {
    return (
      <div className="adminBox">
        <h1>Volunteering Jobs</h1>
        <JobList data={this.state.data} />
      </div>
    );
  }
});