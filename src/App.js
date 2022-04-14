
import { Routes, BrowserRouter, Route } from "react-router-dom"
import './App.scss';

import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import ProfileContainer from './components/Proffile/ProfileContainer'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import News from './components/News/News'
import Music from './components/Music/Music'
import UsersContainer from './components/Users/UsersContainer'
import Settings from './components/Settings/Settings'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className='page'>
        <Header />
        <main className="main">
          <Sidebar />
          <div className="page__content content">
            <Routes>
              <Route path="/" element={<ProfileContainer />} />
              <Route path="/profile" element={<ProfileContainer />} />
              <Route path="/profile/:profileId" element={<ProfileContainer />} />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/dialogs" element={<DialogsContainer />} />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;