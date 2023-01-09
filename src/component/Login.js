import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [id, setId] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();
    const login = () => {
        axios.post('/api/login', {id:id, password:password})
        .then((res) => {
            navigate('/Board');
        });
    }
    const signUp = () => {navigate('/SignUp');}
    
    return (
        <div>
            아이디 : <input type="text" onChange={(e)=>{setId(e.target.value)}}/><br /><br />
            비밀번호 : <input type="text" onChange={(e)=>{setPassword(e.target.value)}}/><br /><br />
            <button onClick={login}>로그인</button>
            <button onClick={signUp}>회원가입</button>
        </div>
    );
};

export default Login;