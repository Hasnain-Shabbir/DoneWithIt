import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ListingScreen } from './app/screens';

export default function App() {
  return (
    <GestureHandlerRootView>
      <ListingScreen />
    </GestureHandlerRootView>
  );
}
