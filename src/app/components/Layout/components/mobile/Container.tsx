import styled from "styled-components";

interface Props {
  children: any;
}

export const ContainerMobile: React.FC<Props> = ({ children }) => {
  return (
    <>
      <WrapperContainer>
        <StyledContainer>{children}</StyledContainer>
      </WrapperContainer>
    </>
  );
};

const WrapperContainer = styled.div`
  padding: 0px 24px;
`;

const StyledContainer = styled.div`
  margin: 96px 0px;
  max-width: 991px;
`;
