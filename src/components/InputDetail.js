import React, { useContext } from 'react'
import { FormContext } from '../context/Context'
import { useNavigate } from 'react-router-dom'

function InputDetail() {

	let goBackToHomepage = useNavigate()

	const result = useContext(FormContext)
	const page = result[0]
	const DataPersonal = result[1]
	const RiwayatPendidikan = result[4]
	const PengalamanKerja = result[9]
	const Keahlian = result[13]
	const dataKaryawanAwal = result[17]
	const dataKaryawanBaru = result[18]

	const handleSubmit = (e) => {
		e.preventDefault()
		const pendidikan = RiwayatPendidikan.map(res => res)
		const pengalaman = PengalamanKerja.map(res => res)
		const keahlian = Keahlian.map(res => res)
		const newData = [...dataKaryawanAwal, {
			id: Math.random().toString(),
			namaDepan: DataPersonal.namaDepan,
			namaBelakang: DataPersonal.namaBelakang,
			tglLahir: DataPersonal.tglLahir,
			noHp: DataPersonal.noHp,
			email: DataPersonal.email,
			alamat: DataPersonal.alamat,
			pendidikan: pendidikan,
			pengalaman: pengalaman,
			keahlian: keahlian
		}]
		dataKaryawanBaru(newData)
		goBackToHomepage('/')
	}

	return (
		<>
			{
				page === 5 ?
				<> 
				<div className="input-detail-container">
					<div className="data-personal-input">
						<h2>Data Personal</h2>
						<div>Nama Depan: <span>{DataPersonal.namaDepan}</span></div>
						<div>Nama Belakang: <span>{DataPersonal.namaBelakang}</span></div>
						<div>Tanggal Lahir: <span>{DataPersonal.tglLahir}</span></div>
						<div>Nomor Hp: <span>{DataPersonal.noHp}</span></div>
						<div>Alamat email: <span>{DataPersonal.email}</span></div>
						<div>Alamat: <span>{DataPersonal.alamat}</span></div>
					</div>
					<div className="riwayat-pendidikan-input">
						<h2>Riwayat Pendidikan</h2>
						{
							RiwayatPendidikan.map((res, i) => {
								return (
									<div key={i}>
										<div>Pendidikan: <span>{res.pendidikan}</span></div>
										<div>Jurusan: <span>{res.jurusan}</span></div>
										<div>Tahun Lulus: <span>{res.tahunLulus}</span></div>
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
										<div>Perusahaan: <span>{res.perusahaan}</span></div>
										<div>Posisi: <span>{res.posisi}</span></div>
										<div>Dari: <span>{res.dari}</span></div>
										<div>Sampai: <span>{res.sampai}</span></div>
									</div>
									)
							})
						}
					</div>
					<div className="keahlian-input">
						<h2>Keahlian</h2>
						{
							Keahlian.map((res, i) => {
								return (
									
									<div key={i}>
										<div><span>{res.keahlian}</span></div>
									</div>
									)
							})
						}
					</div>
				</div>
				<div className="input-detail-submit">
						<button onClick={(e) => {handleSubmit(e)}}>Submit</button>
				</div>
				</>
				: null
			}
		</>
	)
}

export default InputDetail