const StudentItem = React.createClass({
  getInitialState: function(){
    return {
      edit: false,
      name: this.props.student.name,
      surname: this.props.student.surname,
      age: this.props.student.age,
      total_point: this.props.student.total_point,
      subject_count: this.props.student.subject_count,
      average: this.props.student.average
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

  handleDelete: function(e) {
    var _this = this
    e.preventDefault()
    $.ajax({
      url: "/students/" + _this.props.student.id,
      type: 'DELETE',
      dataType: 'JSON',
      success: function(data) {
        _this.props.handleDeleteStudent(_this.props.student)
      }
    });
  },

  handleUpdate: function(e){
    var _this = this
    e.preventDefault();
    $.ajax({
      url: "/students/" + _this.props.student.id,
      type: 'PUT',
      dataType: 'JSON',
      data: { student: _this.state },
      success: function(data) {
        _this.setState({edit: false})
        _this.props.handleUpdateStudent(_this.props.student, data)
      }
    });    
  },

  handleToggl: function(e){
    e.preventDefault();
    this.setState({edit: !this.state.edit, total_point: this.props.student.total_point, subject_count: this.props.student.subject_count, average: this.props.student.average});
  },

  studentRow: function(){
    RowBody = <tr>
            <td>{this.props.student.name}</td>     
            <td>{this.props.student.surname}</td>
            <td>{this.props.student.age}</td>
            <td>{this.props.student.total_point}</td>
            <td>{this.props.student.subject_count}</td>
            <td>{this.props.student.average}</td>
            <td>
              <button className="button is-info" onClick={this.handleToggl}>
                Edit
              </button>
              <button className="button is-danger" onClick={this.handleDelete} >
                Delete
              </button>
            </td>
          </tr>;
    return RowBody;
  },

  studentForm: function(){
    formBody = <tr>
            <td>
              <p className="control is-expanded has-icons-left">
                <input className="input" style={{width: '200px'}} type="text" name="name" defaultValue={this.props.student.name} onChange={this.handleValueChange} placeholder="Name"  />
                <span className="icon is-small is-left">
                  <i className="fa fa-user"></i>
                </span>
              </p>
            </td>
            <td>
              <p className="control is-expanded has-icons-left">
                <input className="input" style={{width: '200px'}} type="text" name="surname" defaultValue={this.props.student.surname} onChange={this.handleValueChange} placeholder="Surname" />
              </p>
            </td>
            <td>
              <p className="control is-expanded has-icons-left">
                <input className="input" style={{width: '200px'}} type="number" name="age" defaultValue={this.props.student.age} onChange={this.handleValueChange} placeholder="Age" />
              </p>
            </td>
            <td>
              <p className="control is-expanded has-icons-left">
                <input className="input" style={{width: '200px'}} type="number" name="total_point" defaultValue={this.props.student.total_point} onChange={this.handleValueChange} placeholder="Total Point" />
              </p>
            </td>
            <td>
              <p className="control is-expanded has-icons-left">
                <input className="input" style={{width: '200px'}} type="number"  defaultValue={this.props.student.subject_count} name="subject_count" onChange={this.handleValueChange} placeholder="Subject Number" />
              </p>
            </td>
            <td>
               <AverageBox average={this.averageRes()}></AverageBox>
            </td>
            <td>
              <p className="control is-expanded has-icons-left">
                <button className="button is-info" onClick={this.handleToggl}>
                  Cancel
                </button>
                <button className="button is-success" onClick={this.handleUpdate}>
                  update
                </button>
              </p>  
            </td>     
        </tr>;
      return formBody
  },

  render: function() { 
    var body = this.studentRow();

    if(this.state.edit == true){
      body = this.studentForm();
    }
  
    return (
      body 
    ) 
  }
});



