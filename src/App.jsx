import "./App.css";
import Body from "./../src/components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/redux-store/appStore";
import Disclaimer from "./components/Disclaimer";

const App = () => {
  return (
    <>
      <Provider store={appStore}>
        <Body />
        <div className="fixed bottom-0 w-[100vw]">
          <Disclaimer />
        </div>
      </Provider>
    </>
  );
};

export default App;
