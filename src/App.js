import React, { useState, useEffect } from 'react'
import Homepage from './pages/Homepage'
import Form from './pages/Form'
import DetailKaryawan from './pages/DetailKaryawan'
import { KaryawanContext } from './context/Context'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  const [initialDataKaryawan, setInitialDataKaryawan] = useState([])

  useEffect(() => {
    const allDataKaryawan = localStorage.getItem("dataKaryawan")
    const data = JSON.parse(allDataKaryawan)
    setInitialDataKaryawan(data)
  }, [])

  useEffect(() => {
    localStorage.setItem("dataKaryawan", JSON.stringify(initialDataKaryawan))
  }, [initialDataKaryawan])

  return (
    <Router>
    <KaryawanContext.Provider value={[initialDataKaryawan, setInitialDataKaryawan]}>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/form' element={<Form/>} />
        <Route path='/:id' element={<DetailKaryawan/>} />
      </Routes>
      </KaryawanContext.Provider>
    </Router>
  );
}

export default App;
