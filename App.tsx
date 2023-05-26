import {NavigationContainer} from '@react-navigation/native';
import AppRoutes from './src/routes/AppRoutes';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </>
  );
};

export default App;
