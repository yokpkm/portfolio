import { BounceLoader } from "react-spinners";
import styled from "styled-components";

export const LoaderPage = () => {
  return (
    <>
      <ContainerLoader>
        <BounceLoader color={"#F5A4C7"} speedMultiplier={1} />
      </ContainerLoader>
    </>
  );
};

const ContainerLoader = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
