import Counter from "./Counter";
import EventPractice from "./EventPractice";
import MyComponent from "./MyComponents";
import NewCounter from "./NewCounter";
import Say from "./Say";

function App() {
  return (
    <div>
      <MyComponent name="React" favoriteNumber={1}>
        리액트
      </MyComponent>
      <Counter />
      <NewCounter />
      <Say />
      <EventPractice />
    </div>
  );
}

export default App;
