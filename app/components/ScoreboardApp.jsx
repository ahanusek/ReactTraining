var React = require('react');
var ScoreboardSummary = require('ScoreboardSummary');
var ScoreboardList = require('ScoreboardList');
var ScoreboardTimer = require('ScoreboardTimer');
var ScoreboardAddForm = require('ScoreboardAddForm');

var ScoreboardApp = React.createClass({
	getInitialState: function() {
		return {
			players: [
				{
					name: "Andrzej Hanusek",
					points: 32,
					id: 0
				},
				{
					name: "Lionel Messi",
					points: 20,
					id: 1
				},
				{
					name: "Maciej Kot",
					points: 35,
					id: 2
				},
			]
		}
	},
	onFormSubmit: function(name){
		console.log(name);
	},
	render: function () {
		var {players} = this.state;
		return (
			<div className="medium-6 medium-offset-3 columns">
				<div className="scoreboard-container">
					<div className="header-container">
						<ScoreboardSummary/>
						<ScoreboardTimer/>
					</div>
					<ScoreboardList players={players}/>
					<ScoreboardAddForm onFormSubmit={this.onFormSubmit}/>
				</div>
			</div>
		)
	}
})


module.exports = ScoreboardApp;
