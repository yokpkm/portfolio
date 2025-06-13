import { BounceLoader } from "react-spinners";
import styled from "styled-components";

const Loader = () => {
  return (
    <>
      <ContainerLoader>
        <BounceLoader color={"#F99FDB"} speedMultiplier={1} />
      </ContainerLoader>
    </>
  );
};

export default Loader;

const ContainerLoader = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
