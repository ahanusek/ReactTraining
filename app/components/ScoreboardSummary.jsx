var React = require('react');


var ScoreboardSummary = React.createClass({
	render: function () {
		return (
			<div className="left-side">
				<div className="summary-list">
					<ul>
						<li>Players: 3</li>
						<li>Total Points: 103</li>
					</ul>
				</div>
				<div className="main-header">
					<h1>Scoreboard</h1>
				</div>
			</div>
		)
	}
})


module.exports = ScoreboardSummary;
