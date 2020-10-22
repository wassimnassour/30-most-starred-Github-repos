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
const Repo = ({ repos }) => {
  return (
    <RepoContainer>
      {repos &&
        repos.map((_repo) => (
          <RepoWrapper key={_repo.id}>
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
                <Starts>Stars : {_repo.stargazers_count}</Starts>
                <Issues>Issues : {_repo.open_issues}</Issues>
              </div>
              <p>Submitted 30 days ago by {_repo.owner.login}</p>

            </RepoInfos>
          </RepoWrapper>
        ))}
    </RepoContainer>
  );
};

export default Repo;
