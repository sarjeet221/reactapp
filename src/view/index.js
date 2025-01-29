import Home from "./screen/Home";
import { BrowserRouter } from "react-router-dom";
import RouterNav from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { Provider } from "react-redux";
import { store } from "./redux/Store";

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <RouterNav />
          <Footer />
        </Provider>
      </BrowserRouter>
    </>
  );
}
export default App;
