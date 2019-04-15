import React, { Component } from 'react';
import Example from './test/example';
// import { Provider } from 'react-redux';
import store from './store'

class App extends Component {
	render() {
		return (
			// <Provider store={store}>
				<Example />
			// </Provider>
		);
	}
}

export default App;
