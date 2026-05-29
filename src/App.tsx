import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {

  let items = ["New York", "San Francisco", "Tokyo", "London"];

  const handleSelectItem = (item: string) => console.log(item);

  const handleButtonClicked = (item: number) => console.log("Button state: ", item)

  return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
    <Alert><h1>Big header </h1>
      <p> Some content</p>
    </Alert>
    <Button onButtonClicked={handleButtonClicked}> <h2> Button name</h2></Button>
  </div>
}

export default App;
