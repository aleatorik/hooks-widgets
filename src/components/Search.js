import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");

  useEffect(() => {
    // Num 1 solution below (Declare a helper function and execute it immediately)
    const search = async () => {
      await axios.get("awpeofij");
    };

    search();
    // Num 2 solution below _ pretty new syntax from ES?
    // (async () => {
    //   await axios.get("asokdsf");
    // })();

    // Num 3 solution below _ Promise()
    // axios.get('aweoif')
    //   .then((response) => {
    //     console.log(response.data);
    //   });
  }, [term]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
