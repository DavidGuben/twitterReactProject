import React from 'react';
import ReactDOM from 'react-dom';

// stateful main component
class App extends React.Component {
  constructor(){
    super();
    this.state = {txt: "No tweets yet"}
    this.update = this.update.bind(this)
  }
  // update event
  update(e){
    // this will update the text automatically while you type
    this.setState({txt: e.target.value})
  }
  render(){
    return (
    <div className="container">
      <Header />
      <TweetWidget txt={this.state.txt} update={this.update} />
    </div>
    );
  }
}
// class Counter extends React.Component {
//   constructor(){
//     super();
//     this.state = { val: 0 };
//     this.update = this.update.bind(this);
//   }
//   update(){
//     //this.setState({val: this.state.val +1})
//   }
//   componentWillMount(){
//     //this.setState({m: 1})
//   }
//   render(){
//     console.log('rendering')
//     return <button className="btn btn-primary" onClick={this.update}>{this.state.val * this.state.m}</button>
//   }
//   componentDidMount(){
//     this.inc = setInterval(this.update, 500)
//   }
//   componentWillUnmount(){
//     clearInterval(this.inc)
//   }
// }
// class Wrapper extends React.Component {
//   constructor(){
//     super();
//   }
//   mount(){
//     ReactDOM.render(<App />, document.getElementById('a'))
//   }
//   unmount(){
//     ReactDOM.unmountComponentAtNode(document.getElementById('a'))
//   }
//   render(){
//     return (
//       <div>
//         <button onClick={this.mount.bind(this)}>Mount</button>
//         <button onClick={this.unmount.bind(this)}>Unmount</button>
//         <div id="a"></div>
//       </div>
//     )
//   }
// }
// stateful react button component
class Header extends React.Component {
  render(){
    return (
      <div className="jumbotron">
        <h1>Twitter React ES6</h1>
      </div>
    )
  }
}
// stateless tweet widget that passes props
const TweetWidget = (props) => {
  return (
    <div>
      <h1>{props.txt}</h1>
      <div className="col-lg-6">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Tweet something..." onChange={props.update} />
          <span className="input-group-btn">
          <button className="btn btn-default" type="button">Go!</button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default App
