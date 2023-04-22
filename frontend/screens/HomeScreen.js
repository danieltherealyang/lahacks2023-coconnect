import React from "react";
import { TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import { Card } from '../components/Card'
import { HomeScreenPics } from '../constants/Pics'

export default function HomeScreen() {
  const handleSwiperPress = () => {
    console.log('Swiper was pressed');
  };

  return (
    <TouchableOpacity onPress={handleSwiperPress}>
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
          onTapCard={(cardIndex) => {console.log(cardIndex)}}
          backgroundColor="white"
          cardHorizontalMargin={0}
          stackSize={3}
        />
      </SafeAreaView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
})