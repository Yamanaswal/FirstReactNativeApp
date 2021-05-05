import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";

export default function CreatePostScreen({ navigation }) {

  const [postText, setPostText] = useState('');

  return (
    <View>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={function() {
          // Pass and merge params back to home screen
          navigation.navigate({
            name: 'Home',
            params: { post: postText },
            merge: true,
          });
        }}
      />
    </View>
  );
}
