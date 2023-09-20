import React from 'react';
import { FlatList } from 'react-native';

import { ListItem, Screen, ListItemSeparator } from '../../components';

const messages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../../assets/mosh.jpg'),
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../../assets/mosh.jpg'),
  },
];

const Messages = () => {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.subTsitle}
            image={item.image}
            onPress={() => console.log('Message Selected', item)}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
      />
    </Screen>
  );
};

export default Messages;
