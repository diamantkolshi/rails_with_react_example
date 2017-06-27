class SearchStudent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  } 

  handleSearch(e) {
    var _this = this
    var keyword = e.target.value
    e.preventDefault(); 
    $.ajax({
      url: "/students/search",
      type: 'GET',
      data: { keyword: keyword },
      success: function(data) {
        _this.props.handleSearchStudents(data)
      }
    });
  }

  render() {
    return (
      <form>
      	<div className="field has-addons search-field">
          <p className="control">
            <input className="input" id="search-field" name="kayword" type="text" placeholder="Search student" onChange={e => this.handleSearch(e)}/>
          </p>
        </div>
      </form>
    )
  }
}



