const CreateStudent = React.createClass({
	getInitialState: function(){
		return {
			totalPoint: 0,
			subjectCount: 0,
			average: 0.0
		};
	},

	handleValueChange: function(e) {
		this.setState({[e.target.name]: e.target.value});
	},

	averageRes: function(){
		result = 0
		if(this.state.totalPoint != 0 && this.state.subjectCount != 0) {
			result = this.state.totalPoint / this.state.subjectCount
		}
		else {
			result = 0
		}
		return result
	},

  render: function() {
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
			        <input className="input" style={{width: '200px'}} type="number" name="totalPoint" onChange={this.handleValueChange} placeholder="Total Point" />
			      </p>
			      <p className="control is-expanded has-icons-left">
			        <input className="input" style={{width: '200px'}} type="number" name="subjectCount" onChange={this.handleValueChange} placeholder="Subject Number" />
			      </p>
			      <AverageBox average={this.averageRes()}></AverageBox>
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
});



