import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Registro from './src/pages/register/registro';
import Chats from './src/pages/login/inicio';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="inicio" options={{ headerShown: false }} component={Chats} />
        <Stack.Screen name="registro" options={{ headerShown: false }} component={Registro} /></Stack.Navigator>
    </NavigationContainer>
  );
}