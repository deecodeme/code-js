import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup"

function App() {
  let items = ["Bangalore", "Mumbai", "Hyderabad", "Pune"];
  const handleSelectItem = (item: string) => console.log(item);
  const handleButtonClick = (message: string) => console.log(message)
  return <div>
    <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
    <Alert onClose={() => {}}>
      <h1>Hello</h1>
      <h2>World Alert</h2>
    </Alert>
    <Button color="danger" text="Click Me" onButtonClick={handleButtonClick}></Button>
  </div>
}

export default App