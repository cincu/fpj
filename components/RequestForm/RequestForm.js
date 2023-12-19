export default function RequestForm({ onSubmit, formName }) {
  //when form is submitted 2 actions : 1 email for the customer 1 email for jumi
  return (
    <form className="form--request">
      <label htmlFor="email">E-mail address</label>
      <input></input>
      <label htmlFor="name">Name</label>
      <input></input>
      <label htmlFor="Surname">Surname</label>
      <input></input>
      <label htmlFor="">Germany/EU/Outside of Eu</label>
      <input></input>
      <label htmlFor="address">Street Address</label>
      <input></input>
      <label htmlFor="number">Phone Number</label>
      <input></input>
      <button>Request</button>
    </form>
  );
}
