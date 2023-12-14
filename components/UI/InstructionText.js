import {Text, StyleSheet} from 'react-native';
function InstructionText({children, style}){
    return  <Text style={[styles.textInstruction, style]}>{children}</Text>
}
export default InstructionText;

const styles = StyleSheet.create({

    textInstruction: {
        fontFamily: 'open-sans',
        fontSize: 25,
        color: "#ddb52f",
      },
});