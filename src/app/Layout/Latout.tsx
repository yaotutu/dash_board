import Calendar from "../../components/Calendar/Calendar";
import Weather from "../../components/Weather/Weather";
import "./Layout.scss";

export default function Latout() {
  return (
    <div className="layoutWrap">
      <div className="left">
        <Weather></Weather>
      </div>
      <div className="right">
        <Calendar></Calendar>
      </div>
    </div>
  );
}
