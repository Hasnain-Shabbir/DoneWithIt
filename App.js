import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Screen, AppTextInput } from './app/components';

export default function App() {
  return (
    <GestureHandlerRootView>
      <Screen>
        <AppTextInput placeholder="Username" icon="email" />
      </Screen>
    </GestureHandlerRootView>
  );
}
