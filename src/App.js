import React, { useCallback, useEffect } from 'react';
import './public-path';
import {Routes, Link, Route } from 'react-router-dom';
import './App.css';

const Index = function() {
  return (
    <div>子项目首页</div>
  )
}
const List = function() {
  return (
    <div>子项目列表页</div>
  )
}
function App(props) {
  useEffect(() => {

    props.onGlobalStateChange((state, prev) => {
      // state: 变更后的状态; prev 变更前的状态
      console.log(state, prev, 2000000);
    }, true);
  
    // props.setGlobalState({ name: '小锅巴'});
  }, []);
  return (
    <div className="layout">
      <div className="left">
        <Link to="/childindex">子项目首页</Link>
        <Link to="/childindexlist">子项目列表</Link>
      </div>
      <div className="content">
        <Routes>
            <Route path='/childindex' element={<Index />} />
            <Route path='/childindexlist' element={<List />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
