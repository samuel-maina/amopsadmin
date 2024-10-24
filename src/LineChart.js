import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
var teamOneChart = null;
export const LineChart= ({data,labels}) => {
     var data=data;
     var label=labels;
          var data=data;
     let program = [];
let count = [];

try {
  data.map((item) => {
    count.push(item.count);
    program.push(item.program);
  });
} catch (error) {
  console.log(error);
}
    useEffect (() => {
        const t1ChartEl = document.getElementById("teamOneCanvas");
        if (teamOneChart) {
            teamOneChart.destroy();
        }
        teamOneChart = new Chart(t1ChartEl, {
            
            
            data: {
                labels: [...program],
                datasets: [{
                        label: [label],
                        type:'radar',
                        data: [...count],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.3)',
                            'rgba(54, 162, 235, 0.3)', 'green','crimson','yellow','violet','brown'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                        ],
                       
                        barPercentage:0.1
                    },
                    {
                        label: [label],
                        type:"line",
                        data: [...count],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.3)',
                            'rgba(54, 162, 235, 0.3)', 'green','crimson','yellow','violet','brown'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                        ],
                        borderWidth: 1,
                        barPercentage:0
                    }
                ]
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
            <div class="w-10s0 h-4s0">
            
                <canvas id="teamOneCanvas" class="graph hidden"></canvas>
            </div>
            );
}

;

export default LineChart;