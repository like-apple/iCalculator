/**
 * React Native를 이용한 android용 apple의 Calculator 미러앱
 * https://github.com/like-apple/iCalculator
 *
 * @format
 * @flow
 */
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Styled from 'styled-components/native';

import Row from '~/Components/Row';
import Button from '~/Components/Button';
import Calculator, {initialState} from '~/Util/Calculator';

const Container = Styled.View`
  flex: 1;
  background-color: #202020;
  justify-content: flex-end;
`;

const Value = Styled.Text`
  color: #fff;
  font-size: 40;
  text-align: right;
  margin-right: 20;
  margin-bottom: 10;
`;

const App = () => {
  state = initialState;

  handleTap = (type, value) => {
    this.setState(state => Calculator(type, value, state));
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <Value>{parseFloat(this.state.currentValue).toLocaleString()}</Value>
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
    </Container>
  );
};

export default App;
