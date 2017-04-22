var React = require('react');
var ListItem = require('ListItem');


var ScoreboardList = React.createClass({
	render: function () {
		var {players} = this.props;
		var listGenerator = () => {
			if(players.length > 0){
				return players.map(player => {
					var {name, points, id} = player;
					return <ListItem key={id} name={name} points={points}/>;
				})
			} else {
				return <h3>Brak zawodników</h3>
			}
		};

		return (
			<div>
				<ul className="players-list">
					{listGenerator()}
				</ul>
			</div>
		)
	}
})


module.exports = ScoreboardList;
