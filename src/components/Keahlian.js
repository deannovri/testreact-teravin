import React, { useContext } from 'react'
import { FormContext } from '../context/Context'

function RiwayatPendidikan({ prevButton, nextButton }) {

	const result = useContext(FormContext)
	const page = result[0]
	const inputKeahlian = result[13]
	const handleChange = result[14]
	const hapusKeahlian = result[15]
	const tambahKeahlian = result[16]
	
	return (
		<>
		{
			page === 4 ?
			<form className="keahlian-container">
			{
				inputKeahlian.map((res, i) => {
					return (
						<div className="keahlian-form-container" key={i}>
							<div className="keahlian-form">
								<label htmlFor="keahlian">Keahlian: </label>
								<input type="text" onChange={(e) => {handleChange(e, i)}} value={res.perusahaan} name="keahlian"/>
							</div>
							<div className="keahlian-form-button">
								{i === 0 ? null : <button onClick={(e) => {hapusKeahlian(e, i)}}>Hapus Keahlian</button>}
								{inputKeahlian.length - 1 === i && <button onClick={(e) => {tambahKeahlian(e)}}>Tambah keahlian</button>}
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