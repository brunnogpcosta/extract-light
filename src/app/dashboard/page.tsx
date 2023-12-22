"use client";

import React, { useContext, useEffect, useState } from "react";
import EnergyChart from "../components/energyChart";
import MoneyChart from "../components/moneyChart";
import { getInvoices } from "../services";
import { InvoicesContext } from "../wrapperPage";

interface IInvoice {
  id: string;
  fileName: string;
  clientNumber: string;
  period: string;
  eletricEnergyQty: number;
  eletricEnergyAmount: number;
  eletricEnergyWithoutICMSQty: number;
  eletricEnergyWithoutICMSAmount: number;
  compensedEletricEnergyQty: number;
  compensedEletricEnergyAmount: number;
  publicContribute: number;
}


const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [invoicesFirstChart, setInvoicesFirstChart] = useState<IInvoice[]>([]);
  const [chartProperties, setChartProperties] = useState({
    sumEnergyQty: 0,
    compensedEnergyQty: 0,
    withoutGDAmount: 0,
    withGDAmount: 0,
  });

  const invoices = useContext(InvoicesContext);

  useEffect(() => {
    setIsLoading(true);
    if(invoices) handleInvoices();
  }, [invoices]);

  const handleInvoices = () => {
    const sumObject = invoices.reduce(
      (sum: any, currentObj: any) => {
        sum.eletricEnergyQty += currentObj.eletricEnergyQty;
        sum.eletricEnergyAmount += currentObj.eletricEnergyAmount;

        sum.eletricEnergyWithoutICMSQty +=
          currentObj.eletricEnergyWithoutICMSQty;
        sum.eletricEnergyWithoutICMSAmount +=
          currentObj.eletricEnergyWithoutICMSAmount;

        sum.compensedEletricEnergyQty += currentObj.compensedEletricEnergyQty;
        sum.compensedEletricEnergyAmount +=
          currentObj.compensedEletricEnergyAmount;

        sum.publicContribute += currentObj.publicContribute;

        return sum;
      },
      {
        eletricEnergyQty: 0,
        eletricEnergyAmount: 0,
        eletricEnergyWithoutICMSQty: 0,
        eletricEnergyWithoutICMSAmount: 0,
        compensedEletricEnergyQty: 0,
        compensedEletricEnergyAmount: 0,
        publicContribute: 0,
      },
    );

    const groupedByPeriod = invoices.reduce(
      (accumulator: any, currentValue: any) => {
        const period = currentValue.period;

        //verifyinf if group exist
        if (!accumulator[period]) {
          accumulator[period] = {
            eletricEnergyQty: 0,
            eletricEnergyAmount: 0,
            eletricEnergyWithoutICMSQty: 0,
            eletricEnergyWithoutICMSAmount: 0,
            compensedEletricEnergyQty: 0,
            compensedEletricEnergyAmount: 0,
            publicContribute: 0,
          };
        }

        // sum group values
        accumulator[period].eletricEnergyQty += currentValue.eletricEnergyQty;
        accumulator[period].eletricEnergyAmount +=
          currentValue.eletricEnergyAmount;
        accumulator[period].eletricEnergyWithoutICMSQty +=
          currentValue.eletricEnergyWithoutICMSQty;
        accumulator[period].eletricEnergyWithoutICMSAmount +=
          currentValue.eletricEnergyWithoutICMSAmount;
        accumulator[period].compensedEletricEnergyQty +=
          currentValue.compensedEletricEnergyQty;
        accumulator[period].compensedEletricEnergyAmount +=
          currentValue.compensedEletricEnergyAmount;
        accumulator[period].publicContribute += currentValue.publicContribute;

        return accumulator;
      },
      {},
    );

    // convert and matriz group
    const resultArray = Object.keys(groupedByPeriod).map((period) => ({
      period,
      ...groupedByPeriod[period],
    }));

    setInvoicesFirstChart(resultArray);

    setChartProperties({
      ...chartProperties,
      sumEnergyQty:
        sumObject.eletricEnergyQty + sumObject.eletricEnergyWithoutICMSQty,
      compensedEnergyQty: sumObject.compensedEletricEnergyQty,
      withoutGDAmount:
        sumObject.eletricEnergyAmount * sumObject.eletricEnergyQty +
        sumObject.eletricEnergyWithoutICMSAmount *
          sumObject.eletricEnergyWithoutICMSQty +
        sumObject.publicContribute,
      withGDAmount:
        sumObject.compensedEletricEnergyAmount *
        sumObject.compensedEletricEnergyQty,
    });

    setIsLoading(false);
  };

  const labels = invoicesFirstChart.map((iv) => iv.period);
  const energyChartData = {
    labels,
    datasets: [
      {
        label: "Consumida",
        data: invoicesFirstChart.map(
          (iv) => iv.eletricEnergyQty + iv.eletricEnergyWithoutICMSQty,
        ),
        backgroundColor: "#ff4242",
        borderColor: "red",
        borderWidth: 1,
      },
      {
        label: "Compensada",
        data: invoicesFirstChart.map((iv) => iv.compensedEletricEnergyQty),
        backgroundColor: "#15D47B",
        borderColor: "green",
        borderWidth: 1,
      },
    ],
  };

  const labelsPie = ["Sem Economia de GD", "Com Economia de GD"];
  const moneyChartData = {
    labels: labelsPie,
    datasets: [
      {
        label: "Consumo de Energia",
        data: [chartProperties.withoutGDAmount, chartProperties.withGDAmount],
        backgroundColor: ["#ff4242", "#15D47B"],
        borderColor: ["red", "green"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-full flex justify-between sm:flex-row flex-col">
      <div className="bg-[#1E1E22] w-full sm:mx-8 mb-8 sm:mb-0 rounded-md p-4">
        <h2>Consumo de Energia Elétrica x Energia Compensada</h2>
        <div className="flex justify-center items-center mt-4">
          <EnergyChart data={energyChartData} />
        </div>
      </div>

      <div className="bg-[#1E1E22] w-full rounded-md p-4">
        <h2>Valor Total sem GD x Economia GD</h2>
        <div className="flex justify-center items-center mt-4">
          <MoneyChart data={moneyChartData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
