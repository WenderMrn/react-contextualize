import { CombinedContextProvider } from "./stores/CombinedContextProvider";

import Count from "components/Count";
import Items from "components/Items";
import "./styles.css";

export default function App() {
  return (
    <CombinedContextProvider>
      <div className="App">
        <Count />
        <Items />
      </div>
    </CombinedContextProvider>
  );
}
