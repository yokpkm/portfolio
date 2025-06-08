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
  padding: 24px;
  height: 100%;
`;

const StyledContainer = styled.div`
  margin: 144px auto 192px auto;
  width: 864px;
`;
