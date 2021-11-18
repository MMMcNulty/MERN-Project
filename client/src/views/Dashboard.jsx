import React from 'react'
import { Link } from 'react-router-dom'

import Chart from '../components/Chart'

const Dashboard = () => {
    return (
        <div>
            <h1>Testing this is my dashboard page🦄</h1>
            <Chart />
            <Link to="/disabilityInsurance">Disability Insurance Clients</Link> | <Link to="/lifeInsurance">Life Insurance Clients</Link>
            
            
        </div>
    )
}

export default Dashboard
