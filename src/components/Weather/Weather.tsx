import React, { FC, useRef } from "react";
import { Button } from "antd-mobile";

interface IProps {
  getSonMsg?: (msg: string) => void;
}
const Weather: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <div>
        <h1>这里显示的是天气</h1>
      </div>
    </>
  );
};

export default Weather;
