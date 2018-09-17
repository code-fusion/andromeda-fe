import React from 'react';
import {Redirect, Route} from 'react-router-dom';

//for the moment I am using authToken from localStorage. We will change this later

export default ({component: Component, ...rest}) => {
	return <Route
		{...rest}
		render={props => 
			localStorage.getItem("authToken") ? (
				<Component {...props} />
			) : (
				<Redirect
					to={{
						pathname: '/login',
						state: {from: props.location}
					}}
				/>
			)
		}
	/>
}