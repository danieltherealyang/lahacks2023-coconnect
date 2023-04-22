import React from "react";
import { TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import { Card } from '../components/Card'
import { HomeScreenPics } from '../constants/Pics'

class HomeScreen extends React.Component {
  handleSwiperPress = () => {
    console.log('Swiper was pressed');
  };
    render() {
        return (
          <TouchableOpacity onPress={this.handleSwiperPress}>
            <SafeAreaView style={styles.container}>
             <Swiper
                cards={HomeScreenPics}
                renderCard={Card}
                infinite
                onTapCardDeadZone = {100}
                onTapCard = {(cardIndex) => {console.log(cardIndex)} }
                backgroundColor="white"
                cardHorizontalMargin={0}
                stackSize={3}
                
              >
              </Swiper>
            </SafeAreaView>
          </TouchableOpacity>
      
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'transparent',
    },
  })


export default HomeScreen