import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Body />

        {/* 
      Header
      Body
      Sidebar
        - menuItems
      MainContainer
        -ButtonsList
        -videoContainer
          -video card
    
    
    */}
      </div>
    </Provider>
  );
}

export default App;
