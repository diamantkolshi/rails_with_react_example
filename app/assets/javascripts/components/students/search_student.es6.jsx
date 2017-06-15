class SearchStudent extends React.Component {
	constructor(props){
		super(props)
		this.state = {
		}
	}
	
  render () {
    return (
    	<div className="field is-grouped search-item">
        <p className="control is-expanded">
          <input className="input" type="text" placeholder="search student"/>
        </p>
        <p className="control">
          <a className="button is-info">
            Search
          </a>
        </p>
      </div>
    )
  }
}



