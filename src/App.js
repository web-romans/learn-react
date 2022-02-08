
import { Routes, BrowserRouter, Route } from "react-router-dom"
import './App.scss';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Proffile from './components/Proffile/Proffile'
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className='page'>
        <Header />
        <Sidebar />
        <div className="page__content content">

          <Routes>
            <Route path="/proffile" element={<Proffile />} />
            <Route path="/dialogs" element={<Dialogs />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />

            <Route path="/settings" element={<Settings />} />
          </Routes>

        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;