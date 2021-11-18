import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';



import { Pie } from 'react-chartjs-2';



const Chart = (props) => {
    const [labelValues, setLabelValues] = useState([]);
    const [chartData, setChartData] = useState([]);
    const history = useHistory();


    useEffect(() => {
        axios.get('http://localhost:8000/api/clients')
            .then(response => {
                console.log(response.data)
                const disabilityCount = response.data.filter(item => item.insurance_type === 'Disability Insurance').length;
                const lifeCount = response.data.filter(item => item.insurance_type === 'Life Insurance').length;
                let tempArr=[];
                tempArr.push(disabilityCount);
                tempArr.push(lifeCount);
                setChartData(tempArr);
            })
            .catch(err => console.error(err));
        axios.get('http://localhost:8000/api/insuranceTypes')
            .then(response => {
                console.log(response.data)
                setLabelValues(response.data)
            })
            .catch(err => console.error(err));
    }, []);

        const clickRoute = (data) => {
            if (data.length >= 1) {
                let routeVar = (labelValues[data[0].index]).replace(" ","");
                console.log(routeVar)
                history.push(`/${routeVar}`)
            }
        }


    return (
        <div className="chart">
            <Pie getElementAtEvent={(data) => clickRoute(data)}
                data={{
                    labels: labelValues,
                    datasets: [{
                        label: '# of Clients',
                        data: chartData,
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


export default Chart;
