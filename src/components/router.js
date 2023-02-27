import React from 'react'
import { HomePage } from '../screens/home'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { AboutUsPage } from '../screens/about.us'



export const MyRouter = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage/>} />
				<Route path="/aboutus" element={<AboutUsPage/>} />
			</Routes>
		</Router>
	)
}
