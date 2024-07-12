import styled from "styled-components";

export const StorySection = styled.div`
  height: auto;
  display: flex;
  padding: 0px 20px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const ImgBox = styled.div`
  position: sticky;
  height: 100vh;
  top: 0px;
  min-width: 30%;

  @media (max-width: 900px) {
    position: relative;
    padding: 0;
    margin: 0;
  }
`;

export const Content = styled.div`
  color: whitesmoke;
  font-size: 16px;
  letter-spacing: 1px;
  padding: 50px;
  text-align: left;
`;
