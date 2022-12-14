import React from 'react';
import {Provider} from 'react-redux';
import {AppNavigation} from './src/navigation';
import store from './src/store/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
