import React, { useState } from 'react';
import './App.css';

function Square(props) {

    const [value, setValue] = useState({ val: '' })

    const changeValue = () => {

        if (value.val || props.continue)
            return

        if (props.Value === true) {
            setValue({ val: 'X' })
            props.clicked();
            props.ind(props.index);
        }
        else {
            setValue({ val: 'O' })
            props.clicked();
            props.ind(props.index);
        }
    }

    return (
        <div>
            <div className="square" onClick={changeValue} >
                {value.val}
            </div>
        </div>
    );

}

export default Square;
