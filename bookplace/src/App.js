import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/authContext';
import { BookProvider } from './contexts/bookContext';

import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Home } from './components/Home/Home';

import styles from './public/App.module.css';

function App() {
  return (
    <AuthProvider>
      <BookProvider>
        <div className='App'>
          <Header />

          <main className={styles['content']}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Routes>
          </main>

        </div>
      </BookProvider>
    </AuthProvider>
  );
}

export default App;
