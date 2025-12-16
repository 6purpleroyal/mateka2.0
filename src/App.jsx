import './App.css'
import Header from './components/Header';
import WeeklyEvents from './components/WeeklyEvents';
import Sermons from './components/Sermons';
import Donate from './components/Donate';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Header />
      <WeeklyEvents />
      <Sermons />
      <Donate />
      <section id="visit" className="max-w-6xl mx-auto px-6">
        <div className="glass p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold">Visit Us</h2>
          <p className="mt-2 text-slate-200">We meet every Sunday at 10:00 AM in Mateka.</p>
          <div className="mt-6">
            <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="btn-primary"><i className="fa-solid fa-map"></i> Open in Maps</a>
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </>
  )
}

export default App
