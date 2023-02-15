import React, {PureComponent} from 'react';
import {Pressable, Text, View, StyleSheet} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import Colors from '../theme/Colors';

export class PlayButton extends PureComponent {
  render() {
    const {handlePress} = this.props;
    return (
      <Pressable style={styles.button} onPress={() => handlePress()}>
        <Icons name="caret-forward-outline" size={30} color={Colors.white} />
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: 50,
    padding: 10,
    backgroundColor: Colors.primary,
  },
});

export default PlayButton;
