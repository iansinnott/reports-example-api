import React from 'react';
import { Link } from 'react-router';

/**
 * @module ListReports
 */
export default React.createClass({

  propTypes: {
    reports: React.PropTypes.array.isRequired,
  },

  render() {
    return (
      <div className='ListReports'>
        <ul className='ListReports'>
          <li key={'title-row'} className='title-row row'>
            <p className='subject'>Subject</p>
            <p className='created'>Created</p>
          </li>
          {this.props.reports.map((report) => {
            return (
              <li key={report.id} className='row'>
                <p className='subject'>{report.subject}</p>
                <p className='created'>{report.createdAt.toString()}</p>
              </li>
            );
          })}
        </ul>
        <Link to='new' className='btn'>Create New</Link>
      </div>
    );
  },

});

