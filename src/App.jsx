import "./App.css";
import Body from "./../src/components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const App = () => {
  return (
    <>
      <Provider store={appStore}>
        <Body />
        {alert("This is a developer demo. Not affiliated with Netflix.")}
      </Provider>
    </>
  );
};

export default App;
