import React, { useReducer } from 'react';
import Example from './test/example';
import example, { defaultState } from './reducer/example';

export const ExampleContext = React.createContext(null);

const App = () => {

	const [exampleState, exampleDispatch] = useReducer(example, defaultState);

	return (
		<ExampleContext.Provider value={{exampleState, dispatch: exampleDispatch}}>
			<Example />
		</ExampleContext.Provider>
	);
}

export default App;
