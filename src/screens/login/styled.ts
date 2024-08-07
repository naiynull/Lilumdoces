import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    title: {
     fontSize: 30,
     fontWeight: "bold",
     textAlign: 'center',
     color: colors.preto
    },

    formRow: {
        margin: 10,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 0.7,
        borderColor: colors.principal,
        borderRadius: 5
    },
    icon: {
        fontSize: 28,
        color: colors.preto,
        borderRadius: 5
    },

    input: {
        fontSize: 18,
        padding: 10,
        width: "70%"
    },

   
})