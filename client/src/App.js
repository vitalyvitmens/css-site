import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Footer, Header } from './components'
import {
	MainPage,
	GalleryPage,
	UsPage,
	RelaxPage,
	CalcPage,
	ErrorPage,
	AuthorizationPage,
	UsersPage,
} from './pages'
import { ERROR, ROLE } from './constants'
import { RegistrationPage } from './pages/RegistrationPage'
import { checkAccess } from './utils'

export const App = () => {
	const authUser = useSelector(({ user }) => user)
	return (
		<div className="flex flex-col justify-between mx-auto w-[80%] h-full min-h-screen bg-[antiquewhite] shadow-[0_0_15px_black]">
			<Header />
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/login" element={<AuthorizationPage />} />
				<Route path="/register" element={<RegistrationPage />} />
				<Route
					path="/users"
					element={
						checkAccess([ROLE.ADMIN], authUser.role) ? (
							<UsersPage />
						) : (
							<ErrorPage error={ERROR.ACCESS_DENIED} />
						)
					}
				/>
				<Route path="/calc" element={<CalcPage />} />
				<Route path="/gallery" element={<GalleryPage />} />
				<Route path="/us" element={<UsPage />} />
				<Route path="/relax" element={<RelaxPage />} />
				{/* <Route path="/profile" element={<ProfilePage />} /> */}
				{/* <Route path="/post/:id" element={<Post />} /> */}
				{/* <Route path="/post/:id/edit" element={<Post />} /> */}
				<Route path="*" element={<ErrorPage error={ERROR.PAGE_NOT_EXIST} />} />
			</Routes>
			<Footer />
		</div>
	)
}
