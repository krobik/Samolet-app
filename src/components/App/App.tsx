import { useEffect, Suspense } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { Layout, Row, Col } from 'antd'

import Header from '../Header'
import Footer from '../Footer'
import NotFound from '../NotFound'
import Loader from '../Loader'
import { getData } from '../../actions/getData'
import routes from '../../routes'

const { Content } = Layout

const App = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getData())
	}, [dispatch])

	return (
		<>
			<Header />

			<div className="content">
				<Suspense fallback={<Loader />}>
					<Layout style={{ height: "100%" }}>
						<Row style={{ height: "100%" }}>
							<Col span={16} offset={4}>
								<Content style={{ height: "100%" }} >

									<Switch>
										{routes.map(({ ...props }, index) => {
											return <Route key={index} {...props} />
										})}
										<Route component={NotFound} />
									</Switch>

								</Content>
							</Col>
						</Row>
					</Layout>
				</Suspense>
			</div>

			<Footer />
		</>
	)
}

export default App