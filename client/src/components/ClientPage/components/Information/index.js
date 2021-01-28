import { Affilete } from "./Affilete";
import { PaymentStatus } from "./PaymentStatus";
import { Text } from "./text";
import React from "react";

export const Information = () => {
  return (<>
    <Affilete status={'Affilete'} type={'instagram'}/>
    <PaymentStatus status={'Статус Платiжа'} type={'Виконаний'}/>
    <Text/>
  </>
  );
};