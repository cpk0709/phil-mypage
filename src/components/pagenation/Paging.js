import React, { useState, useEffect } from "react";
import styled from "styled-components";

// 전체 게시물의 수
// 페이지당 보여줄 게시물의 수 10
// 총 페이지 수
// 현재 페이지
// 페이지 보여 줄 범위 1~10

const PAGE_RANGE = 10;

export default function Paging() {
  // 전체 아이템 수
  const [totalItemCount, setTotalItemCount] = useState(153);
  // 총 페이지 수
  const [totalPage, setTotalPage] = useState([]);
  // 현재 페이지 수
  const [currentPage, setCurrentPage] = useState(1);
  // 현제 페이지가 속한 페이지 범위
  // 총 페이지 수 / 페이지 보여줄 범위(10)
  // 나눈 나머지 값이 1이하이면 >> 버튼 필요없음
  // 나눈 나머지 값이 1 이상이면 >> 버튼 보여줌
  // 1 -> 1~10 , 2 -> 11~20 , 3 -> 21~30 ...
  const [totalPageRange, setTotalPageRange] = useState();
  const [currentPageRange, setCurrentPageRange] = useState([]);

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
      if (prev + 1 > totalPage[totalPage?.length - 1]) {
        alert(`There is no page over ${totalPage[totalPage?.length - 1]}`);
        return prev;
      }
      return prev + 1;
    });
  };

  const handleChangeCurrentPageRange = (value) => {
    // PREV_RANGE 버튼 누른경우
    // NEXT_RANGE 버튼 누른경우
  };

  // 전체 페이지 수 set
  useEffect(() => {
    if (totalItemCount % PAGE_RANGE === 0) {
      setTotalPage(
        Array.from(
          { length: totalItemCount / PAGE_RANGE },
          (value, index) => index + 1
        )
      );
      setCurrentPageRange(
        Array.from(
          { length: totalItemCount / PAGE_RANGE },
          (value, index) => index + 1
        ).slice(0, PAGE_RANGE)
      );
    } else {
      setTotalPage(
        Array.from(
          { length: Math.floor(totalItemCount / PAGE_RANGE) + 1 },
          (value, index) => index + 1
        )
      );
      setCurrentPageRange(
        Array.from(
          { length: Math.floor(totalItemCount / PAGE_RANGE) + 1 },
          (value, index) => index + 1
        ).slice(
          0,
          Array.from(
            { length: Math.floor(totalItemCount / PAGE_RANGE) + 1 },
            (value, index) => index + 1
          ).length > 10
            ? PAGE_RANGE
            : Array.from(
                { length: Math.floor(totalItemCount / PAGE_RANGE) + 1 },
                (value, index) => index + 1
              ).length
        )
      );
    }
  }, [totalItemCount]);
  // 전체 페이지 범위 set
  useEffect(() => {
    if (!totalPage?.length === 0) return;
    if (totalPage % PAGE_RANGE === 0) {
      setTotalPageRange(totalPage?.length / PAGE_RANGE);
      // setCurrentPageRange(totalPage?.slice(0, PAGE_RANGE));
    } else {
      setTotalPageRange(Math.floor(totalPage?.length / PAGE_RANGE) + 1);
      // setCurrentPageRange(totalPage?.slice(0, totalPage));
    }
  }, [totalPage]);

  useEffect(() => {
    if (
      currentPage % PAGE_RANGE === 1 &&
      currentPage !== 1 &&
      totalPage.indexOf(currentPage + 1) !== -1
    ) {
      setCurrentPageRange(totalPage?.slice(currentPage - 1, currentPage + 10));
    }
    if (currentPage % PAGE_RANGE === 0) {
      setCurrentPageRange(totalPage?.slice(currentPage - 10, currentPage));
    }
  }, [currentPage]);

  return (
    <div>
      <h3>Paging</h3>
      <div style={{ display: "flex", alignItems: "center" }}>
        <PageRangeButton onClick={() => handleChangeCurrentPageRange("prev")}>
          PREV_RANGE
        </PageRangeButton>
        <PageRangeButton onClick={() => handleChangeCurrentPageByBtn("prev")}>
          PREV
        </PageRangeButton>
        <div style={{ display: "flex" }}>
          {/* 전체 페이지에서 현재페이지범위에 속한 부분만 보여줌 */}
          {/* {Array.from({ length: totalPage }, (page, index) => (
            <EachPage
              key={index}
              currentPage={currentPage}
              idx={index + 1}
              onClick={() => handleChangeCurrentPage(index + 1)}
            >
              {index + 1}
            </EachPage>
          ))} */}
          {currentPageRange?.map((page, index) => {
            return (
              <EachPage
                key={page}
                currentPage={currentPage}
                idx={page}
                onClick={() => handleChangeCurrentPage(page)}
              >
                {page}
              </EachPage>
            );
          })}
        </div>
        <PageRangeButton onClick={() => handleChangeCurrentPageByBtn("next")}>
          NEXT
        </PageRangeButton>
        <PageRangeButton onClick={() => handleChangeCurrentPageRange("next")}>
          NEXT_RANGE
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
