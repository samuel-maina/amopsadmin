import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
var teamOneChart = null;
export const BarChart= ({data,labels}) => {
     var data=data;
     var label=labels;
          var data=data;
     let program = [];
let count = [];

try {
  data.map((item) => {
    count.push(item.course_enrollments);
    program.push(item.year);
  });
} catch (error) {
  
}
    useEffect (() => {
        const t1ChartEl = document.getElementById("canvas2");
        if (teamOneChart) {
            teamOneChart.destroy();
        }
        teamOneChart = new Chart(t1ChartEl, {
            type: 'line',
            data: {
                labels: [...program],
                datasets: [{
                        label: [label],
                        fill: true,
      pointRadius: 10,
                        data: [...count],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.3)',
                            'rgba(54, 162, 235, 0.3)', 'green','crimson','yellow','violet','brown'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                        ],
                        borderWidth: 0
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                }
            }
        });

    })



    return (
            <div class="w-100 h-40">
            
                <canvas id="canvas2" class="graph  input-variant-x">d</canvas>
            </div>
            );
}

;

export default BarChart;