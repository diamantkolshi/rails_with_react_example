class AverageBox extends React.Component {
	constructor(props){
		super(props)
	}

  render () {
    return (
    	<p className="control is-expanded has-icons-left">
    		<input className="input" style={{width: '200px'}} value={this.props.average} type="text" placeholder="Average" disabled/>
  		</p>
    )
  }
}



