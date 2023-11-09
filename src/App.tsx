import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/button";
import { useState } from "react";

function App() {
  let list = ["Red", "Blue", "Green", "Yellow", "Black"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  let colour = "danger";
  const [alertVisible, setAlertVisibility] = useState(false);

  const handleButton = () => {
    setAlertVisibility(true);
  };
  const closeButton = () => {
    setAlertVisibility(false);
  };
  return (
    <div>
      <ListGroup list={list} heading="Cities" onSelectItem={handleSelectItem} />
      {alertVisible && <Alert onClose={closeButton}>Hello World!</Alert>}
      <Button text={colour} colour={colour} onClickButton={handleButton} />
    </div>
  );
}

export default App;
