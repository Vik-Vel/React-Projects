export function Button() {
  const ButtonTitle = () => {
    const availableMoney = 1001;
    const text =
      availableMoney > 1000 ? "more than 1000" : "less or equal than 1000";

    return <h3>{text}</h3>;
  };
  return (
    <button onClick={() => alert("You have clicked")}>
      <ButtonTitle />
    </button>
  );
}

export function ButtonSecondVariant() {
  const availableMoney = 1001;
  const MyComp = () => <h3>My Component</h3>; // Create Component
  const MyCompComplex = () => {
    return <h3>My Complex Component</h3>;
  }; // Create Complex Component, but its better to be separated in other tsx file, but yeah we can do this
  return (
    <button onClick={() => alert("You have clicked")}>
      <MyComp />
      <MyCompComplex />
      {availableMoney > 1000 ? "more than 1000" : "less or equal than 1000"}
    </button>
  );
}
