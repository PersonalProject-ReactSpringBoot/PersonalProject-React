import axios from 'axios';
import React, { useState } from 'react';

const Board = () => {
    const [id, setId] = useState();
    const [password, setPassword] = useState();
    
    const f1 = () => {
        axios.post('/Board', {id:id, password:password})
        .then((res) => {
            console.log(res.data);
        });

    }
    return (
        <div>
            <h1>Board</h1>

        </div>
    );
};

export default Board;