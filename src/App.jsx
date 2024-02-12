import { useState } from "react";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

function App() {
  const [values, setValues] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = values.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setValues((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <UserInput
        firstLabel="Initial Investment"
        secondLabel="Annual Investment"
        thirdLabel="Expected Return"
        fourthLabel="Duration"
        onChange={handleChange}
        values={values}
      />
      {!inputIsValid && (
        <p className="center">Please enter a duration grater that zero.</p>
      )}
      {inputIsValid && <Result input={values} />}
    </>
  );
}

export default App;
