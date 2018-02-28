# react-native-animated-emoji
Animated Floating Reactions like Facebook

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

export const App = () => (
  <AnimatedEmoji
    key={emoji.key}
    index={emoji.key}
    ref={ref => this._emojis[emoji.key] = ref}
    style={{ bottom: emoji.yPosition }}
    name={emoji.name}
    size={emoji.size}
    duration={emoji.duration}
    onAnimationCompleted={this.onAnimationCompleted}
  />
)
```
### Animated Floating Reactions
![emoji]()
