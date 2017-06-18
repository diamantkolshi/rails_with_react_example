const CreateStudent = React.createClass({
	getInitialState: function(){
		return {
			name: '',
			surname: '',
			age: '',
			total_point: 0,
			subject_count: 0,
			average: 0.0
		};
	},

	handleValueChange: function(e) {
		this.setState({[e.target.name]: e.target.value});
	},

	averageRes: function(){
		if(this.state.total_point != 0 && this.state.subject_count != 0) {
			this.state.average = this.state.total_point / this.state.subject_count
		}
		else {
			this.state.average = 0
		}
		return this.state.average
	},

	handleSubmit: function(e) {
		e.preventDefault();
		// $.ajax({ 
		// 	url: '/students', 
		// 	type: 'POST',  
		// 	data: { student: { name: "asdas" }, 
		// 	success: (response) => { 
		// 		// return result 
		// 	});
	},

	method_1: function() {
		debugger;
	},

  render: function() {
    return (
  		<div className="field form-inputs margin-top-50px">
			  <div className="field-label is-normal">
			  </div>
			  <div className="field-body">
			    <div className="field is-grouped">
			      <p className="control is-expanded has-icons-left">
			        <input className="input" style={{width: '200px'}} type="text" name="name" onChange={this.handleValueChange} placeholder="Name"  />
			        <span className="icon is-small is-left">
			          <i className="fa fa-user"></i>
			        </span>
			      </p>
			      <p className="control is-expanded has-icons-left">
			        <input className="input" style={{width: '200px'}} type="text" name="surname" onChange={this.handleValueChange} placeholder="Surname" />
			      </p>
			      <p className="control is-expanded has-icons-left">
			        <input className="input" style={{width: '200px'}} type="number" name="age" onChange={this.handleValueChange} placeholder="Age" />
			      </p>
			      <p className="control is-expanded has-icons-left">
			        <input className="input" style={{width: '200px'}} type="number" name="total_point" onChange={this.handleValueChange} placeholder="Total Point" />
			      </p>
			      <p className="control is-expanded has-icons-left">
			        <input className="input" style={{width: '200px'}} type="number" name="subject_count" onChange={this.handleValueChange} placeholder="Subject Number" />
			      </p>
			      <AverageBox average={this.averageRes()}></AverageBox>
			      <p className="control is-expanded has-icons-left">
			      	<button className="button is-primary" onClick={this.method_1}>
			          Create Student
			        </button>
			      </p>			      
			    </div>
			  </div>
			</div>
    )
  }
});



