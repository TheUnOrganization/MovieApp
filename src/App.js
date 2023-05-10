import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './routes/Home';
import Movies from './routes/Movies';
import NowPlaying from './routes/NowPlaying';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/nowplaying" element={<NowPlaying />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
