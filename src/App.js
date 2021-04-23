/**
 * React Native를 이용한 android용 apple의 Calculator 미러앱
 * https://github.com/like-apple/iCalculator
 *
 * @format
 * @flow
 */
import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import Styled from 'styled-components/native';

import Row from '~/Components/Row';
import Button from '~/Components/Button';
import Calculator, {initialState} from '~/Util/Calculator';

const SafeArea = Styled.SafeAreaView`
  flex: 1;
`;

const Container = Styled.View`
  flex: 1;
  background-color: #202020;
  justify-content: flex-end;
  padding-left: 20;
  padding-right: 20;
  padding-bottom: 20;
`;

const Result = Styled.Text`
  color: #fff;
  font-size: 60;
  text-align: right;
  margin-right: 20;
  margin-bottom: 10;
`;

const App = () => {
  const [value, setValue] = useState('');
  let state = initialState;

  let handleTap = (type, v) => {
    // this.setState(state => Calculator(type, value, state));
    Calculator(type, v, state);
    setValue(state.currentValue);
  };

  return (
    <SafeArea>
      <StatusBar barStyle="light-content" />
      <Container>
        <Result>{parseFloat(value).toLocaleString()}</Result>
        <Row>
          <Button
            text="AC"
            theme="secondary"
            onPress={() => handleTap('clear')}
          />
          <Button
            text="+/-"
            theme="secondary"
            onPress={() => handleTap('posneg')}
          />
          <Button
            text="%"
            theme="secondary"
            onPress={() => handleTap('percentage')}
          />
          <Button
            text="÷"
            theme="accent"
            onPress={() => handleTap('operator', '/')}
          />
        </Row>

        <Row>
          <Button text="7" onPress={() => handleTap('number', 7)} />
          <Button text="8" onPress={() => handleTap('number', 8)} />
          <Button text="9" onPress={() => handleTap('number', 9)} />
          <Button
            text="x"
            theme="accent"
            onPress={() => handleTap('operator', '*')}
          />
        </Row>

        <Row>
          <Button text="4" onPress={() => handleTap('number', 4)} />
          <Button text="5" onPress={() => handleTap('number', 5)} />
          <Button text="6" onPress={() => handleTap('number', 6)} />
          <Button
            text="-"
            theme="accent"
            onPress={() => handleTap('operator', '-')}
          />
        </Row>

        <Row>
          <Button text="1" onPress={() => handleTap('number', 1)} />
          <Button text="2" onPress={() => handleTap('number', 2)} />
          <Button text="3" onPress={() => handleTap('number', 3)} />
          <Button
            text="+"
            theme="accent"
            onPress={() => handleTap('operator', '+')}
          />
        </Row>

        <Row>
          <Button
            text="0"
            size="double"
            onPress={() => handleTap('number', 0)}
          />
          <Button text="." onPress={() => handleTap('number', '.')} />
          <Button text="=" theme="accent" onPress={() => handleTap('equal')} />
        </Row>
      </Container>
    </SafeArea>
  );
};

export default App;
