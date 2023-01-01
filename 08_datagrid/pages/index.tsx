import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import { rows, columns } from '../lib/data'

const MaterialGridCompo = () => {
	return (
		<div>
			<Box sx={{ height: 500, width: 900 }}>
				<DataGrid
					rows={rows}
					columns={columns}
					pageSize={5}
					rowsPerPageOptions={[5]}
					checkboxSelection
					disableSelectionOnClick
					experimentalFeatures={{ newEditingApi: true }}
				/>
			</Box>
		</div>
	)
}

export default function Home() {
  return (
	<>
	  <div className={styles.container}>

		<h1 className={styles.title}>
		  Datagrid Demo
		</h1>
		<main className={styles.main}>
		  <MaterialGridCompo />
		</main>

		<footer className={styles.footer}>
		  <a
			href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
			target="_blank"
			rel="noopener noreferrer"
		  >
			Powered by{' '}
			<span className={styles.logo}>
			  <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
			</span>
		  </a>
		</footer>
	  </div>
	  <br></br>
	  <br></br>
	  <br></br>
	  <br></br>
	  <br></br>
	</>
  )
}