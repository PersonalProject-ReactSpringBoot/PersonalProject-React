import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Board from './component/Board';
import SignUp from './component/SignUp';

const App = () => {
    return (
      <div>
        <h1>게시판</h1>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/SignUp' element={<SignUp />} />
          <Route exact path='/Board' element={<Board />} />
        </Routes>
      </div>
    );
}

export default App;