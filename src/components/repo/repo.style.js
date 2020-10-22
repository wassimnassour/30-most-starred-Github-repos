import styled, { css } from "styled-components";

export const RepoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 2rem;
  @media screen and (max-width: 500px) {
    margin: 2rem 1rem;
  }
`;
export const RepoWrapper = styled.div`
  flex-basis: 28%;
  display: flex;
  align-items: center;
  height: 180px;
  padding: 1rem;
  margin: 1rem;
  border-radius: 4px;
  box-shadow: 0 0 4px 0px #bfbfbf;
  position: relative;
  .span-container {
    display: flex;
  }
  p {
    margin: 0.5rem 0;
    font-size: 0.9rem;
    .userName {
      font-weight: bold;
    }
  }
  a {
    display: none;
  }
  &:hover a {
    position: absolute;
    transition: translate 2s;
    background: #272525f5;
    color: white;
    font-size: 1.6rem;
    text-decoration: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 1500px) {
    flex-basis: 43%;
  }
  @media screen and (max-width: 1005px) {
    flex-basis: 80%;
  }
  @media screen and (max-width: 500px) {
    flex-basis: 97%;
    margin: 1rem 0;
  }
`;

export const AvatarContainer = styled.div`
  flex-basis: 30%;
`;

export const Avatar = styled.img`
  width: 100%;
  height: 150px;
  border: none;
`;
export const RepoInfos = styled.div`
  margin: 0.9rem;
  text-align: left;
  flex-basis: 70%;
`;
export const UserName = styled.h2`
  font-size: 1.5rem;
  margin: 0 0 0.6rem;
  @media screen and (max-width: 1005px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.2rem;
  }
`;
export const Description = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin: 0 0 0.2rem;
`;
const span = css`
  background: #2196f3;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  padding: 3px 8px;
  font-weight: bold;
  margin: 6px 2px 0;
  color: white;
  min-width: 54px;
  height: 20px;
  border-radius: 3px;
`;
export const Starts = styled.span`
  ${span}
`;
export const Issues = styled.span`
  ${span}
`;
