const Students = React.createClass({
	getInitialState: function(){
		return {
      students: this.props.students,
      errors: ""
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

  updateStudent: function(student, data){
    index = this.state.students.indexOf(student)
    students = this.state.students
    students[index] = data
    this.replaceState({students: students})
  },

  searchStudent: function(students) {
    this.replaceState({students: students})
  },

  flashError: function(errors) {
    this.setState({errors: errors})
  },

  render: function() {
    var _this = this;
    return (
      <div>
        <FlashBox errors={this.state.errors} handleFlashError={this.flashError}></FlashBox>
        <CreateStudent handleFlashError={this.flashError} handleNewStudent={this.addStudent} ></CreateStudent><br/>
        <SearchStudent handleSearchStudents={this.searchStudent}></SearchStudent>
        <table className="table margin-top-50px">
          <thead>
            <tr>
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
                <StudentItem handleDeleteStudent={_this.deleteStudent} handleUpdateStudent={_this.updateStudent} student={student} key={student.id} ></StudentItem>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
});