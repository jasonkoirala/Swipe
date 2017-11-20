import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Deck from './src/components/Deck';
import { Card, Button, CardSection } from './src/common';

const DATA = [
  { id: 1, text: 'Card #1', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
];

class App extends Component {
  renderCard(item) {
    return (
      <Card key={item.id}>
            <CardSection>
              <Image source={{ uri: item.uri }} style={{ height: 200, flex: 1, width: null }} />
            </CardSection>

            <CardSection>
              <Text>{item.text}</Text>
              <Text> I can customise the card </Text>
            </CardSection>

            <CardSection>
              <Button> View Now </Button>
            </CardSection>
      </Card>
    );
  }
  render() {
    return (
      <View>
        <Deck
          data={DATA}
          renderCard={this.renderCard.bind(this)}
        />
      </View>
    );
  }
}

export default App;
