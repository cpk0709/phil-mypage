import styled from "styled-components";

const ButtonLikeInput = ({
  selectedItems,
  itemOnClick,
  setIsModalOpen,
  content,
}) => {
  return (
    <Container
      onClick={() => {
        setIsModalOpen(true);
      }}
    >
      {selectedItems?.length === 0 ? (
        <span>{content}</span>
      ) : (
        <>
          {selectedItems?.map((item, index) => {
            return (
              <ItemWrapper onClick={(e) => e.stopPropagation()}>
                <span>{item.title}</span>
                <DeleteImage onClick={() => itemOnClick(item.id)}>
                  del
                </DeleteImage>
              </ItemWrapper>
            );
          })}
        </>
      )}
    </Container>
  );
};

export default ButtonLikeInput;

const Container = styled.div`
  border: 1px solid #000;
  max-width: 250px;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  color: #999;
`;

const ItemWrapper = styled.div`
  border: 1px solid #666;
  display: flex;
  padding: 5px;
  margin-right: 10px;
  margin-bottom: 10px;
`;
const DeleteImage = styled.div`
  color: red;
  margin-left: 5px;
`;
