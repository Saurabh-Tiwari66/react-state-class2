function formSubmit(event) {
  event.preventDefault(); // stops page refresh
  console.log("saurabh");
}

export default function Form() {
  return (
    <form onSubmit={formSubmit}> 
      <input placeholder="submit event" />
      <button type="submit">Submit Event</button>
    </form>
  );
}
