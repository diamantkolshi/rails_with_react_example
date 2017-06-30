class Header extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			date: new Date()
		};
	}

	componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillMount() {
  	clearInterval(this.timerID)
  }

	tick() {
    this.setState({
      date: new Date()
    });
  }

	render() {
		return (
			<div>
				<nav className="nav">
				  <div className="nav-left">
				    <a className="nav-item">
				      <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo"/>
				    </a>
				  </div>

				  <div className="nav-center">
				    <a className="nav-item">
				      <span className="icon">
				        <i className="fa fa-github"></i>
				      </span>
				    </a>
				    <a className="nav-item">
				      <span className="icon">
				        <i className="fa fa-twitter"></i>
				      </span>
				    </a>
				  </div>

				  
				  <span className="nav-toggle">
				    <span></span>
				    <span></span>
				    <span></span>
				  </span>

				  <div className="nav-right nav-menu">
				    <a className="nav-item">
				      Home
				    </a>
				    <a className="nav-item">
				      Students
				    </a>
				    <a className="nav-item">
				      Lifts
				    </a>

				    <div className="nav-item">
				      <div className="field is-grouped">
				        <p className="control">
				          <a className="button" >
				            {this.state.date.toLocaleTimeString()}
				          </a>
				        </p>
				        <p className="control">
				          <a className="button is-primary">
				            <span className="icon">
				              <i className="fa fa-download"></i>
				            </span>
				            <span>Download</span>
				          </a>
				        </p>
				      </div>
				    </div>
				  </div>
				</nav>
			</div>
		)
	}
}