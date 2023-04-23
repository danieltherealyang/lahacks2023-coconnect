import React, { useState } from "react";
import { TouchableOpacity, SafeAreaView, StyleSheet, Modal, View, Text } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import { Card } from '../components/Card'
import { HomeScreenPics } from '../constants/Pics'

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleTapCard = (cardIndex) => {
    console.log(cardIndex);
    setModalVisible(true);
  }

  const closeModal = () => {
    setModalVisible(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Swiper
      style={{borderColor: "red", borderWidth: 5}}
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
        onTapCard={handleTapCard}
        backgroundColor="white"
        cardHorizontalMargin={0}
        stackSize={3}
      />
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={closeModal}
        transparent={true}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>This is an empty modal!</Text>
            <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
              <Text style={styles.modalButtonText}>Close Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
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
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  modalButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#2196F3"
  },
  modalButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  }
})
