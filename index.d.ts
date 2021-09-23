declare module 'react-native-animated-emoji' {
    import { StyleProp, ViewStyle } from 'react-native';
    type AnimatedEmojiProps = {index: number, style: StyleProp<ViewStyle>, name: string, size: number, duration: number, onAnimationCompleted?: () => void}
    export class AnimatedEmoji extends React.Component<AnimatedEmojiProps> {}
}