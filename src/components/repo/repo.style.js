import styled, { css } from "styled-components";

export const RepoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 2rem;
`;
export const RepoWrapper = styled.div`
  flex-basis: 35%;
  display: flex;
  align-items: center;
  height: 180px;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0 0 4px 0px #bfbfbf;
  .span-container {
    display: flex;
  }
`;

export const AvatarContainer = styled.div`
  flex-basis: 30%;
`;

export const Avatar = styled.img`
  background: green;
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
  font-size: 2rem;
  margin: 0 0 0.6rem;
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
