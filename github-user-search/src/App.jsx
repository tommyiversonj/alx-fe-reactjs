import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Search from './components/Search';

function App() {
    return (
        <Router>
            <div className="app">
                <h2>Github User Search</h2>
                <nav>
                    <Link to="/">Search</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Search />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
