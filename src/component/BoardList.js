import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BoardList = () => {
    const [comment, setComment] = useState();

    const navigate = useNavigate();
    const BoardList = () => {
        axios.post('/api/boardList', {comment:comment})
        .then((res) => {
            navigate('/BoardList');
        });
    }
    return (
        <div>
            방명록 : <input type="text" onChange={(e)=>{setComment(e.target.value)}}/><br /><br />
            <button onClick={BoardList}>작성완료</button>
        </div>
    );
};

export default BoardList;