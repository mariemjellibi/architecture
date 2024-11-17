

import { Routes, Route } from 'react-router-dom';
import MemoryInfo from './MemoryInfo';  // Make sure this is the correct path
import Home from './Home';
import ErrorBoundary from './ErrorBoundary'; // Adjust path as needed
import InteriorPC from "./InteriorPC";
import CpuEvolution from './CpuEvolution';
import './App.css';
function App() {
  return (
    <div >
      <ErrorBoundary>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/memory-info/*" element={<MemoryInfo />} />
      <Route path="/interior-pc" element={<InteriorPC />} /> 
      <Route path="/cpu-evolution" element={<CpuEvolution/>}/>
      {/* Add any other routes here */}
    </Routes>
    </ErrorBoundary>
    </div>
    
  );
}

export default App;
