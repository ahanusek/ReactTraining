var React = require('react');


var ListItem = React.createClass({
	render: function () {
		var {name, points, id} = this.props;
		return (
			<li className="item-container">
				<span onClick={() => {
						this.props.onRemove(id);
					}} className="remove-item">X</span><span className="player-name">{name}</span><span className="points-container"><button onClick={() => {
						this.props.onChangePoints('decrement', id)
					}} className="decrement">-</button><span className="points">{points}</span><button className="increment" onClick={() => {
						this.props.onChangePoints('increment', id)
					}}>+</button></span>
			</li>
		)
	}
})


module.exports = ListItem;
