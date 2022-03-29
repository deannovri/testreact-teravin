import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import TabelDataKaryawan from '../components/TabelDataKaryawan'
import { KaryawanContext } from '../context/Context'

function Homepage() {

	const result = useContext(KaryawanContext)
	const data = result[0]

	return (
		<div className="homepage-container">
			<h1>Teravin test React.js</h1>
			{
				data.length === 0 ? <div className="add-data-please">Data masih kosong silahkan klik + Add data</div> : null
			}
			<span>
				<Link to='/form'>
					<button className="homepage-add-button">+ Add data</button>
				</Link>
			</span>
			<TabelDataKaryawan/>
		</div>
	)
}

export default Homepage