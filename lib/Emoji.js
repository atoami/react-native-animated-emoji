import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import nodeEmoji from 'node-emoji';

export default Emoji({
  name
}) {
  return (
    <Text>
      {nodeEmoji.get(name)}
    </Text>
  );
}

Emoji.propTypes = {
  name: PropTypes.string.isRequired
};
