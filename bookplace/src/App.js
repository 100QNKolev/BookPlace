import { AuthProvider } from './contexts/authContext';

import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login';

import styles from './public/App.module.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <AuthProvider>
      <div className='App'>
        <Header />

        <main className={styles['content']}>
          <Routes>
            <Route path='/login' element={<Login />} />
          </Routes>
        </main>

      </div>
    </AuthProvider>
  );
}

export default App;
