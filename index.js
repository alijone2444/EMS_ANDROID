import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import rootReducer from './src/ReduxStore/rootreducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux'; // Import createStore from redux

// Create the Redux store
const store = createStore(rootReducer);

// Wrap the AppRegistry.registerComponent inside Provider component
const ReduxApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

// Register the component with AppRegistry
AppRegistry.registerComponent(appName, () => ReduxApp);
