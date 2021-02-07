import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });

      setResults(data.query.search);
    };

    if (term) {
      // useEffect의 초기렌더링으로 인해 빈 공백을 위키피디아 넣을 때 나오는 에러를 갖게되므로, 초기값이 있을 때, 즉 term에 값이 주어졌을 때만 위의 helper function이 실행되도록 조건문을 거는 것. -> 에러해결
      search();
    }
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
          {/* 'dangerouslySetInnerHTML'를 통해 XXS Attack이라 불리는 'Cross site scripting attack'으로 인해 안전상의 구멍을 열어놓을 수 있는 리스크가 생김. 신뢰할 수 있는 URL에 경우에만 위에 dangerouslySetInnerHtml 사용할 것. 왜냐하면 third party가 보내는 html이 개발자 도구에 노출되기 때문에. 이 경우, 위키피디아를 신뢰할 수 있는가? 그들이 보내는 HTML 내용을 신뢰하는가? 해커에 의해 어떤 계정을 해킹하기 위해 앱 안에 유해한 기능의 JS 코드가 심어질 수 있음  */}
        </div>
      </div>
    );
  });

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
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
