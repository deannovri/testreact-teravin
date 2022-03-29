import React, { useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { KaryawanContext } from '../context/Context'

function DetailKaryawan() {

	let goBackToHomepage = useNavigate()

	const result = useContext(KaryawanContext)
	const data = result[0]
	
	const {id} = useParams();
	
	const detail = data.find(res => res.id === id)
	
	const handleBackHome = (e) => {
		e.preventDefault()
		goBackToHomepage('/')
	}

	return (
		<>		
				<div className="detail-karyawan-container">
					<h1>{detail.namaDepan} {detail.namaBelakang}</h1>
					<div className="detail-karyawan-button">
						<button onClick={(e) => {handleBackHome(e)}}>Back to Home</button>
					</div>
					<div className="data-personal">
						<h3>Data Personal</h3>
						<div>Nama Depan: <span>{detail.namaDepan}</span></div>
						<div>Nama Belakang: <span>{detail.namaBelakang}</span></div>
						<div>Tanggal Lahir: <span>{detail.tglLahir}</span></div>
						<div>Nomor Hp: <span>{detail.noHp}</span></div>
						<div>Alamat email: <span>{detail.email}</span></div>
						<div>Alamat: <span>{detail.alamat}</span></div>
					</div>
					<div className="riwayat-pendidikan">
						<h3>Riwayat Pendidikan</h3>
						{
							detail.pendidikan.map((res, i) => {
								return (
									<div className="riwayat-pendidikan-list" key={i}>
										<div>Pendidikan: <span>{res.pendidikan}</span></div>
										<div>Jurusan: <span>{res.jurusan}</span></div>
										<div>Tahun Lulus: <span>{res.tahunLulus}</span></div>
									</div>
									)
							})
						}
					</div>
					<div className="pengalaman-kerja">
						<h3>Pengalaman Kerja</h3>
						{
							detail.pengalaman.map((res, i) => {
								return (
									<div className="pengalaman-kerja-list" key={i}>
										<div>Perusahaan: <span>{res.perusahaan}</span></div>
										<div>Posisi: <span>{res.posisi}</span></div>
										<div>Dari: <span>{res.dari}</span></div>
										<div>Sampai: <span>{res.sampai}</span></div>
									</div>
									)
							})
						}
					</div>
					<div className="keahlian">
						<h3>Keahlian</h3>
						{
							detail.keahlian.map((res, i) => {
								return (
									<div className="keahlian-list" key={i}>
										<div><span>{res.keahlian}</span></div>
									</div>
									)
							})
						}
					</div>
				</div>
		</>
			)
	}

export default DetailKaryawan