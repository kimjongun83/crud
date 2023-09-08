import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import navItems from './constant/Router';
import './App.css'
function App() {
  return (
    <BrowserRouter>
      <div>
      <nav>
        <ul className="user">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link className='custom' to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Routes>
        {navItems.map((item) => (
          <Route key={item.path} path={item.path} element={item.component} />
        ))}
      </Routes>
    </div>

  </BrowserRouter>
  )
}

export default App;
