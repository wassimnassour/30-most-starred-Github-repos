import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

import { ButtonsWrapper, Button } from "./nextPrevButtons.style";
const NextPrevButton = ({ nextPageFn, prevPageFn, page }) => {
  return (
    <ButtonsWrapper>
      <Button onClick={() => prevPageFn()} disabled={page == "1"}>
      <FaAngleDoubleRight  className="prev"/> Prev 
      </Button>

      <span className="currentPage">{page}</span>
      <Button onClick={() => nextPageFn()}>
        Next <FaAngleDoubleRight />
      </Button>
    </ButtonsWrapper>
  );
};

export default NextPrevButton;
