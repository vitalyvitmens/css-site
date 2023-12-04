import { Routes, Route } from 'react-router-dom'
import { Header } from './components'
import { Main } from './pages/Main'

export const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Main />} />
				{/* <Route path="/authorization" element={<Authorization />} /> */}
				{/* <Route path="/register" element={<Registration />} /> */}
				{/* <Route path="/users" element={<Users />} /> */}
				{/* <Route path="/profile" element={<ProfilePage />} /> */}
				{/* <Route path="/post" element={<Post />} /> */}
				{/* <Route path="/post/:id" element={<Post />} /> */}
				{/* <Route path="/post/:id/edit" element={<Post />} /> */}
				{/* <Route path="*" element={<Error error={ERROR.PAGE_NOT_EXIST} />} /> */}
			</Routes>
		</>
	)
}
