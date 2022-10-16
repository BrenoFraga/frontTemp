import FindrMenu from "../components/findr-menu";
import "../styles/findr-dashboard.css"
import api from "../api";
import { Card } from 'primereact/card';
import { Chart } from 'primereact/chart';
import React, { useState } from 'react';
import { ProgressBar } from 'primereact/progressbar';
import { CircularProgressbar } from 'react-circular-progressbar';
import  'react-circular-progressbar/dist/styles.css' ;


function Dashboard(){

    const [chartData] = useState({
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }]
    });

    let basicOptions = {
        maintainAspectRatio: false,
        aspectRatio: .6,
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            },
            y: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            }
        }
    };

    const [lineStylesData] = useState({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Third Dataset',
                data: [12, 51, 62, 33, 21, 62, 45],
                fill: true,
                borderColor: '#4B1ECB',
                tension: .4,
                backgroundColor: '#4c1ecb44'
            }
        ]
    });

    const [lightOptions] = useState({
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        }
    });
    

    return (
        <div class="container-dashboard">
             <FindrMenu />
             <div class="grafics-analytics">
                <div class="card-info">
                    <div class="first-card-match">
                        <span class="title-card">Matchs</span>
                        <span class="info-card">25,00</span>
                        <CircularProgressbar value={50} text={`${50}%`} />
                    </div>
                    <div class="second-card-users">
                        <span class="title-card">Usuários</span>
                        <div class="infos-atual-meta">
                            <div class="info-data-atual">
                                <span>25</span>
                                <p>Atual</p>
                            </div>
                            <div class="split">|</div>
                            <div class="info-data-meta">
                                <span>50</span>
                                <p>Meta</p>
                            </div>   
                        </div>
                        <ProgressBar value={50} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px'  }}/>
                    </div>
                    <div class="third-card-projects">
                        <span class="title-card">Projetos</span>
                        <span class="info-card">78</span>
                        <CircularProgressbar value={50} text={`${50}%`} />
                    </div>
                    <div class="fourth-card-likes">
                        <span class="title-card">Likes</span>
                        <span class="info-card">67</span>
                        <CircularProgressbar value={50} text={`${50}%`} />
                    </div>
                </div>
                <div class="grafics">
                    <div class="info-grafics">
                        <div class="title-grafics-doughnut-chart">
                            <span>Linguagens</span>
                            <div class="grafics-doughnut-chart">
                                <div class="doughnut-contratante">
                                    <Chart type="doughnut" data={chartData} options={lightOptions} style={{ position: 'relative', width: '40%' }} />
                                    <p>Contratante</p>
                                </div>

                                <div class="doughnut-freelancer">
                                    <Chart type="doughnut" data={chartData} options={lightOptions} style={{ position: 'relative', width: '40%' }} />
                                    <p>Freelancer</p>
                                </div>
                            </div>
                        </div>
                        <div class="grafics-line-chart">
                            <Chart type="line" data={lineStylesData} options={basicOptions} style={{ height: '290px', width: '95%'}}/>
                        </div>
                    </div>
                    <div class="list-required-area">
                        <p>Áreas mais requisitadas:</p>
                        <div class="top-required-area">
                            <span>1. Ux</span>
                        </div>
                    </div>

                </div>
             </div>


        </div>
    );

}


export default Dashboard;