import React, { useState } from 'react';
import Papa from 'papaparse';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function SalesDataUploader() {
    const [chartData, setChartData] = useState();

    const handleFileUpload = event => {
        const file = event.target.files[0];
        Papa.parse(file, {
            complete: updateChartData,
            header: true,
            dynamicTyping: true
        });
    };

    const updateChartData = (result) => {
        const data = result.data;
        if (data && data.length > 0) {
            const labels = data.map(item => item.Month);
            const salesData = data.map(item => item.Sales);

            setChartData({
                labels: labels,
                datasets: [{
                    label: 'Monthly Sales',
                    data: salesData,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                }]
            });
        }
    };

    return (
        <div>
            <input type="file" accept=".csv" onChange={handleFileUpload} />
            {chartData && <Bar data={chartData} />}
        </div>
    );
}

export default SalesDataUploader;
