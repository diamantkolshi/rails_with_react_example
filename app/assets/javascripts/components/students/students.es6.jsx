const Students = React.createClass({
	getInitialState: function(){
		return {
      students: this.props.students
		}
	},

  getDefaultProps: function(){
    return {
      students: []
    }
  },

  addStudent: function(student){
    students = this.state.students.slice();
    students.push(student);
    this.setState({students: students})
  },

  deleteStudent: function(student){
    students = this.state.students.slice();
    index = students.indexOf(student)
    students.splice(index, 1)
    this.replaceState({students: students})
  },

  render: function() {
    var _this = this
    return (
      <div>
        <CreateStudent handleNewStudent={this.addStudent} ></CreateStudent>
        <table className="table margin-top-50px">
          <thead>
            <tr>
              <th><abbr title="Position">ID</abbr></th>
              <th><abbr title="Played">Name</abbr></th>
              <th><abbr title="Won">Surname</abbr></th>
              <th><abbr title="Drawn">Age</abbr></th>
              <th><abbr title="Lost">Total point</abbr></th>
              <th><abbr title="Goals for">Subject count</abbr></th>
              <th><abbr title="Goals against">Average</abbr></th>
              <th><abbr title=""></abbr></th>
            </tr>
          </thead>
          <tbody>
            {this.state.students.map(function(student){
              return (
                <StudentItem handleDeleteStudent={_this.deleteStudent} student={student} key={student.id} ></StudentItem>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
});



