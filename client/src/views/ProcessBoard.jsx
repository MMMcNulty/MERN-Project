import React from 'react'
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDrop from '../components/DragDrop';

const ProcessBoard = () => {
    return (
        <div>
            <DragDrop />
        </div>
    )
}

export default ProcessBoard
