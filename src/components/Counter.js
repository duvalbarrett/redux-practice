import classes from './Counter.module.css';
import {useSelector, useDispatch} from 'react-redux'
import {Component} from 'react'
import {counterActions} from '../store/index'

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter)
  const show = useSelector(state => state.showCounter)
  
  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }
  
  
  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }
  
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };
  
}

const increaseHandler = () => {
dispatch(counterActions.increase(10))
}


return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
);
}

export default Counter;

//   class Counter extends Component {

//     incrementHandler(){
//       this.props.increment()
//     }

//     decrementHandler(){
//       this.props.decrement()
//     }

//     toggleCounterHandler(){}

//     retnder() {
//       return (
//         <main className={classes.counter}>
//           <h1>Redux Counter</h1>
//           <div className={classes.value}>{this.props.counter}</div>
//           <button onClick={this.incrementHandler.bind}>Increment</button>
//           <button onClick={this.decrementHandler.bind}>Decrement</button>
//           <button onClick={this.toggleCounterHandler.bind}>Toggle Counter</button>
//         </main>
//       );
//       };
//     }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter
//   }
// }

// const mapDispatchToProps = dispatch =>{
//   return{
//     increment: () => dispatch({type: 'increment',}),
//     decrement: () => dispatch({type: 'decrement',})
//   }
// }


// export default connect(mapStateToProps,mapDispatchToProps)(Counter);
