import React, { useState } from "react";
import Dropdown from "./Dropdown";

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
    </div>
  );
};

export default Translate;
