import React, { useLayoutEffect, useState } from 'react'

import { LineChart, Line } from 'recharts';

const ChartComponent = ({data}) => {
    <LineChart width={400} height={400} data={data}>
    <Line type="monotone" dataKey="prices" stroke="#8884d8" />
  </LineChart>
}

const Chart = ({id}) => {

    const [chartData,setChartData] = useState()

    useLayoutEffect(() => {
      const getChartData = async (id) =>{
        try {
            const data = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`    )
            .then(res => res.json())
            .then(json => json)

            let convertedData = data.prices.map(item => {

                return {
                    data:new Date(item[0].toLocalDataString( )),
                    prices:item[1],
                }
            }
            )

            setChartData(convertedData)

        } catch (error) {
            console.log(error);
        }
      }
      getChartData(id)
    }, [id])
  return (
    <div><ChartComponent data={chartData}/></div>
  )
}

export default Chart