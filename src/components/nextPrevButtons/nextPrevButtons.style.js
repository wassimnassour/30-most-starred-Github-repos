import styled from "styled-components";

export const ButtonsWrapper = styled.div`
  width: 350px;
  margin: 1rem auto;
  display: flex;
  justify-content: center;
  align-items: center;

  .currentPage {
    font-size: 1.6rem;
    margin: 1.4rem;
    color: #2196f3;
  }
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42%;
  padding: 0.5rem 0;
  margin: 0.4rem;
  font-weight: bold;
  font-size: 1rem;
  background: #2196f3;
  color: white;
  border: none;
  border-radius: 10px;
  outline: none;
  svg {
    margin: 0 0.2rem;
  }
  .prev {
    transform: rotate(-180deg);
  }
`;
