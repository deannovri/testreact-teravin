import React, { useState, useContext } from 'react'
import DataPersonal from '../components/DataPersonal'
import RiwayatPendidikan from '../components/RiwayatPendidikan'
import PengalamanKerja from '../components/PengalamanKerja'
import Keahlian from '../components/Keahlian'
import StepIndicator from '../components/StepIndicator'
import InputDetail from '../components/InputDetail'
import { FormContext } from '../context/Context'
import { KaryawanContext } from '../context/Context'

function Form() {

	const result = useContext(KaryawanContext)
	const dataKaryawan = result[0]
	const newDataKaryawan = result[1]
	
	const [page, setPage] = useState(1)
	
	//data personal
	const [inputDataPersonal, setInputDataPersonal] = useState({
		namaDepan:"",
		namaBelakang:"",
		tglLahir:"",
		noHp:"",
		email:"",
		alamat:""
	})
	const [errorDataPersonal, setErrorDataPersonal] = useState({
		namaDepan:"",
		noHp:"",
		email:"",
		alamat:""
	})
	//

	//riwayat pendidikan
	const [inputRiwayatPendidikan, setInputRiwayatPendidikan] = useState([{ 
		pendidikan:"",
		jurusan:"",
		tahunLulus:""
		}])

	const [errorRiwayatPendidikan, setErrorRiwayatPendidikan] = useState([{
		pendidikan:"",
		jurusan:"",
		tahunLulus:""
	}])
	//

	//pengalaman kerja
	const [inputPengalamanKerja, setInputPengalamanKerja] = useState([{ 
		perusahaan:"",
		posisi:"",
		dari:"",
		sampai:""
		}])
	//

	//keahlian
	const [inputKeahlian, setInputKeahlian] = useState([{ keahlian:"" }])
	//

	//form
	const next = () => {
		setPage(page => page + 1 )
	}

	const prev = () => {
		setPage(page => page - 1 )
	}
	//

	//data personal
	const handleChangeDataPersonal = (e) => {
		setInputDataPersonal({
			...inputDataPersonal,
			[e.target.name] : e.target.value
		})
	}
	

	const validationDataPersonal = () => {
		let errorDataPersonal={}
		if(!inputDataPersonal.namaDepan){
			errorDataPersonal.namaDepan = "tolong diisi!"
		}
		if(!inputDataPersonal.noHp){
			errorDataPersonal.noHp = "tolong diisi!"
		}
		if(!inputDataPersonal.email){
			errorDataPersonal.email = "tolong diisi!"
		}
		if(!inputDataPersonal.alamat){
			errorDataPersonal.alamat = "tolong diisi!"
		}
		return errorDataPersonal
	}
	
	const handleClickValidationDataPersonal = (e) => {
		e.preventDefault()
		setErrorDataPersonal(validationDataPersonal(inputDataPersonal))
	}
	

	//riwayat pendidikan
	const tambahPendidikan = (e) => {
		e.preventDefault()
		setInputRiwayatPendidikan([...inputRiwayatPendidikan, {
			pendidikan:"",
			jurusan:"",
			tahunLulus:""
	}])
		setErrorRiwayatPendidikan([...errorRiwayatPendidikan, {
			pendidikan:"",
			jurusan:"",
			tahunLulus:""
	}])
	}

	const hapusPendidikan = (e, i) => {
		e.preventDefault()
		const newPendidikan = [...inputRiwayatPendidikan]
		newPendidikan.splice(i, 1)
		setInputRiwayatPendidikan(newPendidikan)
		const newErrorPendidikan = [...errorRiwayatPendidikan]
		newErrorPendidikan.splice(i, 1)
		setErrorRiwayatPendidikan(newErrorPendidikan)
	}

	const handleChangeRiwayatPendidikan = (e, i) => {
		const { name , value } = e.target
		const riwayatPendidikan = [...inputRiwayatPendidikan]
		riwayatPendidikan[i][name] = value
		setInputRiwayatPendidikan(riwayatPendidikan)
		const riwayatPendidikanError = [...inputRiwayatPendidikan]
		riwayatPendidikanError[i][name] = value
		setErrorRiwayatPendidikan(riwayatPendidikanError)
	}

	// const validationRiwayatPendidikan = () => {
	// 	let errorRiwayatPendidikan={}
	// 	if(!inputRiwayatPendidikan.map(res => res.pendidikan).toString()){
	// 		errorRiwayatPendidikan = "tolobf diisi"
	// 	}
		// if(!inputRiwayatPendidikan.map(res => res.jurusan).toString()){
		// 	errorRiwayatPendidikan.map(res => res.jurusan) = msg
		// }
		// if(!inputRiwayatPendidikan.map(res => res.tahunLulus).toString()){
		// 	errorRiwayatPendidikan.map(res => res.tahunLulus) = msg
		// }
	// 	return errorRiwayatPendidikan
	// }
	// console.log(errorRiwayatPendidikan.map(res => res.pendidikan))
	// console.log(inputRiwayatPendidikan.map(res => res.pendidikan))
	// const handleClickValidationRiwayatPendidikan = (e) => {
	// 	e.preventDefault()
	// 	setErrorRiwayatPendidikan(validationRiwayatPendidikan(inputRiwayatPendidikan))
	// }
	//

	//pengalaman kerja
	const tambahPengalaman = (e) => {
		e.preventDefault()
		setInputPengalamanKerja([...inputPengalamanKerja, {
			perusahaan:"",
			posisi:"",
			dari:"",
			sampai:""
	}])
	}

	const hapusPengalaman = (e, i) => {
		e.preventDefault()
		const newPengalaman = [...inputPengalamanKerja]
		newPengalaman.splice(i, 1)
		setInputPengalamanKerja(newPengalaman)
	}

	const handleChangePengalamanKerja = (e, i) => {
		const { name , value } = e.target

		const listPengalaman = [...inputPengalamanKerja]

		listPengalaman[i][name] = value

		setInputPengalamanKerja(listPengalaman)
	}
	//

	//keahlilan
	const tambahKeahlian = (e) => {
		e.preventDefault()
		setInputKeahlian([...inputKeahlian, { keahlian:"" }])}

	const hapusKeahlian = (e, i) => {
		e.preventDefault()
		const newKeahlian = [...inputKeahlian]
		newKeahlian.splice(i, 1)
		setInputKeahlian(newKeahlian)
	}

	const handleChangeKeahlian = (e, i) => {
		const { name , value } = e.target

		const listKeahlian = [...inputKeahlian]

		listKeahlian[i][name] = value

		setInputKeahlian(listKeahlian)
	}
	//

	return (
		<div className="adddata-container">
			<div className="adddata-title">Form submission</div>
			<FormContext.Provider 
			value={[
				page, 
				inputDataPersonal, 
				handleChangeDataPersonal, 
				errorDataPersonal,

				inputRiwayatPendidikan,
				handleChangeRiwayatPendidikan,
				errorRiwayatPendidikan,
				hapusPendidikan,
				tambahPendidikan,

				inputPengalamanKerja,
				handleChangePengalamanKerja,
				hapusPengalaman,
				tambahPengalaman,

				inputKeahlian,
				handleChangeKeahlian,
				hapusKeahlian,
				tambahKeahlian,

				dataKaryawan,
				newDataKaryawan
				]}>
				<StepIndicator/>
				<DataPersonal/>
				<RiwayatPendidikan/>
				<PengalamanKerja/>
				<Keahlian/>
				<InputDetail/>
			</FormContext.Provider>
			<div className="form-button">
				{
					page === 1 ?
					Object.keys(errorDataPersonal).length === 0 ? <input type="button" value="Next" onClick={() => {next()}}/> :
					<input type="button" value="Next" onClick={(e) => {handleClickValidationDataPersonal(e)}}/>
					: null
				}	
				{
					page === 2 ? <input type="button" value="Previous" onClick={() => {prev()}}/> :
					page === 3 ? <input type="button" value="Previous" onClick={() => {prev()}}/> :
					page === 4 ? <input type="button" value="Previous" onClick={() => {prev()}}/> :
					null 
				}
				{
					page === 2 ? 
					<input type="button" value="Next" onClick={() => {next()}}/> : null
				}
				{
					page === 3 ? 
					<input type="button" value="Next" onClick={() => {next()}}/> : null
				}
				{
					page === 4 ? 
					<input type="button" value="Next" onClick={() => {next()}}/> : null
				}
				{
					page === 5 ? 
					<input type="submit" value="Submit" onClick={() => {next()}}/> : null
				}
			</div>
		</div>
	)
}

export default Form