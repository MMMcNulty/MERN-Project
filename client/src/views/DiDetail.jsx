import React from 'react'
import { Link } from 'react-router-dom'

import DIChart from '../components/DIChart'

const DiDetail = () => {
    return (
        <div>
            <DIChart />
            <Link to="/">Return to Dashboard</Link>
        </div>
    )
}

export default DiDetail
