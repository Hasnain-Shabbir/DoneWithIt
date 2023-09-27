import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Messages } from './app/screens';

export default function App() {
  return (
    <GestureHandlerRootView>
      <Messages />
    </GestureHandlerRootView>
  );
}
