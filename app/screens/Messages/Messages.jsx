import React, { useState } from 'react';
import { FlatList } from 'react-native';

import {
  ListItem,
  Screen,
  ListItemSeparator,
  ListItemDeleteAction,
} from '../../components';

const initialMessages = [
  {
    id: 1,
    title: 'Mosh Hamedani',
    description: 'Hey! Is this item still available?',
    image: require('../../assets/mosh.jpg'),
  },
  {
    id: 2,
    title: 'Mosh Hamedani',
    description:
      "I'm interested in this item. When will you be able to post it?",
    image: require('../../assets/mosh.jpg'),
  },
];

const Messages = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('Message Selected', item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              title: 'T2',
              description: 'D2',
              image: require('../../assets/mosh.jpg'),
            },
          ])
        }
      />
    </Screen>
  );
};

export default Messages;
