// import { useState } from "react";
import Link from "next/link";
export default function Form({ onSubmit }) {
  // const [formData, setFormData] = useState[{ x }];
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
    event.target.reset();
  }
  return (
    <div className="container">
      <form
        action="canancansucaner@gmail.com"
        method="post"
        onSubmit={handleSubmit}
      >
        <h2>Appointment</h2>
        <h3>Payment</h3>
        <p>
          Use this link to transfer the deposit. Later you can return this page,
          fill and submit the appointment request form. Any submitted form
          without having a corresponding payment reference will be disregarded.
        </p>
        <fieldset>
          <legend>Payment Link</legend>
          <Link href="https://www.paypal.com/paypalme/jumisu4u/100EUR">
            click here to be redirected
          </Link>
        </fieldset>
        <h3>Tattoo appointment request</h3>
        <p>
          Fill out this as explicit as possible. Seperate queries via e-mail
          will not be responded.
        </p>
        <fieldset>
          <legend>Contact Information</legend>
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
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            name="email"
            placeholder="random@mail.com"
            type="text"
            required
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <label htmlFor="instagram">Instagram:</label>
          <input
            id="instagram"
            name="instagram"
            placeholder="@..."
            type="text"
          />
        </fieldset>
        <fieldset
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <legend>Design Ideas</legend>
          <label htmlFor="placement">Placement ideas:</label>
          <select
            className="select select-primary w-full max-w-xs"
            id="placement"
            name="placement"
            required
          >
            <option disabled selected value="choose">
              choose
            </option>
            <option value="upper-lower-arm-torso">lower arm, leg, torso</option>
            <option value="hands">hand</option>
            <option value="foot">foot</option>
            <option value="shoulder">shoulder</option>
            <option value="skull">skull</option>
            <option value="face">face</option>
            <option value="other">other</option>
          </select>
          <label htmlFor="tattooSize">Approximate size in cm:</label>
          <input
            type="number"
            id="tattooSize"
            name="tattooSize"
            min="5"
            max="100"
            placeholder="cm x cm"
            required
          />
          <label htmlFor="references">References:</label>
          <textarea
            id="references"
            name="references"
            rows="6"
            cols="50"
            required
            placeholder="Please be explicit as possible. you are encouraged to reference an existing work as well as a nonexisting idea"
          />
        </fieldset>
        <fieldset
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <legend>Appointment Details</legend>
          <label htmlFor="tattooBudget">Maximum Budget:</label>
          <input
            type="number"
            id="tattooBudget"
            name="tattooBudget"
            min="100"
            max="2000"
            placeholder="in €"
            required
          />
          <label htmlFor="bookingDate">Choose the wish-date:</label>
          <input
            type="date"
            id="bookingDate"
            name="bookingDate"
            min="01-01-2023"
            max="31-12-2026"
          />
          <label htmlFor="references">Health conditions:</label>
          <textarea
            id="medicalInfo"
            name="medicalInfo"
            rows="4"
            cols="50"
            placeholder="Please indicate if you have any medical conditions, as it may be necessary for me to take appropriate measures to ensure your well-being and mine. Your response will be kept confidential.(e.g. low blood sugar, bloodborne diseases, ..)"
          />
        </fieldset>
        <label for="tos">
          <input type="checkbox" name="tos" id="tos" />I have read the{" "}
          <Link href="./terms-and-conditions">terms and conditions</Link> (i
          would be very grateful if you actually read)
        </label>

        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
