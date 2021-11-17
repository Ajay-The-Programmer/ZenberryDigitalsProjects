import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { anotherName } from './actions/action-creator'

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <h1>My name is {props.myname}</h1>
      <button onClick={() => { props.changeName() }}>ChangeName</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myname: state.name,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeName: () => {
      dispatch(anotherName());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
