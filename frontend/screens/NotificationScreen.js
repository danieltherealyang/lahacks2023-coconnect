import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { COLORS } from "../theme";

export default function NotificationScreen({ navigation }) {
  const handleMaybeLater = () => {
    navigation.navigate("SelectRole");
  };
  const handleAllow = () => {
    navigation.navigate("SelectRole")};
  return (
    <View style={styles.container}>
      <View>
        <Text style={{fontSize: 32, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>Allow Notifications?</Text>
        <Text style={{fontSize: 16, color: 'white', textAlign: 'center', margin: "5%"}}>Notification allows us to remind you on new messages and updates!</Text>
      </View>
      <Image style={styles.phone}
        source={require('../assets/Phone.png')}
      />
      <View style={{width: "100%", alignItems: "center"}}>
        <TouchableOpacity style={styles.maybeLaterButton} onPress={handleMaybeLater}>
          <Text style={styles.maybeLaterText}>Maybe Later</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.allowButton} onPress={handleAllow}>
          <Text style={styles.allowText}>Allow</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: COLORS.turquoise
  },
  maybeLaterButton: {
    width: '80%',
    borderRadius: 15,
    marginTop: 8,
    padding: 10,
    borderColor: 'white',
    borderWidth: 2
  },
  maybeLaterText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  allowButton: {
    width: '80%',
    borderRadius: 15,
    marginTop: 8,
    padding: 10,
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: 'white'
  },
  allowText: {
    color: '#397291',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});