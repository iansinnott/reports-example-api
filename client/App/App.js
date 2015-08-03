import React from 'react';
import { RouteHandler, Link } from 'react-router';
import axios from 'axios';

import './App.styl';

import 'font-awesome-webpack';

const Loading = React.createClass({

  render() {
    return (
      <div className='Loading'>
        <h3>Loading...</h3>
      </div>
    );
  },

});

export default React.createClass({

  getInitialState() {
    return {
      reports: [],
      currentReport: null,
      loaded: false,
    };
  },

  /**
   * On mount, fetch all reports.
   */
  componentDidMount() {
    axios.get('/api/reports')
      .then((res) => {
        this.setState({ reports: res.data, loaded: true });
      })
      .catch((res) => {
        console.error(res.data.message);
      });
  },

  render() {
    const handler = (this.state.loaded)
      ? <RouteHandler {...this.state} />
      : <Loading />;
    return (
      <div className='App container'>
        <h1>Reports API</h1>
        <nav className='main-nav'>
          <Link to='reports'>Reports</Link>
          <Link to='new'>Create New</Link>
        </nav>
        {handler}
      </div>
    );
  },

});
