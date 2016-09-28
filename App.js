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
    <div className="container">
      <SearchWidget txt={this.state.txt} update={this.update} />
      <Button></Button>
    </div>
    );
  }
}

class Button extends React.Component {
  render(){
    return <a className="btn btn-primary btn-sm" href="#" role="button"><span className="glyphicon glyphicon-ok-sign" aria-hidden="true">{this.props.children}</span></a>
  }
}

const SearchWidget = (props) => {
  return (
    <div>
      <div className="jumbotron">
        <h1>Twitter Alt</h1>
      </div>
      <h1>{props.txt}</h1>
      <input type="text"
      onChange={props.update} />
    </div>
  );
}

export default App
