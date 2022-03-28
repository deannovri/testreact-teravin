import React, { useState } from 'react'
import Homepage from './pages/Homepage'
import Form from './pages/Form'
import { KaryawanContext } from './context/Context'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  const [initialDataKaryawan, setInitialDataKaryawan] = useState([
   {
          id:"1",
          nama:"dean",
          tglLahir:"1995-11-09", 
          noHp:"0892556556", 
          email:"dean@gmail.com",
          alamat:"Medan",
      },
      {
          id:"2",
          nama:"novri",
          tglLahir:"1998-06-09", 
          noHp:"089255613556", 
          email:"novri@gmail.com",
          alamat:"Batam",
      }
    ])

  return (
    <Router>
    <KaryawanContext.Provider value={[initialDataKaryawan, setInitialDataKaryawan]}>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/form' element={<Form/>} />
      </Routes>
      </KaryawanContext.Provider>
    </Router>
  );
}

export default App;
