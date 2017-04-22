var React = require('react');
var ScoreboardSummary = require('ScoreboardSummary');
var ScoreboardList = require('ScoreboardList');
var ScoreboardTimer = require('ScoreboardTimer');
var ScoreboardAddForm = require('ScoreboardAddForm');
var uuid = require('node-uuid');

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
					points: 34,
					id: 2
				},
			],
			time: 0,
			stoperStatus: "stopped"
		}
	},
	componentDidUpdate: function(prevProps, prevState) {
		if(this.state.stoperStatus != prevState.stoperStatus){
			switch (this.state.stoperStatus){
				case "started":
					this.startTimer();
					break;
				case 'stopped':
					this.setState({time: 0});
				case "paused":
					clearInterval(this.timer);
					this.timer = undefined;
					break;
			}
		}
	},
	onChangePoints: function(operation, id){
		var players = this.state.players;
		var newPlayers = players.map(player => {
			if(player.id === id){
				if(operation === "increment"){
					player.points = player.points + 1;
				} else if(operation === "decrement" && player.points > 0){
					player.points = player.points - 1;
				}
			}
			return player;
		});
		this.setState({
			players: [...newPlayers]
		})
	},
	onRemoveItem: function(id){
		this.setState({
			players: this.state.players.filter(player =>{
				return player.id !== id;
			})
		})
	},
	startTimer: function() {
		this.timer = setInterval(() => {
			var newTime = this.state.time + 1;
			this.setState({
				time: newTime
			})
		}, 1000)
	},
	onFormSubmit: function(name){
		this.setState({
			players: [
				...this.state.players,
				{
					name: name,
					points: 0,
					id: uuid()
				}
			]
		})
	},
	handleStatusChange: function(newStatus){
		this.setState({
			stoperStatus: newStatus
		})
	},
	render: function () {
		var {players, time, stoperStatus} = this.state;
		return (
			<div className="medium-6 medium-offset-3 columns">
				<div className="scoreboard-container">
					<div className="header-container">
						<ScoreboardSummary players={players}/>
						<ScoreboardTimer onStatusChange={this.handleStatusChange} time={time} status={stoperStatus}/>
					</div>
					<ScoreboardList players={players} onRemove={this.onRemoveItem} onChangePoints={this.onChangePoints}/>
					<ScoreboardAddForm onFormSubmit={this.onFormSubmit}/>
				</div>
			</div>
		)
	}
})


module.exports = ScoreboardApp;
