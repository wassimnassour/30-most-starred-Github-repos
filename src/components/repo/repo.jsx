import React from "react";
import {
  RepoContainer,
  RepoWrapper,
  AvatarContainer,
  Avatar,
  RepoInfos,
  UserName,
  Description,
  Starts,
  Issues,
} from "./repo.style";
const Repo = () => {
  return (
    <RepoContainer>
      <RepoWrapper>
        <AvatarContainer>
          <Avatar></Avatar>
        </AvatarContainer>
        <RepoInfos>
          <UserName>Wassim</UserName>
          <Description>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem,
            dolore.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem,
            dolore.
          </Description>
          <div className="span-container">
          <Starts>Stars : 15</Starts>
          <Issues>Issues : 8</Issues>
          </div>
         
        </RepoInfos>
      </RepoWrapper>

    </RepoContainer>
  );
};

export default Repo;
