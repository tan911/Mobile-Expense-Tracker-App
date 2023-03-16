import { Ionicons, EvilIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet } from 'react-native';

function IconButton({ icon, color, onPress }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
      <Ionicons name={icon} size={18} color={color} />
    </Pressable>
  );
}
export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
