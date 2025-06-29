import React from 'react';
import { ResponsiveContainer } from 'recharts';

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const Chart = ({ AppointmentList }) => {
  
  const singleData = AppointmentList; 

  return (
    <div className=' "w-full h-[500px] flex justify-center mt-10 mb-20'>
      <ResponsiveContainer width="90%" height="100%"> 
      <BarChart
        width={500}
        height={300}
        data={singleData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="fees" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
          <Cell fill={colors[0]} />
        </Bar>
      </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
