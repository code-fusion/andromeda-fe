import Home from './Home/Home';
import Login from './Login/Login';

export default [
	{
		path: '/',
		component: Home,
		exact: true,
		private: true
	},
	{
		path: '/login',
		component: Login
	}
]