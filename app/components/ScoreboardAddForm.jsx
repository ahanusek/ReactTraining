var React = require('react');

var ScoreboardAddForm = React.createClass({
  onSearch: function(e) {
    e.preventDefault();
    var name = this.refs.name.value;
    if (name.length > 0) {
      this.props.onFormSubmit(name);
      this.refs.name.value = "";
    }
  },
  render: function() {
    return (
      <div className="form-container">
        <form onSubmit={this.onSearch}>
          <input type="text" ref="name" placeholder="Type player name"/>
          <button type="submit">Add Player</button>
        </form>
      </div>
    )
  }
})

module.exports = ScoreboardAddForm;
