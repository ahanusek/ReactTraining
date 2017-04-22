var React = require('react');


var ScoreboardTimer = React.createClass({
	onStatusChange: function(newStatus){
			return () => {
				this.props.onStatusChange(newStatus);
			}
	},
	render: function () {
		var {time, status, onStatusChange} = this.props;
		var renderButton = () => {
			if(status === "stopped" || status === "paused"){
				return <button className="button secondary" onClick={this.onStatusChange('started')}>Start</button>
			} else {
				return <button className="button secondary" onClick={this.onStatusChange('paused')}>Stop</button>
			}
		}
		return (
			<div className="timer-container">
				<div>Stopwatch: <h4>{time}</h4></div>
				<div>{renderButton()}<button className="button secondary" onClick={this.onStatusChange('stopped')}>Reset</button></div>
			</div>
		)
	}
})


module.exports = ScoreboardTimer;
