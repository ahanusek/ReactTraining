var React = require('react');


var ListItem = React.createClass({
	render: function () {
		var {name, points} = this.props;
		return (
			<li className="item-container">
				<span className="player-name">{name}</span><span className="points-container"><button className="decrement">-</button>{points}<button className="increment">+</button></span>
			</li>
		)
	}
})


module.exports = ListItem;
