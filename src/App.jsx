import { useId, useState } from "react";
import "./components/React";
function App() {
  const LangSwitcher = () => {
    const selectId = useId();
    const [lang, setLang] = useState("uk");

    return (
      <div>
        <label htmlFor={selectId}>Choose language</label>
        <select
          id={selectId}
          value={lang}
          onChange={(evt) => setLang(evt.target.value)}
        >
          <option value="uk">Ukrainian</option>
          <option value="en">English</option>
          <option value="pl">Polish</option>
        </select>
      </div>
    );
  };
}
export default App;
