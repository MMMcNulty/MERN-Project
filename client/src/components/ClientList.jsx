import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';



const ClientList = () => {
    const [clientList, setClientList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/clients')
            .then(response => {
                console.log(response.data)
                setClientList(response.data.sort((a, b) => a.last_name.toLowerCase().localeCompare(b.last_name.toLowerCase())))
            })
            .catch(err => console.error(err));
    }, []);

    

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td><h1>Your Clients: </h1></td>
                    </tr>
                </thead>
                <tbody>
                    {clientList.map((client, index) => {
                        return (
                            <tr key={index}>
                                <td>{client.first_name}</td>
                                <td>{client.last_name}</td>
                                <td>{client.process_stage}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ClientList
