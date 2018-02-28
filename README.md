# Animated Floating Reactions
Animated Floating Reactions like Facebook based on [node-emoji](https://github.com/omnidan/node-emoji).

### Installation

```sh
$ npm install --save react-native-animated-emoji
```
or

```sh
yarn add react-native-animated-emoji
```

### Usage

```javascript
import { AnimatedEmoji } from 'react-native-animated-emoji';

<AnimatedEmoji
    index={'emoji.key'} // index to identity emoji component
    style={{ bottom: 200 }} // start bottom position
    name={'sweat_smile'} // emoji name
    size={30} // font size
    duration={4000} // ms
    onAnimationCompleted={this.onAnimationCompleted} // completion handler
/>
```

![animated-emoji](https://user-images.githubusercontent.com/15665426/36794524-513109ea-1cec-11e8-898c-d0d17be4f079.gif)
