import React from 'react';
import ReactDOM from 'react-dom';

import ScoreboardApp from './components/ScoreboardApp'

//Load foundation
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <ScoreboardApp/>,
  document.getElementById('app')
);
