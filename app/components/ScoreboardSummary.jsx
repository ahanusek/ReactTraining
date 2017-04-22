var React = require('react');


var ScoreboardSummary = React.createClass({
	render: function () {
		var {players} = this.props;
		var sumPoints = function(){
			return players.reduce((total, player) => {
				return total + player.points;
			},0)
		};
		return (
			<div className="left-side">
				<div className="summary-list">
					<ul>
						<li>Players: {players.length}</li>
						<li>Total Points: {sumPoints()}</li>
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
