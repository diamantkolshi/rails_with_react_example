class SearchStudent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  } 

  handleSearch(e, keyword) {
    var _this = this
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
            <input className="input" id="search-field" name="kayword" type="text" placeholder="Search student"/>
          </p>
          <p className="control">
            <a className="button is-info" onClick={e => this.handleSearch(e, $('#search-field')[0].value)}>
              Search
            </a>
          </p>
        </div>
      </form>
    )
  }
}



