import styled from "styled-components";

const skillList = [
  { id: 0, title: "Javascript" },
  { id: 1, title: "Typescript" },
  { id: 2, title: "React" },
  { id: 3, title: "NextJs" },
  { id: 4, title: "React-Native" },
  { id: 5, title: "Git / Github" },
  { id: 6, title: "CSS" },
  { id: 7, title: "Redux/Redux-Toolkit" },
  { id: 8, title: "React-Query" },
  { id: 9, title: "Java" },
  { id: 10, title: "Phython" },
];

const SkillSelectModal = ({ setIsModalOpen, addSkill }) => {
  return (
    <Background>
      <ContentWrapper>
        <Header>
          <h3>skill modal</h3>
          <button onClick={() => setIsModalOpen(false)}>close</button>
        </Header>
        <div>
          {skillList.map((item, index) => (
            <button key={item.id} onClick={() => addSkill(item.id, item.title)}>
              {item.title}
            </button>
          ))}
        </div>
      </ContentWrapper>
    </Background>
  );
};

export default SkillSelectModal;

const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  background-color: #fff;
  width: 400px;
  height: 300px;
  border-radius: 10px;
`;

const Header = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 20px;
`;
