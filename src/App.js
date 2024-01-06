import { Provider } from "react-redux";
import appStore from "./store/appStore";
import "./App.css";
import AppRoutes from "./AppRoutes";


function App() {


  return (
    <Provider store={appStore}>
      <AppRoutes/>
    </Provider>
  );
}

export default App;
