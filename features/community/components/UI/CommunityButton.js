import { Pressable, View, StyleSheet } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 
import { GlobalColor } from "../../../../constants/color";

function CommunityButton ({onPress}) {
    return (
        <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
            <View style={styles.container}>
                <MaterialIcons name="add-comment" size={24} color="white" />
            </View>
        </Pressable>
    )
}
export default CommunityButton;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.75,
      },
    container: {
        backgroundColor: GlobalColor.colors.blue500,
        padding: 6,
        borderRadius: 10,
    }
})