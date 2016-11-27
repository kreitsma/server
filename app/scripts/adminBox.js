import React from 'react';

import $ from 'jquery';

module.exports = React.createClass({
  getInitialState: function(){
    return {data: []};
  },
  componentDidMount: function() {
  },
  render: function() {
    return (
      <div className="adminBox">
        <h1>Volunteering Jobs</h1>
      </div>
    );
  }
});