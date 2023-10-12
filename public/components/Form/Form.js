export default function Form({ obSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    event.target.reset();
  }
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        gap: "1rem",
      }}
    >
      <h2>Appointment Request</h2>
      <label htmlFor="first-name">First Name:</label>
      <input
        id="fname"
        name="fname"
        placeholder="type your first name"
        type="text"
        required
      />
      <label htmlFor="last-name">Last Name:</label>
      <input
        id="lname"
        name="lname"
        placeholder="type your last name"
        type="text"
        required
      />
      <label htmlFor="e-mail">E-mail:</label>
      <input
        id="email"
        name="eimal"
        placeholder="random@mail.com"
        type="text"
        required
      />
      <label htmlFor="instagram">Instagram:</label>
      <input id="instagram" name="instagram" placeholder="@..." type="text" />
      <label htmlFor="placement-ideas">Placement ideas:</label>
      <select id="placement" name="placement">
        <option value="choose">choose</option>
        <option value="upper-lower-arm-torso">lower arm, leg, torso</option>
        <option value="hands">hand</option>
        <option value="foot">foot</option>
        <option value="shoulder">shoulder</option>
        <option value="skull">skull</option>
        <option value="face">face</option>
        <option value="other">other</option>
      </select>
      <label htmlFor="tattoo-size">Approximate size in cm:</label>
      <input
        type="number"
        id="tattoo-size"
        name="tattoo-size"
        min="5"
        max="100"
        placeholder="cm x cm"
      />
      <label htmlFor="tattoo-budget">Maximum Budget:</label>
      <input
        type="number"
        id="tattoo-budget"
        name="tattoo-budget"
        min="100"
        max="2000"
        placeholder="in €"
      />
      <label htmlFor="references">References:</label>
      <textarea
        id="references"
        name="references"
        rows="6"
        cols="50"
        placeholder="Please be explicit as possible. you are encouraged to reference an existing work as well as a nonexisting idea"
      />
      <label htmlFor="book-date">Choose the wish-date:</label>
      <input
        type="date"
        id="book-date"
        name="book-date"
        min="2023-01-01"
        max="2025-12-31"
      />
      <label htmlFor="references">Health conditions:</label>
      <textarea
        id="diseases"
        name="diseases"
        rows="2"
        cols="50"
        placeholder="Please indicate if you have any medical conditions, as it may be necessary for me to take appropriate measures to ensure your well-being and mine. Your response will be kept confidential.(e.g. low blood sugar, bloodborne diseases, ..)"
      />
      <button>Submit</button>
    </form>
  );
}
