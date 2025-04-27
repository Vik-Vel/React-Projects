export function Button() {
  const myVariable = 1000;
  return (
    <button onClick={() => alert("You have clicked")}>
      Press {myVariable}
    </button>
  );
}
