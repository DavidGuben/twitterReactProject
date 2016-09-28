import React from 'react';

// stateful function: can have state!
class App extends React.Component {
  constructor(){
    super();
    this.state = {txt: "Your tweets"}
    this.update = this.update.bind(this)
  }
  update(e){
    this.setState({txt: e.target.value})
  }
  render(){
    return (
    <div>
      <SearchWidget txt={this.state.txt} update={this.update} />
    </div>
    );
  }
}

const SearchWidget = (props) => {
  return (
    <div className="container">
        <div className="jumbotron">
          <h1>Twitter Alt</h1>
        </div>
        <div className="row">
        <div className="col-md-6">
          <h1>{props.txt}</h1>
        </div>
        <div className="col-md-6">
          <input type="text"
          onChange={props.update} />
          <a className="btn btn-primary btn-sm" href="#" role="button"><span className="glyphicon glyphicon-ok-sign" aria-hidden="true"></span></a>
        </div>
      </div>
    </div>
  );
}

export default App
