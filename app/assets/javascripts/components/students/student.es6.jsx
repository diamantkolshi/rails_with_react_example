class Student extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			checked: false
		}
	}

	_touchedMe(){
		this.setState({checked: true})
	}
	
  render () {
  	let open = <a className="clicker" onClick={this._touchedMe.bind(this)}>Show</a>;

  	if(this.state.checked){
  		open = <div>
    		<h2>{this.props.student.name}</h2>
    		<h2>{this.props.student.surname}</h2>
	  	</div>;
  	}

    return (
    	<div>
    		{open}
    	</div>
    )
  }
}



