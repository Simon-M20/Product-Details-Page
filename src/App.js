import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Newsletter from "./Components/NewsLetter/Newsletter";
import Related from "./Components/Section/Related";

function App() {
    return (
        <div className='App'>
            <Header />
            <Main />
            <Related />
            <Newsletter />
            <Footer />
        </div>
    );
}

export default App;
