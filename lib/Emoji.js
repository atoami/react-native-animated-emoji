import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import nodeEmoji from 'node-emoji';

export default class Emoji extends React.Component {

  static propTypes = {
    name: PropTypes.string.isRequired
  };

  render() {
    return (
      <Text>
        {nodeEmoji.get(this.props.name)}
      </Text>
    );
  }
}
