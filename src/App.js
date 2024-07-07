import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "watch",
          element: <WatchPage />,
        },
        {
          path: "demo",
          element: <Demo />,
        },
        {
          path: "demo2",
          element: <Demo2 />,
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        {/* <Body /> */}
        <RouterProvider router={appRouter} />

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
