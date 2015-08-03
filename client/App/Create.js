import React from 'react/addons';
import axios from 'axios';
const { LinkedStateMixin } = React.addons;


/**
 * @module CreateReport
 */
export default React.createClass({

  mixins: [LinkedStateMixin],

  getInitialState() {
    return {
      subject: '',
      region: null,
      impact: null,
    };
  },

  render() {
    return (
      <form onSubmit={this.saveReport}>
        <input
          type='text'
          name='subject'
          valueLink={this.linkState('subject')}
          placeholder='Subject' />
        <input
          type='text'
          name='region'
          valueLink={this.linkState('region')}
          placeholder='Region' />
        <input
          type='number'
          name='impact'
          valueLink={this.linkState('impact')}
          placeholder='Impact' />
        <button className='btn' type='submit'>Save</button>
      </form>
    );
  },

  saveReport(e) {
    e.preventDefault();
    axios.post('/api/reports', this.state)
    .then((res) => {
      console.log(res);
    })
    .catch((res) => {
      console.error(res.data.message);
    });
  },

});
