import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';

const TypeView = () => {
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
            
        </div>
    )
}

export default TypeView
