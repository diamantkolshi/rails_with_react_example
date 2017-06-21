const StudentItem = React.createClass({
  getInitialState: function(){
    return {
      edit: false
    };
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
  handleToggl: function(e){
    e.preventDefault();
    this.setState({edit: !this.state.edit})
  },

  render: function() { 
    var body = <tr>
        <th>{this.props.student.id}</th>
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

    if(this.state.edit == true){
        body = <tr>
            <td>{this.props.student.id}</td>
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
              <p className="control is-expanded has-icons-left">
                <input className="input" style={{width: '200px'}} type="number"  defaultValue={this.props.student.average} name="subject_count" onChange={this.handleValueChange} placeholder="Subject Number" disabled/>
              </p>
            </td>
            <td>
              <p className="control is-expanded has-icons-left">
                <button className="button is-info" onClick={this.handleToggl}>
                  Cancel
                </button>
                <button className="button is-success">
                  update
                </button>
              </p>  
            </td>     
        </tr>;
    }

    return (
      body
    ) 
  }
});



