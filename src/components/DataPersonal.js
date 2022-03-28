import React, { useState, useContext } from 'react'
import { FormContext } from '../context/Context'

function DataPersonal({ nextButton }) {

	const result = useContext(FormContext)
	const page = result[0]
	const inputDataPersonal = result[1]
	const handleChange = result[2]
	const error = result[3]
	
	return (
	<>
	{
		page === 1 ?
		<form className="datapersonal-container">
			<label htmlFor="namaDepan">Nama Depan: </label>
			{error.namaDepan && <p>{error.namaDepan}</p>}
			<input type="text" onChange={handleChange} value={inputDataPersonal.namaDepan} name="namaDepan"/>
			<label htmlFor="namaBelakang">Nama Belakang: </label>
			<input type="text" onChange={handleChange} value={inputDataPersonal.namaBelakang} name="namaBelakang"/>
			<label htmlFor="tglLahir">Tanggal Lahir: </label>
			<input type="date" onChange={handleChange} value={inputDataPersonal.tglLahir} name="tglLahir"/>
			<label htmlFor="noHp">No Hp: </label>
			{error.noHp && <p>{error.noHp}</p>}
			<input type="text" onChange={handleChange} value={inputDataPersonal.noHp} name="noHp"/>
			<label htmlFor="email">Email: </label>
			{error.email && <p>{error.email}</p>}
			<input type="text" onChange={handleChange} value={inputDataPersonal.email} name="email"/>
			<label htmlFor="alamat">Alamat: </label>
			{error.alamat && <p>{error.alamat}</p>}
			<input type="text" onChange={handleChange} value={inputDataPersonal.alamat} name="alamat"/>
		</form>
		: null
	}
	</>
	)
}

export default DataPersonal