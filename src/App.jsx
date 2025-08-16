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
        {/* {alert("This is a developer demo. Not affiliated with Netflix.")} */}
        {/* <div class="bg-amber-300/70 border-l-4 border-yellow-500 text-amber-950 p-4 mt-6 mb-0 fixed bottom-0 w-[100vw]">
          <p class="font-bold">⚠️ Disclaimer:</p>
          <p class="mt-1">
            This is a developer demo project. It is
            <span class="font-bold underline mr-1">not affiliated with Netflix</span>
            or any other brand. No real user credentials are required.
            <p className="font-bold">DO NOT REVEAL YOUR PERSONAL INFORMATION</p>
          </p>
        </div> */}
        <div className="fixed bottom-0 w-[100vw]">
          <Disclaimer />
        </div>
      </Provider>
    </>
  );
};

export default App;
