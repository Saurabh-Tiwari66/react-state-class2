function printHello(event) {
  console.log("Hello");
  console.log(event )
}

function printBye() {
  console.log("bye");
}

function handleDoubleClick() {
  console.log("ram");
}

export default function Button() {
  return (
    <div>
      <button onClick={printHello}>Click me!</button>

      <p onMouseOver={printBye}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quibusdam
        culpa pariatur et reprehenderit ratione, officiis nobis. Aliquid nam fugit
        repellat vitae. Accusamus dignissimos ipsam vero consectetur quidem sed officia.
      </p>

      <button onDoubleClick={handleDoubleClick}>Double Click me!</button>
    </div>
  );
}
