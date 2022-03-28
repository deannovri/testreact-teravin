import React, { useState, useContext } from 'react'
import { FormContext } from '../context/Context'

function RiwayatPendidikan() {

	const result = useContext(FormContext)
	const page = result[0]
	const inputPengalamanKerja = result[9]
	const handleChange = result[10]
	const hapusPengalaman = result[11]
	const tambahPengalaman = result[12]
	
	return (
		<>
		{
			page === 3 ?
			<form className="pengalamankerja-container">
			{
				inputPengalamanKerja.map((res, i) => {
					return (
						<div className="pengalamankerja-form-container" key={i}>
							<div className="pengalamankerja-form">
								<label htmlFor="perusahaan">Pengalaman Kerja: </label>
								<input type="text" onChange={(e) => {handleChange(e, i)}} value={res.perusahaan} name="perusahaan"/>
								<label htmlFor="posisi">Posisi: </label>
								<input type="text" onChange={(e) => {handleChange(e, i)}} value={res.posisi} name="posisi"/>
								<label htmlFor="dari">Dari: </label>
								<input type="date" onChange={(e) => {handleChange(e, i)}} value={res.dari} name="dari"/>
								<label htmlFor="sampai">Sampai: </label>
								<input type="date" onChange={(e) => {handleChange(e, i)}} value={res.sasmpai} name="sampai"/>
							</div>
							<div className="pengalamankerja-form-button">
								{i === 0 ? null : <button onClick={(e) => {hapusPengalaman(e, i)}}>Hapus Pengalaman</button>}
								{inputPengalamanKerja.length - 1 === i && <button onClick={(e) => {tambahPengalaman(e)}}>Tambah Pengalaman</button>}
							</div>
						</div>
						)
				})
			}
			</form>
		: null
		}
		</>
	)
}

export default RiwayatPendidikan