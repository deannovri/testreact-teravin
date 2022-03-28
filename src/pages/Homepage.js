import React from 'react'
import { Link } from 'react-router-dom'
import TabelDataKaryawan from '../components/TabelDataKaryawan'

function Homepage() {
	return (
		<div className="homepage-container">
			<div className="homepage-title">Teravin test React.js</div>
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