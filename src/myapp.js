import React from 'react'
import dva, { connect } from 'dva'
import { Router, Route } from 'react-router'
import { put, call, fork } from 'dva/effects'
import { delay } from 'redux-saga-ie8'

// 0.init
const app = dva();

// 1.model
app.model({
  namespace:'count',
  state:0,
  effects: {
    ['add2']:(_ = function*(){
        yield call(delay, 1000);
        yield put({type:'add'});
    }),
    ['minus2']:(_ = function*(){  // IE8下generator必须赋给一个变量方生效
        yield call(delay, 1000);
        yield put({type:'minus'});
    })
  },
  reducers: {
    ['add'  ](count) { return count + 1 },
    ['minus'](count) { return count - 1 },
  },
});

// 2.view
const App = connect(({count})=>({count}))(function(props){
  return (
    <div>
      <h2>{ props.count }</h2>
      <button key="add" onClick={()=>{props.dispatch({type:'add2'})}}>+</button>
      <button key="minus" onClick={()=>{props.dispatch({type:'minus2'})}}>-</button>
    </div>
  );
});

// 3.router
app.router(({history})=>
   <Router history={history}>
      <Route path="/" component={App} />
   </Router>
);

// 4.start
app.start(document.getElementById('app'));
