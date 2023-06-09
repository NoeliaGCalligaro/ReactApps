import { useAppContext } from "./calculatorState";

export default function Screen() {
  const calculator = useAppContext();

  return (
    <div className="calculatorScreen">
      <div>
       {calculator.memory}   {calculator.operation}
      </div>
      <div className="calculatorCurrentValue">
        {calculator.currentValue}
        {calculator.isDecimal ? "." : ""}
      </div>
    </div>
  );
}
