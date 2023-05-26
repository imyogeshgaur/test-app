import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import MainScreen from '../screens/MainScreen';

const Stack = createNativeStackNavigator();
const AppRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{
          title: 'Github Profiler',
          headerStyle: {
            backgroundColor: 'rgb(150, 240, 235)',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Github Profiler',
          headerStyle: {
            backgroundColor: 'rgb(121, 216, 160)',
          },
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export default AppRoutes;
