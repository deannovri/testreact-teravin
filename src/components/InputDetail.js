import React, { useContext } from 'react'
import { FormContext } from '../context/Context'

function InputDetail() {

	const result = useContext(FormContext)
	const page = result[0]
	const DataPersonal = result[1]
	const RiwayatPendidikan = result[4]
	const PengalamanKerja = result[9]
	const Keahlian = result[13]
	const dataKaryawanAwal = result[17]
	const dataKaryawanBaru = result[18]
	console.log(dataKaryawanAwal)

	const handleSubmit = (e) => {
		e.preventDefault()
		const newData = [...dataKaryawanAwal, {
			id: Math.random(),
			namaDepan: DataPersonal.namaDepan,
			namaBelakang: DataPersonal.namaBelakang,
			tglLahir: DataPersonal.tglLahir,
			noHp: DataPersonal.noHp,
			email: DataPersonal.email,
			alamat: DataPersonal.alamat,
		}]
		dataKaryawanBaru(newData)
	}

	return (
		<>
			{
				page === 5 ? 
				<div className="input-detail-container">
					<div className="data-personal-input">
						<h2>Data Personal</h2>
						<div>Nama Depan: {DataPersonal.namaDepan}</div>
						<div>Nama Belakang: {DataPersonal.namaBelakang}</div>
						<div>Tanggal Lahir: {DataPersonal.tglLahir}</div>
						<div>Nomor Hp: {DataPersonal.noHp}</div>
						<div>Alamat email: {DataPersonal.email}</div>
						<div>Alamat: {DataPersonal.alamat}</div>
					</div>
					<div className="riwayat-pendidikan-input">
						<h2>Riwayat Pendidikan</h2>
						{
							RiwayatPendidikan.map((res, i) => {
								return (
									<div key={i}>
										<div>Pendidikan: {res.pendidikan}</div>
										<div>Jurusan: {res.jurusan}</div>
										<div>Tahun Lulus: {res.tahunLulus}</div>
									</div>
									)
							})
						}
					</div>
					<div className="pengalaman-kerja-input">
						<h2>Pengalaman Kerja</h2>
						{
							PengalamanKerja.map((res, i) => {
								return (
									<div key={i}>
										<div>Perusahaan: {res.perusahaan}</div>
										<div>Posisi: {res.posisi}</div>
										<div>Dari: {res.dari}</div>
										<div>Sampai: {res.sampai}</div>
									</div>
									)
							})
						}
					</div>
					<div className="keahlian-input">
						<h2>Keahlian</h2>
						<div>Keahlian:</div>
						{
							Keahlian.map((res, i) => {
								return (
									
									<div key={i}>
										<div>{res.keahlian}</div>
									</div>
									)
							})
						}
					</div>
					<div>
						<button onClick={(e) => {handleSubmit(e)}}>Submit</button>
					</div>
				</div>
				: null
			}
		</>
	)
}

export default InputDetail