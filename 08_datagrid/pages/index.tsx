import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import 'bootstrap/dist/css/bootstrap.min.css';

import { rows, columns } from '../lib/data'

const MaterialGridCompo = () => {
	return (
		<div>
			<Box sx={{ height: 700, width: 1000 }}>
				<DataGrid
					rows={rows}
					columns={columns}
					pageSize={20}
					rowsPerPageOptions={[20]}
					checkboxSelection
					disableSelectionOnClick
					experimentalFeatures={{ newEditingApi: true }}
				/>
			</Box>
		</div>
	)
}

export default function Home() {
	// react Hook For State Handler
	const [data, setData] = useState(null);

	// Fetch Function
	/*fetch('got.json').then(
		function (res) {
			const data = res.json();
			console.log(data);
			return data;
		},
	).then(function (data) {
		// store Data in State Data Variable
		setData(data);
	}).catch(
		function (err) {
			console.log(err, ' error');
		},
	);*/

	return (
		<>
		<div className={styles.container}>

			<h1 className={styles.title}>
			Dynamic
			</h1>
			<main className={styles.main}>
			<MaterialGridCompo />
			</main>

			<footer className={styles.footer}>
			</footer>
		</div>
		<br></br>
		</>
	)
}