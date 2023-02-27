import React, { useState, useEffect, useRef } from "react";
import dayjs from "dayjs";

export default function Today() {
  const [now, setNow] = useState(
    dayjs(new Date()).format("YYYY/MM/DD HH:mm:ss")
  );
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setNow(dayjs(new Date()).format("YYYY/MM/DD HH:mm:ss"));
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return <div>{now}</div>;
}
