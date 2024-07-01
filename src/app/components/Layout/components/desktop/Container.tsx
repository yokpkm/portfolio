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
  padding-right: calc(20% - 16px);
  padding-left: calc(20% - 16px);
`;

const StyledContainer = styled.div`
  margin: 160px 0px;
  max-width: 1920px;
`;
