import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Screen } from './app/components';
import { ListItem, Icon } from './app/components';

export default function App() {
  return (
    <GestureHandlerRootView>
      <Screen>
        <ListItem
          title="My title"
          ImageComponent={
            <Icon
              name="email"
              size={40}
              backgroundColor="red"
              iconColor="white"
            />
          }
        />
      </Screen>
    </GestureHandlerRootView>
  );
}
