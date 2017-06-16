class CreateStudent extends React.Component {
	constructor(props){
		super(props)
		this.state = {
		}
	}
	
  render () {
    return (
  		<div className="field form-inputs margin-top-50px">
			  <div className="field-label is-normal">
			  </div>
			  <div className="field-body">
			    <div className="field is-grouped">
			      <p className="control is-expanded has-icons-left">
			        <input className="input" style={{width: '200px'}} type="text" placeholder="Name" />
			        <span className="icon is-small is-left">
			          <i className="fa fa-user"></i>
			        </span>
			      </p>
			      <p className="control is-expanded has-icons-left">
			        <input className="input" style={{width: '200px'}} type="text" placeholder="Surname" />
			      </p>
			      <p className="control is-expanded has-icons-left">
			        <input className="input" style={{width: '200px'}} type="number" placeholder="Age" />
			      </p>
			      <p className="control is-expanded has-icons-left">
			        <input className="input" style={{width: '200px'}} type="number" placeholder="Total Point" />
			      </p>
			      <p className="control is-expanded has-icons-left">
			        <input className="input" style={{width: '200px'}} type="text" placeholder="Subject Number" />
			      </p>
			      <p className="control is-expanded has-icons-left">
			        <input className="input" style={{width: '200px'}} type="text" placeholder="Average" disabled/>
			      </p>
			      <p className="control is-expanded has-icons-left">
			      	<button className="button is-primary">
			          Create Student
			        </button>
			      </p>			      
			    </div>
			  </div>
			</div>
    )
  }
}



