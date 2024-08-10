import Countdown from "react-countdown";

// Custom renderer to format the output
const renderer = ({ days, hours, minutes, seconds }) => {
  const timerStyle = { gridTemplateColumns: "repeat(4, 80px)" };

  return (
    <div>
      <div className="grid font-mont text-sm font-medium" style={timerStyle}>
        <header>Days</header>
        <header>Hours</header>
        <header>Mins</header>
        <header>Seconds</header>
      </div>
      <div className="grid font-inter text-xl font-bold" style={timerStyle}>
        <span>
          {days < 10 && 0}
          {days} <span className="pl-7">:</span>
        </span>
        <span>
          {hours} <span className="pl-7">:</span>
        </span>
        <span>
          {minutes < 10 && 0}
          {minutes}
          <span className="pl-7">:</span>
        </span>
        <span>
          {seconds < 10 && 0}
          {seconds}
        </span>
      </div>
     
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => (
  <Countdown date={targetDate} renderer={renderer} />
);

export default CountdownTimer;
