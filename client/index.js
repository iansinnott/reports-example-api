import React from 'react';
import Router from 'react-router';

import routes from './router.js';

Router.run(routes, (Handler) => {
  React.render(<Handler />, document.getElementById('root'));
});

