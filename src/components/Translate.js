import React, { useState } from "react";
import Dropdown from "./Dropdown";

const options = [
  { label: "Afrikanns", value: "af" },
  { label: "Korean", value: "kr" },
  { label: "German", value: "de" },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);

  return (
    <div>
      <Dropdown
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
    </div>
  );
};

export default Translate;
