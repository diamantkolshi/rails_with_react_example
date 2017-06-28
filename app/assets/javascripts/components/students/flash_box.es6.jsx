const FlashBox = React.createClass({
  getInitialState: function(){
  	return {
  	}
  },

  removeBox: function(){
  	this.props.handleFlashError("")
  },

	render: function() {
		if(this.props.errors != "" && this.props.errors !== undefined){
			return (
				<div className="notification is-danger">
				  <button className="delete" onClick={this.removeBox}></button>
				  <ul>
					  {this.props.errors.map((error) =>
						  <li key={error.id}>{error}</li>
						)}
					</ul>
				</div>
			)			
		}	else {
			return (
				<div/>
			)
		}
	}
})