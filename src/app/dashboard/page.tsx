"use client"

import  React from "react"
import EnergyChart from "../components/energyChart";
import MoneyChart from "../components/moneyChart";


const Dashboard = () =>{
    const labels = ["JAN", "FEV", "MAR", "ABRIL", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];
    const energyChartData= {
        labels,
        datasets: [
            {
                label: "Consumida",
                data: labels.map((() => Math.floor(Math.random() * 100))),
                backgroundColor: "#ff4242",
                borderColor: "red",
                borderWidth: 1
            },
            {
                label: "Compensada",
                data: labels.map((() => Math.floor(Math.random() * 100))),
                backgroundColor: "#15D47B",
                borderColor: "green",
                borderWidth: 1
            },
        ],
    };

    const labelsPie = ['Sem GD', 'Com GD'];
    const moneyChartData = {
      labels: labelsPie,
      datasets: [
        {
          label: 'Consumo de Energia',
          data: [20, 10],
          backgroundColor: ['#ff4242', '#15D47B'],
          borderColor: ['red', 'green'],
          borderWidth: 1,
        },
      ],
    };
    

    return(
        <div className="w-full flex justify-between sm:flex-row flex-col">
            <div className="bg-[#1E1E22] w-full sm:mx-8 mb-8 sm:mb-0 rounded-md p-4">
                <h2>Consumo de Energia Elétrica x Energia Compensada</h2>
                <div className="flex justify-center items-center mt-4">
                  <EnergyChart data={energyChartData}/>
                </div>
            </div>

            <div className="bg-[#1E1E22] w-full rounded-md p-4">
                <h2>Valor Total sem GD x Economia GD</h2>
                <div className="flex justify-center items-center mt-4">
                    <MoneyChart data={moneyChartData}/>
                </div>
            </div>
        </div>
    )
}


export default Dashboard;