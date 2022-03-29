import React, { useContext } from 'react'
import { FormContext } from '../context/Context'

function RiwayatPendidikan() {

	const result = useContext(FormContext)
	const page = result[0]
	const inputRiwayatPendidikan = result[4]
	const handleChange = result[5]
	const error = result[6]
	const hapusPendidikan = result[7]
	const tambahPendidikan = result[8]
	
	return (
	<>
	{
		page === 2 ?
			<form className="riwayatpendidikan-container">
			{
				inputRiwayatPendidikan.map((res, i) => {
					return (
						<div className="riwayatpendidikan-form-container" key={i}>
							<div className="riwayatpendidikan-form">
								<label htmlFor="pendidikan">Pendidikan: </label>
								<input type="text" onChange={(e) => {handleChange(e, i)}} value={res.pendidikan} name="pendidikan"/>
								{error.pendidikan && "tolong diisi!"}
								<label htmlFor="jurusan">Jurusan: </label>
								<input type="text" onChange={(e) => {handleChange(e, i)}} value={res.jurusan} name="jurusan"/>
								{error.jurusan && "tolong diisi!"}
								<label htmlFor="tahunLulus">Tahun Kelulusan: </label>
								<input type="text" onChange={(e) => {handleChange(e, i)}} value={res.tahunLulus} name="tahunLulus"/>
								{error.tahunLulus && "tolong diisi!"}
							</div>
							<div className="riwayatpendidikan-form-button">
								{i === 0 ? null : <button onClick={(e) => {hapusPendidikan(e, i)}}>Hapus Pendidikan</button>}
								{inputRiwayatPendidikan.length - 1 === i && <button onClick={(e) => {tambahPendidikan(e)}}>Tambah Riwayat Pendidikan</button>}
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