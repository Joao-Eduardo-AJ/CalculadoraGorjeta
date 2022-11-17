import * as Styled from './styles';
import { Input } from '../../components/Input/Index';
import { Button } from '../../components/Button/Index';
import { useState, FormEvent } from 'react';

export function Main() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);
  const [gorjeta, setGorjeta] = useState('');

  function dratement() {
    setCount(count - 1);
  }

  function add() {
    setCount(count + 1);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    setValue(prevState => prevState + 2);
  }

  //
  //
  //
  //
  //

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <h1>Calculadora de gorjetas</h1>
      <div className="inputContainer">
        <Input
          label="Total da Conta (R$):"
          type="text"
          inputMode="numeric"
          placeholder="0.00"
        />
        <Input
          label="Gorjeta (%):"
          type="text"
          inputMode="numeric"
          placeholder="00"
          value={gorjeta}
          onChange={event => console.log(event)}
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
              value={count}
              onChange={_ => setValue(0)}
            />
            <Button onClick={add}>+</Button>
          </div>
        </div>
        <div className="container">
          <h2>Total de gorjetas</h2>
          <Input
            label=""
            type="text"
            inputMode="numeric"
            placeholder=""
            id="res"
            className="count"
            value={'R$ ' + value}
          />
        </div>
      </footer>
    </Styled.Form>
  );
}
