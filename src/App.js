import "./App.css";
import { Route, Routes } from "react-router-dom";
import State from "./Hooks/useState/State";
import Effect from "./Hooks/useEffect/Effect";
import Parent from "./Hooks/useContext/Parent";
import Ref from "./Hooks/useRef/Ref";
import ReducersConcept from "./Hooks/useReducer/ReducersConcept";
import Memoization from "./Hooks/useMemo/Memoization";
import Back from "./Hooks/useCallback/Back";

function App() {
  return (
    <>
      <Routes>
        <Route path="/state" element={<State />} />
        <Route path="/effect" element={<Effect />} />
        <Route path="/context" element={<Parent />} />
        <Route path="/ref" element={<Ref />} />
        <Route path="/reducer" element={<ReducersConcept />} />
        <Route path="/memo" element={<Memoization />} />
        <Route path="/back" element={<Back />} />
      </Routes>
    </>
  );
}

export default App;
