import React, { useState } from "react";
import {
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Modal,
  View,
  Text,
  Image,
} from "react-native";
import Swiper from "react-native-deck-swiper";
import { Card } from "../components/Card";
import { HomeScreenPics } from "../constants/Pics";
import {COLORS} from '../theme';

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleOnTapCard = (index) => {
    setCardIndex(index);
    setModalVisible(true);
  };

  const handleNo = () => {
    closeModal();
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
                  source={{ uri: 'https://source.unsplash.com/random/200x200' }}
                  style={[styles.profileImage]}
                />
              </View>
              <Text style={styles.modalText}>
                {HomeScreenPics[cardIndex].title}
              </Text>
              <Text style={styles.modalText}>
                {HomeScreenPics[cardIndex].aboutme}
              </Text>
              <View style={styles.row}>
                <View style={[styles.box, {backgroundColor: "#FDE9E9"}]}>
                  <Text style={[styles.text, {color: "#CD3636", fontWeight: "bold"}]}>Algebra 2 ($32/hr)</Text>
                </View>
                <View style={[styles.box, {backgroundColor: "#D9F9E6"}]}>
                  <Text style={[styles.text, {color: "#399A69", fontWeight: "bold"}]}>Korean ($15/hr)</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={[styles.box, {backgroundColor: "#EFEFEF"}]}>
                  <Text style={[styles.text, {color: "#414141", fontWeight: "bold"}]}>A+ in Algebra 2 ($32/hr)</Text>
                </View>
                <View style={[styles.box, {backgroundColor: "#EFEFEF"}]}>
                  <Text style={[styles.text, {color: "#414141", fontWeight: "bold"}]}>Young Arts Winner</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={[styles.buttonContainer, {backgroundColor: '#8DB3C0'}]}>
                  <View style={styles.iconContainer}>
                    <Image style={styles.icon} source={require('../assets/Coconut.png')} />
                  </View>
                </TouchableOpacity>
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
              </View>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
  );
}

function NoButton() {
  return (
    <TouchableOpacity style={[styles.buttonContainer, {backgroundColor: '#E17272'}]}>
      <View style={styles.iconContainer}>
        <Image source={require('../assets/HalfCoconut.png')} style={styles.icon} />
      </View>
      <View style={styles.noSymbolContainer}>
        <View style={styles.noSymbol}>
          <View style={styles.circle} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
    width: "100%",
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
