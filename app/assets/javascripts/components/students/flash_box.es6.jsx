class FlashBox extends React.Component{
	constructor(props){
		super(props)
	} 

	removeBox() {
  	this.props.handleFlashError("")
  }

	render() {
		if(this.props.errors != "" && this.props.errors != undefined){
			return (
				<div className="notification is-danger">
				  <button className="delete" onClick={this.removeBox.bind(this)}></button>
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
};