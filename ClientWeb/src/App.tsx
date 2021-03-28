import "./App.css";
import { Button } from "antd";
import { useState } from "@hookstate/core";
import appState from "./state/app-state";

export const App = () => {
  const state = useState(appState);
  const s = state.get();
  return (
    <div className="App">
      <h1>User data</h1>
      <div>
        Login: <b>{s.user.login}</b>
        <br />
        Email: <b>{s.user.email}</b>
      </div>

      <Button type="dashed">OK</Button>
    </div>
  );
};
