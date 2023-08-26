import React,{useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import PairAddress from './PairAddress';
import TokenAddress from './TokenAddress';

const App=()=> {
  
  const [dataSets,setDataSets] = useState([]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TokenAddress setDataSets={setDataSets} />} />
         
          <Route path='/pair' element={<PairAddress setDataSets={setDataSets} />} />
            
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
