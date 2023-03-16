import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import { GlobalColor } from '../../../constants/color';

function AddComment () {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Questions</Text>
            <View style={styles.textInputContainer}>
                <TextInput placeholder='What do you want to ask?' />
            </View>
            <View style={styles.buttonContainer}>
                <Pressable style={({pressed}) => pressed && styles.pressed}>
                    <View style={styles.customButton}>
                        <Text style={styles.customButtonText}>Ask Now</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    )
} 
export default AddComment;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        paddingHorizontal: 10,
    },
    title: {
        marginBottom: 10,
        fontSize: 16,
    },
    textInputContainer: {
        backgroundColor: GlobalColor.colors.slate50,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    pressed: {
        opacity: 0.75,
    },
    customButton: {
        backgroundColor: GlobalColor.colors.blue500,
        paddingVertical: 11,
        paddingHorizontal: 40,
        borderRadius: 20,
    }, 
    customButtonText: {
        color: GlobalColor.colors.slate50, 
        fontSize: 15,
        fontWeight: 'bold'
    }
})