import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {

  let items = ["New York", "San Francisco", "Tokyo", "London"];

  const handleSelectItem = (item: string) => console.log(item);
  const handleAlertClose = () => setDisplayAlert(false)
  const [displayAlert, setDisplayAlert] = useState(false)

  const handleButtonClicked = (item: number) => {
    setDisplayAlert(true)
    console.log("Button state: ", item)
  }

  let alert = displayAlert &&
    <Alert handleCloseClick={handleAlertClose}><h1>Big header </h1>
      <p> Some content</p>
    </Alert>

  return <div>
    {alert}
    <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
    <Button onButtonClicked={handleButtonClicked}> <h2> Button name</h2></Button>
  </div>
}

export default App;
