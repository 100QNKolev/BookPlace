import { useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/authContext';
import { BookProvider } from './contexts/bookContext';

import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Home } from './components/Home/Home';
import { Logout } from './components/Logout/Logout';

import { bookServiceFactory } from './services/bookService';

import data from './public/books.json';

import styles from './public/App.module.css';

function App() {

  const { setBooks } = bookServiceFactory();

  useEffect(() => {
    setBooks(data);
  });

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
              <Route path='/logout' element={<Logout />} />
            </Routes>
          </main>

        </div>
      </BookProvider>
    </AuthProvider>
  );
}

export default App;
