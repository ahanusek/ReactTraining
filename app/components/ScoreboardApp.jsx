var React = require('react');
var ScoreboardSummary = require('ScoreboardSummary');
var ScoreboardList = require('ScoreboardList');
var ScoreboardTimer = require('ScoreboardTimer');
var ScoreboardAddForm = require('ScoreboardAddForm');

var ScoreboardApp = React.createClass({
	render: function () {
		return (
			<div className="medium-6 medium-offset-3 columns">
				<div className="scoreboard-container">
					<ScoreboardSummary/>
					<ScoreboardTimer/>
					<ScoreboardList/>
					<ScoreboardAddForm/>
				</div>
			</div>
		)
	}
})


module.exports = ScoreboardApp;
