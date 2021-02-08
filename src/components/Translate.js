import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM -- Google Translate API Key

const options = [
  { label: "Afrikanns", value: "af" },
  { label: "Korean", value: "kr" },
  { label: "German", value: "de" },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
        </div>
      </div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <Dropdown
        label="Select a Language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr />
      <h3 className=" ui header">Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
