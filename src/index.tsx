import React, { ChangeEventHandler } from "react";
import ReactDOM from "react-dom";
import { Input } from "./molecules/Input";
import "./styles/main.scss";

const App = () => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.target.value);
  };
  return (
    <div style={{ margin: "50px 50px", width: 256, height: 200 }}>
      <Input
        label="when do u want?"
        style="contained label"
        prefixIcon="setting"
        suffixIcon="calendar"
        position="both"
        onChange={handleChange}
        maxLength={100}
        placeholder="type something"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
