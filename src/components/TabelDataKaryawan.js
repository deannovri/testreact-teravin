import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { KaryawanContext } from '../context/Context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

function TabelDataKaryawan() {

	const result = useContext(KaryawanContext)
	const data = result[0]
	
	return (
		<div className="table-container">
			<table className="table-container">
			<thead className="table-header">
				<tr>
					<th className="table-header-id">ID No</th>
					<th className="table-header-nama">Nama</th>
					<th className="table-header-alamat">Alamat</th>
					<th className="table-header-detail"></th>
				</tr>
			</thead>
			<tbody className="table-data">
			{
				data.map(res => {
					return (
						<tr key={res.id}>
							<td className="td1">{res.id}</td>
							<td className="td2">{res.namaDepan}</td>
							<td className="td3">{res.alamat}</td>
							<td>
								<Link to={`/${res.id}`}>
									<FontAwesomeIcon icon={faEye} size={"xl"} style={{ color: "lightgrey" }} />
								</Link>
							</td>
						</tr>
						)
				})
			}
			</tbody>
		</table>
		</div>
	)
}

export default TabelDataKaryawan