import * as Styled from './styles';
import { Input } from '../../components/Input/Index';
import { Button } from '../../components/Button/Index';
import { useState, FormEvent } from 'react';

export function Home() {
  const [counter, setCounter] = useState(1);
  const [value, setValue] = useState(0);
  const [gorjeta, setGorjeta] = useState('');
  const [conta, setConta] = useState('');

  function dratement() {
    // eslint-disable-next-line no-unused-expressions
    counter > 1 ? setCounter(counter - 1) : '';
  }

  function increment() {
    setCounter(counter + 1);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setValue(_ => (+conta * (+gorjeta / 100)) / counter);
  }

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <h1>Calculadora de gorjetas</h1>
      <div className="inputContainer">
        <Input
          label="Total da Conta (R$):"
          type="text"
          inputMode="numeric"
          placeholder="0000"
          className="campos"
          value={conta}
          onChange={event => setConta(event.target.value)}
          onKeyUp={handleSubmit}
        />
        <Input
          label="Gorjeta (%):"
          type="text"
          inputMode="numeric"
          placeholder="00"
          className="campos"
          value={gorjeta}
          onChange={event => setGorjeta(event.target.value)}
          onKeyUp={handleSubmit}
        />
      </div>
      <footer>
        <div className="counterContainer">
          <h2>Pessoas</h2>
          <div className="componentsContainer">
            <Button onClick={dratement}>-</Button>
            <Input
              label=""
              type="text"
              inputMode="numeric"
              placeholder=""
              className="count"
              value={counter}
              onChange={_ => setValue(0)}
            />
            <Button onClick={increment}>+</Button>
          </div>
        </div>
        <div className="container">
          <h2 id="txtRes">Total de gorjetas / pessoa</h2>
          <Input
            label=""
            type="text"
            inputMode="numeric"
            placeholder=""
            id="res"
            className="count"
            value={'R$ ' + value.toFixed(2)}
          />
        </div>
      </footer>
    </Styled.Form>
  );
}
