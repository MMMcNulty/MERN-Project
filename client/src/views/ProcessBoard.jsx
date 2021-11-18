import React from 'react'
import DragDrop from '../components/DragDrop';
import { useHistory } from 'react-router';

const ProcessBoard = () => {

    let history = useHistory();


    return (
        <div>
            <DragDrop />
            <button onClick={(e) =>{history.push('/')}}>Back to dashboard</button>
        </div>
    )
}

export default ProcessBoard;
