import { Routes, Route } from 'react-router-dom'
import { Footer, Header } from './components'
import {
	MainPage,
	GalleryPage,
	UsPage,
	RelaxPage,
	CalcPage,
	ErrorPage,
} from './pages'
import { ERROR } from './constants'

export const App = () => {
	return (
		<div className="flex flex-col justify-between mx-auto w-[80%] min-h-screen bg-[antiquewhite] shadow-[0_0_15px_black]">
			<Header />
			<Routes>
				<Route path="/" element={<MainPage />} />
				{/* <Route path="/authorization" element={<Authorization />} /> */}
				{/* <Route path="/register" element={<Registration />} /> */}
				{/* <Route path="/users" element={<Users />} /> */}
				{/* <Route path="/profile" element={<ProfilePage />} /> */}
				<Route path="/calc" element={<CalcPage />} />
				<Route path="/gallery" element={<GalleryPage />} />
				<Route path="/us" element={<UsPage />} />
				<Route path="/relax" element={<RelaxPage />} />
				{/* <Route
					render={({ location }) => location.path !== '/relax' && <Footer />}
				/> */}
				{/* <Route path="/post/:id" element={<Post />} /> */}
				{/* <Route path="/post/:id/edit" element={<Post />} /> */}
				<Route path="*" element={<ErrorPage error={ERROR.PAGE_NOT_EXIST} />} />
			</Routes>
			<Footer />
		</div>
	)
}
