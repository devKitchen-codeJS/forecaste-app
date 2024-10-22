import { LineChart, Line, XAxis, ResponsiveContainer, Dot } from "recharts";
import { WiDaySunny, WiCloudy, WiRain } from "react-icons/wi";

const data = [
  { time: "Now", temp: 26, icon: <WiDaySunny size={30}/> },
  { time: "22:00", temp: 26, icon: <WiCloudy size={30}/> },
  { time: "00:00", temp: 22, icon: <WiRain size={30}/> },
  { time: "02:00", temp: 16, icon: <WiRain size={30}/> },
  { time: "04:00", temp: 20, icon: <WiCloudy size={30}/> },
  { time: "06:00", temp: 22, icon: <WiDaySunny size={30}/> },
  { time: "08:00", temp: 16, icon: <WiRain size={30}/> },
];


const CustomTooltipIcon = ({ x, y, payload }: any) => {
    if (x && y && payload)
      return ( 
        <foreignObject x={x - 25} y={y + 20} width='50' height='50'>
          <div style={{ textAlign: "center", color:'white'}}>
            {payload.icon}
          </div>
        </foreignObject>
      );
  };
const CustomTooltipAlways = ({ x, y, payload }: any) => {
  if (x && y && payload)
    return (
      <foreignObject x={x - 25} y={y + 20} width='50' height='50'>
        <div style={{ textAlign: "center", color:'white'}}>
          {/* {payload.icon} */}
          <p>{`${payload.temp}°C`}</p>
        </div>
      </foreignObject>
    );
};

export const MyChart = () => (
  <ResponsiveContainer width='100%' height={150}>
    <LineChart data={data}>
    <XAxis  dataKey="time" padding={{ left: 30, right: 30 }} />
    <Line
        type='monotone'
        dataKey='temp'
        stroke='#FFC355'
        
        dot={(props) => {
          const { cx, cy, index } = props;
          const payload = data[index];
          return (
            <>
              {/* Отрисовываем кастомный тултип */}
              <CustomTooltipIcon x={cx} y={cy + -50} payload={payload} />
              <CustomTooltipAlways x={cx} y={cy} payload={payload} />
              {/* Отрисовываем стандартную точку */}
              <Dot {...props} r={5} fill='white' />
            </>
          );
        }}
      />
    </LineChart>
  </ResponsiveContainer>
);


