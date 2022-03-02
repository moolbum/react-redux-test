import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import Button from "./components/Button/Button";
import InputText from "./components/InputText/InputText";
import BasicProps from "./pages/BasicProps/BasicProps";
import { actionCreators, State } from "./store";

function Main() {
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney, bankruptMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const amount = useSelector((state: State) => state.bank);

  const buttonCounter = () => {
    console.log("버튼클릭");
  };

  return (
    <div>
      <h1>{amount}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(500)}>Withdraw</button>
      <button onClick={() => bankruptMoney()}>Bankrupt</button>
      <div>
        <BasicProps status="success" />
        <Button counter={buttonCounter} />
        <InputText
          value=""
          onChange={() => {
            console.log("함수");
          }}
        />
      </div>
    </div>
  );
}

export default Main;
