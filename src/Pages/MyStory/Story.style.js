import styled from "styled-components";

export const StorySection = styled.div`
  height: auto;
  display: flex;
`;

export const ImgBox = styled.div`
  position: sticky;
  height: 100vh;
  top: 0px;
  min-width: 50%;
`;

export const MyImageElement = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 40%;
  border: 5px ridge #fff;
  padding: 10px;
`;

export const Content = styled.div`
  color: whitesmoke;
  padding: 50px;
  text-align: left;
`;
