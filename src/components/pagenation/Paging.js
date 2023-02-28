import React, { useState, useEffect } from "react";

// 전체 게시물의 수
// 페이지당 보여줄 게시물의 수 10
// 전체 페이지를 보여 줄 범위 1~10
// 현재 페이지

export default function Paging() {
  // 전체 아이템 수
  const [totalItemCount, setTotalItemCount] = useState(153);
  // 총 페이지 수
  const [totalPageRange, setTotalPageRange] = useState();
  // 현제 페이지가 속한 페이지 범위

  // 현재 페이지 수

  useEffect(() => {
    if (totalItemCount % 10 === 0) {
      setTotalPageRange(totalItemCount / 10);
    } else {
      setTotalPageRange(Math.floor(totalItemCount / 10) + 1);
    }
  }, [totalItemCount]);

  return (
    <div>
      <h3>Paging</h3>
      <div style={{ display: "flex" }}>
        {Array.from({ length: totalPageRange }, (page, index) => (
          <div style={{ marginRight: "5px" }}>{index + 1}</div>
        ))}
      </div>
    </div>
  );
}
