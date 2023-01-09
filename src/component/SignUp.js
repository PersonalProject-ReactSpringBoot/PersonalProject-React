import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [id, setId] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    const [age, setAge] = useState();

    const navigate = useNavigate();
    const signUp = () => {
        axios.post('/api/signUp', {id:id, password:password, name:name, age:age})
        .then((res) => {
            navigate('/Board');
        });
    }
    return (
        <div>
            <h1>회원가입</h1>
            아이디 : <input type="text" onChange={(e)=>{setId(e.target.value)}}/><br /><br />
            비밀번호 : <input type="text" onChange={(e)=>{setPassword(e.target.value)}}/><br /><br />
            이름 : <input type="text" onChange={(e)=>{setName(e.target.value)}}/><br /><br />
            나이 : <input type="text" onChange={(e)=>{setAge(e.target.value)}}/><br /><br />
            <button onClick={signUp}>회원가입완료</button>
        </div>
    );
};

export default SignUp;