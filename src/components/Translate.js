import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  { label: "Afrikanns", value: "af" },
  { label: "Korean", value: "ko" },
  { label: "German", value: "de" },
  { label: "Arabic", value: "ar" },
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
