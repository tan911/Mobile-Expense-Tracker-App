import { View, Text, Pressable, StyleSheet } from "react-native";

const PrimaryButton = ({ children, onPress, style}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View>
        <Text style={style}>{children}</Text>
      </View>
    </Pressable>
  );
};
export default PrimaryButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75
  },
});
