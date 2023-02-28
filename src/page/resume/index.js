import React, { useReducer, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import SelectBox from "../../components/SelectBox";
import InputLabelSet from "../../components/input/InputLabelSet";
import ButtonLikeInput from "../../components/button/ButtonLikeInput";
import SkillSelectModal from "../../components/Modal/SkillSelectModal";
import Today from "../../components/Today";
import CheckBox from "../../components/CheckBox";
import Label from "../../components/Label";
import Paging from "../../components/pagenation/Paging";

const Margin = ({ customHeight }) => (
  <div style={{ height: "30px", ...customHeight }} />
);

const skill_initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "ACTION_CREATE":
      return [...state, { id: action.payload.id, title: action.payload.title }];
    case "ACTION_DELETE":
      const newArray = state.filter((item) => item.id !== action.payload.id);
      return newArray;
    // case 'ACTION_CHECKBOX_ONE':

    default:
      return state;
  }
};

const Resume = () => {
  const myResume = useSelector((state) => state.resumeReducer.list);
  const [resume, setResume] = useState(myResume[0].title);
  const [skillState, skillDispatch] = useReducer(reducer, skill_initialState);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isChecked, setIsChecked] = useState();

  return (
    <Container>
      <Title>resume main</Title>
      <Today />
      <Margin />
      <SelectBox dataArray={myResume} setResume={setResume} />
      <h2>선택한 이력 : {resume}</h2>
      <Margin />
      <InputLabelSet label={"기술스택"}>
        <ButtonLikeInput
          content={skillState?.length === 0 ? "기술스택을 선택하세요" : ""}
          selectedItems={skillState}
          itemOnClick={(id) =>
            skillDispatch({
              type: "ACTION_DELETE",
              payload: { id },
            })
          }
          setIsModalOpen={setIsModalOpen}
        />
      </InputLabelSet>
      <Margin />
      <button onClick={() => setIsModalOpen(true)}>기술스택 모달 열기</button>
      <Margin />

      <AgreeCheckWrapper>
        <Label>약관동의 (체크박스 테스트)</Label>
        <Margin />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <CheckBox onChange={setIsChecked}>
              <Label>이용약관 동의(필수)</Label>
            </CheckBox>
            <CheckBox onChange={setIsChecked}>
              <Label>개인정보 수집 및 이용 동의(필수)</Label>
            </CheckBox>
            <CheckBox onChange={setIsChecked}>
              <Label>정보수신(선택)</Label>
            </CheckBox>
          </div>
          <Margin customHeight={{ height: "10px" }} />
          <div style={{ display: "flex", alignItems: "center" }}>
            <CheckBox onChange={setIsChecked}>
              <Label>SMS</Label>
            </CheckBox>
            <CheckBox onChange={setIsChecked}>
              <Label>앱 푸시</Label>
            </CheckBox>
            <CheckBox onChange={setIsChecked}>
              <Label>email 알림</Label>
            </CheckBox>
          </div>
        </div>
        <Margin customHeight={{ height: "20px" }} />

        <button>완료</button>
        <div>test</div>
      </AgreeCheckWrapper>

      {isModalOpen && (
        <SkillSelectModal
          setIsModalOpen={setIsModalOpen}
          addSkill={(id, title) =>
            skillDispatch({
              type: "ACTION_CREATE",
              payload: { id, title },
            })
          }
        />
      )}
      <Margin />
      <div style={{ border: "1px solid #999", padding: "20px" }}>
        <Paging />
      </div>
    </Container>
  );
};

export default Resume;

const Container = styled.div`
  flex: 1;
  // background-color: yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  text-align: center;
`;

const AgreeCheckWrapper = styled.div`
  border: 1px solid #333;
  min-width: 300px;
  padding: 10px;
`;
