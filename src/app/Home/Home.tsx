import React from "react";
import { Grid } from "antd-mobile";
import Weather from "../../components/Weather/Weather";
import Calendar from "../../components/Calendar/Calendar";

export default function Home() {
  function getSonMsg(msg: string) {
    alert(msg);
  }
  return (
    <>
      <Weather></Weather>
      <Calendar></Calendar>
    </>
  );
}
