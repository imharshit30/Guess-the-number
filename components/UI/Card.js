import { StyleSheet,View } from "react-native";

function Card({children}) {
  return <View style={styles.card}>{children}</View>;
}
export default Card;

const styles = StyleSheet.create({
  // style which is done in whole purple container
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginHorizontal: 24,
    marginTop: 36,
    backgroundColor: "#72063C",
    borderRadius: 8,
    elevation: 4, // it makes shadow around the container in android
    //below 4 properties are of ios, it makes shadow around the container
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
});
