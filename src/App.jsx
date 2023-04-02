import Form from "./Form";
import ColorList from "./ColorList";
import Values from "values.js";
import { useState } from "react";
import SingleColor from "./SingleColor";

const App = () => {
  const [colors, setColors] = useState(new Values("#8ed1fb").all(10));
  return (
    <main>
      <Form />
      <ColorList colors={colors} />
    </main>
  );
};
export default App;
