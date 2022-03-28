import React, {useContext} from 'react'
import { FormContext } from '../context/Context'

function StepIndicator() {
	
	const result = useContext(FormContext)
	const page = result[0]

	return (
		<div className="step-container">
			<div className="step-container-box">
				<button className={ page === 2 ? "step-buttonDone" :
									page === 3 ? "step-buttonDone" :
									page === 4 ? "step-buttonDone" :
									page === 5 ? "step-buttonDone" :
									"step-button"}></button>
				Data Personal
			</div>
			<div className="step-container-box">
				<button className={ page === 3 ? "step-buttonDone" :
									page === 4 ? "step-buttonDone" :
									page === 5 ? "step-buttonDone" :
									"step-button"}></button>
				Riwayat Pendidikan
			</div>
			<div className="step-container-box">
				<button className={ page === 4 ? "step-buttonDone" :
									page === 5 ? "step-buttonDone" :
									 "step-button"}></button>
				Pengalaman Kerja
			</div>
			<div className="step-container-box">
				<button className={ page === 5 ? "step-buttonDone" : "step-button"}></button>
				Keahlian
			</div>
		</div>
	)
}

export default StepIndicator