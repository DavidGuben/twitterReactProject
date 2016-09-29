import React from 'react';
import ReactDOM from 'react-dom';

// stateful main component
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      txt: '',
      data: [
        {id: 1, name: "David Guben"},
        {id: 2, name: "David Frugen"},
        {id: 3, name: "David Googen"},
        {id: 4, name: "David Gubert"},
        {id: 5, name: "David Guren"},
        {id: 6, name: "David Greel"},
        {id: 7, name: "David Gubenstein"},
      ]
    }
    this.update = this.update.bind(this)
  }
  update(e){
    // this will update the text automatically while you type
    this.setState({txt: e.target.value})
  }
  render(){
    let rows = this.state.data.map ( person => {
      return <PersonRow key={person.id} data={person} />
    })
    return (
     <div className="container">
      <Header />
      <TweetWidget txt={this.state.txt} update={this.update} />
      <h3>Online Users</h3>
      <hr />
      <table>
        <tbody>{rows}</tbody>
      </table>
     </div>
    );
  }
}
// people data
const PersonRow = (props) => {
  return (
    <tr>
      <td>{props.data.id}</td>
      <td>{props.data.name}</td>
    </tr>
  )
}
// Header
const Header = () => {
    return (
      <div className="jumbotron">
        <h1>Twitter React ES6</h1>
      </div>
    )
}
// simple stateless component for the glyph icon
const SearchGlyph = () => <span className="glyphicon glyphicon-ok"></span>
// stateless tweet widget that passes props
const TweetWidget = (props) => {
  return (
    <div>
      <h1>{props.txt}</h1>
      <div className="col-lg-6">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Tweet something..." onChange={props.update} />
          <span className="input-group-btn">
          <button className="btn btn-primary" type="button"><SearchGlyph /></button>
          </span>
        </div>
      </div>
    </div>
  );
}
// TEST COMPONENTS
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
// class Slider extends React.Component {
//   render(){
//     return (
//       <div>
//         <input ref="inp" type="range"
//         min="0"
//         max="255"
//         onChange={this.props.update} />
//       </div>
//     );
//   }
// }
export default App
