/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Styled from 'styled-components/native';

import {StyleSheet, Text, StatusBar} from 'react-native';

import Row from '~/Components/Row';
import Button from '~/Components/Button';
import calculator, {initialState} from '~/Util/calculator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    justifyContent: 'flex-end',
  },
  value: {
    color: '#fff',
    fontSize: 40,
    textAlign: 'right',
    marginRight: 20,
    marginBottom: 10,
  },
});

const App = () => {
  state = initialState;

  handleTap = (type, value) => {
    this.setState(state => calculator(type, value, state));
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <Text style={styles.value}>
          {parseFloat(this.state.currentValue).toLocaleString()}
        </Text>
        <Row>
          <Button
            text="C"
            theme="secondary"
            onPress={() => this.handleTap('clear')}
          />
          <Button
            text="+/-"
            theme="secondary"
            onPress={() => this.handleTap('posneg')}
          />
          <Button
            text="%"
            theme="secondary"
            onPress={() => this.handleTap('percentage')}
          />
          <Button
            text="/"
            theme="accent"
            onPress={() => this.handleTap('operator', '/')}
          />
        </Row>

        <Row>
          <Button text="7" onPress={() => this.handleTap('number', 7)} />
          <Button text="8" onPress={() => this.handleTap('number', 8)} />
          <Button text="9" onPress={() => this.handleTap('number', 9)} />
          <Button
            text="x"
            theme="accent"
            onPress={() => this.handleTap('operator', '*')}
          />
        </Row>

        <Row>
          <Button text="4" onPress={() => this.handleTap('number', 4)} />
          <Button text="5" onPress={() => this.handleTap('number', 5)} />
          <Button text="6" onPress={() => this.handleTap('number', 6)} />
          <Button
            text="-"
            theme="accent"
            onPress={() => this.handleTap('operator', '-')}
          />
        </Row>

        <Row>
          <Button text="1" onPress={() => this.handleTap('number', 1)} />
          <Button text="2" onPress={() => this.handleTap('number', 2)} />
          <Button text="3" onPress={() => this.handleTap('number', 3)} />
          <Button
            text="+"
            theme="accent"
            onPress={() => this.handleTap('operator', '+')}
          />
        </Row>

        <Row>
          <Button
            text="0"
            size="double"
            onPress={() => this.handleTap('number', 0)}
          />
          <Button text="." onPress={() => this.handleTap('number', '.')} />
          <Button
            text="="
            theme="accent"
            onPress={() => this.handleTap('equal')}
          />
        </Row>
      </SafeAreaView>
    </View>
  );
};

export default App;
