import React from 'react'
import LifeChart from '../components/LifeChart'
import { Link } from 'react-router-dom'

const LifeDetail = () => {
    return (
        <div>
            <h1>Your Life Insurance Business:</h1>
            <LifeChart />
            <Link to="/">Return to Dashboard</Link> | <Link to="/disabilityInsuranceDetail">Detailed View</Link>
        </div>
    )
}

export default LifeDetail
