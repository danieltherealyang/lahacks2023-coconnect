import React, { useState } from "react";
import {
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Modal,
  View,
  Text,
  Image,
  ScrollView
} from "react-native";
import Swiper from "react-native-deck-swiper";
import { Card } from "../components/Card";
import { HomeScreenPics } from "../constants/Pics";
import {COLORS} from '../theme';

export default function HomeScreen({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [congratsVisible, setCongratsVisible] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);

  const closeModal = () => {
    setModalVisible(false);
  };

  const closeCongrats = () => {
    setCongratsVisible(false);
  };

  const handleOnTapCard = (index) => {
    setCardIndex(index);
    setModalVisible(true);
  };

  const handleNo = () => {
    closeModal();
  };

  const handleYes = () => {
    setCongratsVisible(true);
  };

  const handleContinue = () => {
    closeCongrats();
    closeModal();
    navigation.navigate("Chat");
  };

  return (
      <SafeAreaView style={styles.container}>
        <Swiper
          cards={HomeScreenPics}
          renderCard={(card, index) => (
            <Card
              key={`${card.id}-${index}`}
              id={card.id}
              pic={card.pic}
              title={card.title}
              caption={card.caption}
              aboutme={card.aboutme}
            />
          )}
          onTapCardDeadZone={100}
          onTapCard={handleOnTapCard}
          backgroundColor="transparent"
          cardHorizontalMargin={0}
          stackSize={3}
        />
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.profilePictureContainer}>
                <Image
                  source={HomeScreenPics[cardIndex].pic}
                  style={[styles.profileImage]}
                />
              </View>
              <Text style={styles.modalText}>
                {HomeScreenPics[cardIndex].title}
              </Text>
              <Text style={styles.modalText}>
                {HomeScreenPics[cardIndex].aboutme}
              </Text>
              <ScrollView style={{width: "100%"}} contentInset={{bottom: 150}}>
                <View style={{width: "100%", justifyContent: 'right'}}>
                  <Text style={{color: COLORS.turquoise, fontWeight: 'bold', fontSize: 14}}>Available Courses</Text>
                </View>
                <View style={styles.row}>
                  <View style={[styles.box, {backgroundColor: "#FDE9E9"}]}>
                    <Text style={[styles.text, {color: "#CD3636", fontWeight: "bold"}]}>Algebra 2 ($32/hr)</Text>
                  </View>
                  <View style={[styles.box, {backgroundColor: "#D9F9E6"}]}>
                    <Text style={[styles.text, {color: "#399A69", fontWeight: "bold"}]}>Korean ($15/hr)</Text>
                  </View>
                </View>
                <View style={{width: "100%", justifyContent: 'right'}}>
                  <Text style={{color: COLORS.turquoise, fontWeight: 'bold', fontSize: 14}}>Experience</Text>
                </View>
                <View style={styles.row}>
                  <View style={[styles.box, {backgroundColor: "#EFEFEF"}]}>
                    <Text style={[styles.text, {color: "#414141", fontWeight: "bold"}]}>A+ in Algebra 2 ($32/hr)</Text>
                  </View>
                  <View style={[styles.box, {backgroundColor: "#EFEFEF"}]}>
                    <Text style={[styles.text, {color: "#414141", fontWeight: "bold"}]}>Young Arts Winner</Text>
                  </View>
                </View>
                <View style={{width: "100%", justifyContent: 'right'}}>
                  <Text style={{color: COLORS.turquoise, fontWeight: 'bold', fontSize: 14}}>Reviews</Text>
                </View>
                <Image
                  style={{width: "100%", height: "50%", resizeMode: 'contain'}}
                  source={require('../assets/Reviews.png')}
                />
              </ScrollView>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={[styles.buttonContainer, {backgroundColor: '#E17272'}]} onPress={handleNo}>
                  <View style={styles.iconContainer}>
                    <Image source={require('../assets/HalfCoconut.png')} style={styles.icon} />
                  </View>
                  <View style={styles.noSymbolContainer}>
                    <View style={styles.noSymbol}>
                      <View style={styles.circle} />
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonContainer, {backgroundColor: '#8DB3C0'}]} onPress={handleYes}>
                  <View style={styles.iconContainer}>
                    <Image style={styles.icon} source={require('../assets/Coconut.png')} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Modal
            animationType="fade"
            transparent={true}
            visible={congratsVisible}
            onRequestClose={closeCongrats}
          >
            <TouchableOpacity onPress={closeCongrats} style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: 'rgba(0, 0, 0, 0.50)'}}/>
            <View style={styles.congratsModalContainer}>
              <Image style={{width: 200, height: 200, position: "absolute", top: 0, marginTop: -100}} source={require('../assets/HalfCoconut.png')}/>
              <Text style={{color: "#397291", fontSize: 20, fontWeight: 'bold', marginTop: 20, marginBottom: 20}}>Congratulations! You were matched!</Text>
              <TouchableOpacity onPress={handleContinue} style={styles.continueButton}>
                <Text style={styles.continueButtonText}>Continue</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </Modal>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  continueButtonText: {
    color: "white",
    fontWeight: 'bold'
  },
  continueButton: {
    backgroundColor: 'black',
    alignItems: 'center',
    padding: 12,
    width: "80%",
    borderRadius: 15,
    marginBottom: 20
  },
  congratsModalContainer: {
    position: "absolute", 
    top: "50%", 
    left: "50%", 
    width: 380, 
    height: 200, 
    marginLeft: -190, 
    marginTop: -100, 
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 20, marginLeft: 10, marginRight: 10
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#fff',
    backgroundColor: 'transparent',
    resizeMode: "contain"
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  row: {
    backgroundColor: "#CFCFCF",
    borderRadius: 15,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    margin: 5,
    alignItems: "center"
  },
  box: {
    width: "100%",
    margin: 5,
    padding: 10,
    borderRadius: 20,
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.blue
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "80%",
  },
  modalText: {
    textAlign: "center",
  },
  modalButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#2196F3",
  },
  modalButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  profilePictureContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: "hidden"
  },
  profileView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  profileImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  }
})
