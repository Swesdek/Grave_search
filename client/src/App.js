import EntryBlock from "./components/entryBlock"
import Navigation from "./components/navigation"
import AboutBlock from "./components/aboutBlock";
import AlgorythmBlock from "./components/algorythmBlock";
import QuesBlock from "./components/quesBlock";
import MainServiceBlock from "./components/mainServiceBlock";
import AddServiceBlock from "./components/addServiceBlock";
import ContactBlock from "./components/contactBlock";
import ReviewsBlock from "./components/reviewsBlock";
import FaqBlock from "./components/faqBlock";
import Footer from "./components/footerBlock"

function App() {
  return (
    <div className="App m-0 p-0 overflow-x-hidden box-border w-screen">
      <Navigation/>
      <EntryBlock/>
      <AboutBlock/>
      <AlgorythmBlock/>
      <QuesBlock/>
      <MainServiceBlock/>
      <AddServiceBlock/>
      <ContactBlock/>
      <ReviewsBlock/>
      <FaqBlock/>
      <Footer/>
    </div>
  );
}

export default App;
