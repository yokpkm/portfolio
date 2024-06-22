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
  margin-left: 24px;
  margin-right: 24px;
`;

const StyledContainer = styled.div`
  margin: 120px auto;
  max-width: 991px;
  /* min-width: 320px; */
`;
