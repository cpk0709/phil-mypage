import React, { useState, useEffect } from "react";
import styled from "styled-components";

// 전체 게시물의 수
// 페이지당 보여줄 게시물의 수 10
// 페이지 보여 줄 범위 1~10
// 현재 페이지

export default function Paging() {
  // 전체 아이템 수
  const [totalItemCount, setTotalItemCount] = useState(153);
  // 총 페이지 수
  const [totalPageRange, setTotalPageRange] = useState();
  // 현재 페이지 수
  const [currentPage, setCurrentPage] = useState(1);
  // 현제 페이지가 속한 페이지 범위
  // 총 페이지 수 / 페이지 보여줄 범위(10)
  // 나눈 나머지 값이 1이하이면 >> 버튼 필요없음
  // 나눈 나머지 값이 1 이상이면 >> 버튼 보여줌
  // 현재페이지는 어느 범위에 속하는지... 생각해볼 문제
  // 1 -> 1~10 , 2 -> 11~20 , 3 -> 21~30 ...
  const [currentRange, setCurrentRange] = useState();

  const handleChangeCurrentPage = (index) => setCurrentPage(index);

  const handleChangeCurrentPageByBtn = (value) => {
    //PREV 버튼 누른경우
    if (value === "prev") {
      setCurrentPage((prev) => {
        if (prev - 1 === 0) {
          alert("There is no page under 1");
          return prev;
        }
        return prev - 1;
      });
      return;
    }
    // NEXT 버튼 누른경우
    setCurrentPage((prev) => {
      if (prev + 1 > totalPageRange) {
        alert(`There is no page over ${totalPageRange}`);
        return prev;
      }
      return prev + 1;
    });
  };

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
      <div style={{ display: "flex", alignItems: "center" }}>
        <PageRangeButton onClick={() => handleChangeCurrentPageByBtn("prev")}>
          PREV
        </PageRangeButton>
        <div style={{ display: "flex" }}>
          {Array.from({ length: totalPageRange }, (page, index) => (
            <EachPage
              currentPage={currentPage}
              idx={index + 1}
              onClick={() => handleChangeCurrentPage(index + 1)}
            >
              {index + 1}
            </EachPage>
          ))}
        </div>
        <PageRangeButton onClick={() => handleChangeCurrentPageByBtn("next")}>
          NEXT
        </PageRangeButton>
      </div>
    </div>
  );
}

const EachPage = styled.div`
  margin-right: 10px;
  cursor: pointer;
  font-weight: ${(props) =>
    props.currentPage === props.idx ? "bold" : "normal"};
`;

const PageRangeButton = styled.div`
  cursor: pointer;
  padding: 10px;
  border: 1px solid #999;
  margin: 0 10px;
`;
