class Students extends React.Component {
	constructor(props){
		super(props)
		this.state = {
		}
	}

  render () {
    return (
      <table className="table">
        <thead>
          <tr>
            <th><abbr title="Position">ID</abbr></th>
            <th><abbr title="Played">Name</abbr></th>
            <th><abbr title="Won">Surname</abbr></th>
            <th><abbr title="Drawn">Age</abbr></th>
            <th><abbr title="Lost">Total point</abbr></th>
            <th><abbr title="Goals for">Subject count</abbr></th>
            <th><abbr title="Goals against">Average</abbr></th>=
          </tr>
        </thead>
        <tbody>
        {this.props.students.map(function(student){
          return (
            <tr>
              <th>{student.id}</th>
              <td>{student.name}</td>
              <td>{student.surname}</td>
              <td>{student.age}</td>
              <td>{student.total_point}</td>
              <td>{student.subject_count}</td>
              <td>{student.average}</td>
            </tr>)
        })}
        </tbody>
      </table>
    )
  }
}



