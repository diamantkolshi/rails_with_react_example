class Students extends React.Component {
	constructor(props){
		super(props)
		this.state = {
		}
	}

  render () {
    return (
      <div>
        <CreateStudent></CreateStudent>
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
            </tr>
          </thead>
          <tbody>
            {this.props.students.map(function(student){
              return (
                <StudentItem student={student} key={student.id}></StudentItem>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}



