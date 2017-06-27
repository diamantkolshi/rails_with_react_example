class FlashBox extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  } 

  removeBox() {
  	this.props.handleFlashError("")
  }

	render() {
		if(this.props.errors != "") {
			return (
				<div className="notification is-danger">
				  <button className="delete" onClick={this.removeBox.bind(this)}></button>
				  Danger lorem ipsum dolor sit amet, consectetur
				  adipiscing elit lorem ipsum dolor sit amet,
				  consectetur adipiscing elit
				</div>
			)			
		}	else {
			return (
					<div/>
				)
		}
	}
}