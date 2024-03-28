import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import type { ChartData, ChartOptions } from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface RadarProps {
  options: ChartOptions<'radar'>;
  data: ChartData<'radar'>;
}

const RadarChart: React.FC<RadarProps> = (props) => {
  const {options, data} = props;

  return (
    <div className="
      relative w-[350px] h-[350px] z-[1]
      sm:w-[460px] sm:h-[460px]
      1xl:w-[350px] 1xl:h-[350px]
      3xl:w-[460px] 3xl:h-[460px]
    "
    >
      <Radar 
        options={options}
        data={data} 
      />
    </div>
  );
};

export default RadarChart;
