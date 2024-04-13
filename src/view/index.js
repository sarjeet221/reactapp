import Home from "./screen/Home";
import {BrowserRouter} from 'react-router-dom'
import RouterNav from "./router";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./component/Header";
import Footer from "./component/Footer";


function App(){
    return(
     <>
     <BrowserRouter>
        <Header />
     <RouterNav />
        <Footer />
     </BrowserRouter>
    
     
     </>
    )
}
export default App;