import styled from "styled-components";

interface Props {
  children: any;
}

export const ContainerDesktop: React.FC<Props> = ({ children }) => {
  return (
    <>
      <WrapperContainer>
        <StyledContainer>{children}</StyledContainer>
      </WrapperContainer>
    </>
  );
};

const WrapperContainer = styled.div`
  padding: 0 24px;
`;

const StyledContainer = styled.div`
  margin: 160px auto;
  width: 920px;
`;
