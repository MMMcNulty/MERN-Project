import React from 'react'
import { useDrop } from "react-dnd";
import { useState, useEffect } from 'react';
import axios from 'axios';
import DragClient from './DragClient';

function DragDrop() {
    const [board, setBoard] = useState([]);

    const [clientList, setClientList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/clients')
            .then(response => {
                console.log(response.data);
                setClientList(response.data);
            })
            .catch(err => console.error(err));
    }, []);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "client",
        drop: (item) => addClientToBoard(item.id, clientList),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));


    const addClientToBoard = (id) => {
        axios.get('http://localhost:8000/api/clients')
            .then(response => {
                console.log(response.data);
                let filteredList = response.data.filter((client) => id === client._id);
                setBoard((board) => [...board, filteredList[0]]);
            })
            .catch(err => console.error(err));
    };
return (
    <div className="client-container">
        <div className="client-stage">
            <h3>Pre-underwriting</h3>
            <div className="clients">
                {clientList.filter((client) => client.process_stage === "Pre-underwriting").map((client) => {
                    return <DragClient id={client._id} first_name={client.first_name} last_name={client.last_name} />;
                })}
            </div>
        </div>
        <div className="client-stage">
            <h3>Underwriting</h3>
            <div className="clients">
                {clientList.filter((client) => client.process_stage === "Underwriting").map((client) => {
                    return <DragClient id={client._id} first_name={client.first_name} last_name={client.last_name} />;
                })}
            </div>
        </div>
        <div className="client-stage">
            <h3>Approved</h3>
            <div className="clients">
                {clientList.filter((client) => client.process_stage === "Approved").map((client) => {
                    return <DragClient id={client._id} first_name={client.first_name} last_name={client.last_name} />;
                })}
            </div>
        </div>
        <div className="client-stage" ref={drop}>
            <h3>Completed</h3>
            <div className="clients">
                {board.map((client) => {
                    return <DragClient id={client._id} first_name={client.first_name} last_name={client.last_name} />;
                })}
            </div>
        </div>
    </div>
);
}

export default DragDrop;