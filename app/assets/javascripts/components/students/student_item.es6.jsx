class StudentItem extends React.Component {
	constructor(props){
		super(props)
		this.state = {
		}
	}

  render () {
    return (
      <tr>
        <th>{this.props.student.id}</th>
        <td>{this.props.student.name}</td>
        <td>{this.props.student.surname}</td>
        <td>{this.props.student.age}</td>
        <td>{this.props.student.total_point}</td>
        <td>{this.props.student.subject_count}</td>
        <td>{this.props.student.average}</td>
      </tr>
    )
  }
}



