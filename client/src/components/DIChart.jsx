import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Pie, defaults } from 'react-chartjs-2';

const DIChart = () => {
    const [clientList, setClientList] = useState([]);
    const [foundLabel, setFoundLabel] = useState("");
    const [labelValues, setLabelValues] = useState([]);
    const [disabilityChartData, setDisabilityChartData] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8000/api/clients')
            .then(response => {
                console.log(response.data)
                setClientList(response.data)

                const disabilityPre_underwritingCount = response.data.filter(item => item.insurance_type === 'Disability Insurance' && item.process_stage=== 'Pre-underwriting').length;
                const disabilityUnderwritingCount = response.data.filter(item => item.insurance_type === 'Disability Insurance' && item.process_stage=== 'Underwriting').length;
                const disabilityApprovedCount = response.data.filter(item => item.insurance_type === 'Disability Insurance' && item.process_stage=== 'Approved').length;
                let diTempArr=[]
                diTempArr.push(disabilityPre_underwritingCount, disabilityUnderwritingCount, disabilityApprovedCount)
                setDisabilityChartData(diTempArr);

            })
            .catch(err => console.error(err));
    }, []);


    return (
        <div className="chart">
            <Pie getElementAtEvent={(data) => {
                if (data.length >= 1) {
                    setFoundLabel(labelValues[data[0].index])
                }
                console.log(foundLabel)
            }}
                data={{
                    labels: ["Pre-Underwriting","Underwriting", "Approved"],
                    datasets: [{
                        label: '# of Clients',
                        data: disabilityChartData,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                }}
                options={
                    {
                        maintainAspectRatio: false,
                        legend: {
                            labels: {
                                fontSize: 400
                            }
                        }
                    }}
            />
        </div>
    )
}

export default DIChart
