import React from 'react'
import LifeChart from '../components/LifeChart'
import { Link } from 'react-router-dom'

const LifeDetail = () => {
    return (
        <div>
            <LifeChart />
            <Link to="/">Return to Dashboard</Link>
        </div>
    )
}

export default LifeDetail
