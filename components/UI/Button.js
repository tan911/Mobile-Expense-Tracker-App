import { Pressable, View, StyleSheet, Text } from "react-native";
import { GlobalColor } from "../../constants/color";

const Button = ({ children, onPress, mode, style }) => {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text
            style={[styles.buttonText, mode === "cancel" && styles.flatText]}
          >
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },

  button: {
    borderRadius: 4,
    padding: 8,
    // backgroundColor: GlobalColor.colors.blue500,
  },

  flat: {
    backgroundColor: GlobalColor.colors.blue500,
    borderRadius: 50,
    padding: 12,
    elevation: 1,
    color: GlobalColor.colors.slate50,
  },

  buttonText: {
    color: GlobalColor.colors.slate50,
    textAlign: "center",
  },

  flatText: {
    backgroundColor: GlobalColor.colors.slate50,
    borderRadius: 50,
    padding: 12,
    // elevation: 1,
    color: GlobalColor.colors.zinc900,
  },
});
