import React from "react";
import { VscIssues ,VscStarEmpty } from "react-icons/vsc";
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
const Repo = ({ repos }) => {
  return (
    <RepoContainer>
      {repos &&
        repos.map((_repo) => (
          <RepoWrapper key={_repo.id}>
            <a href={_repo.html_url} >Click to visit the Repo</a>
            <AvatarContainer>
              <Avatar src={_repo.owner.avatar_url} />
            </AvatarContainer>
            <RepoInfos>
              <UserName>{_repo.name}</UserName>
              <Description>
                {_repo.description ? _repo.description.substring(0, 80) : null}
                .....
              </Description>
              <div className="span-container">
                <Starts>Stars : {_repo.stargazers_count} <VscStarEmpty /></Starts>
                <Issues> Issues : {_repo.open_issues} <VscIssues /></Issues>
              </div>
              <p>Submitted 30 days ago by <span className="userName">{_repo.owner.login}</span></p>
            </RepoInfos>
          </RepoWrapper>
        ))}
    </RepoContainer>
  );
};

export default Repo;
