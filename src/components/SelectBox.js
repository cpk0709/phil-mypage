import React from "react";

export default ({ dataArray, setResume }) => {
  return (
    <select onChange={(e) => setResume(e.currentTarget.value)}>
      {dataArray?.map((item, index) => (
        <option key={`resume-${item?.id}`} value={item?.title}>
          {item?.title}
        </option>
      ))}
    </select>
  );
};
