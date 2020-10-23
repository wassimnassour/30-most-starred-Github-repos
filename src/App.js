import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import { Header, Repo, NextPrevButton } from "./components/index";

function App() {
  const [todayDate, setTodayDate] = useState("");
  const [repos, setRepos] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // this function for set date of today
  function setDate() {
    const date = new Date();
    const day = date.getDate() - 1;
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const today = [year, month, day].join("-");
    setTodayDate(today);
  }

  // this function for go to next page
  function nextPage() {
    setLoading(true);
    setPage(page + 1);
  }

  // this function for go to prev page
  function prevPage() {
    if (page > 1) {
      setLoading(true);
      setPage(page - 1);
    }
  }
  useEffect(() => {
    setDate();
    // fetch data from github url
    todayDate &&
      axios
        .get(
          `https://api.github.com/search/repositories?q=created:>${todayDate}&sort=stars&order=desc&page=${page}`
        )
        .then((el) => {
          const data = el.data.items;
          setRepos(data);
          setLoading(false);
        });
  }, [todayDate, page]);
  return (
    <div className="App">
      <Header />
      <main className="main">
        <NextPrevButton
          nextPageFn={nextPage}
          prevPageFn={prevPage}
          page={page}
        />
        {repos && !loading ? (
          <Repo repos={repos} />
        ) : (
          <Loader
            type="Oval"
            color="#2196f3"
            height={100}
            width={100}
            timeout={3000}
            className="loader"
          />
        )}
      </main>
    </div>
  );
}

export default App;
