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
    <div style={
      {
        width: 460, 
        height: 460,
        position: 'relative',
        zIndex: 1,
      }
    }>
      <Radar 
        options={options}
        data={data} 
      />
    </div>
  );
};

export default RadarChart;
