// import { useState } from "react";
import Link from "next/link";
export default function Form({ onSubmit }) {
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
        action={process.env.SENDER_MAIL}
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>Tattoo appointment request</h3>
        <p className="paragraph--payment">
          Read <Link href="./terms-and-conditions">terms and conditions </Link>
          before you start filling the form. Fill out this as explicit as
          possible.
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
          />
          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            name="email"
            placeholder="random@mail.com"
            type="text"
            required
          />
          <label htmlFor="instagram">Instagram:</label>
          <input
            id="instagram"
            name="instagram"
            placeholder="@..."
            type="text"
          />
        </fieldset>
        <fieldset>
          <legend>Design Ideas</legend>
          <label htmlFor="placement">Placement ideas:</label>
          <select id="placement" name="placement" required>
            <option disabled defaultValue="choose">
              choose
            </option>
            <option defaultValue="upper-lower-arm-torso">
              lower arm, leg, torso
            </option>
            <option defaultValue="hands">hand</option>
            <option defaultValue="foot">foot</option>
            <option defaultValue="shoulder">shoulder</option>
            <option defaultValue="skull">skull</option>
            <option defaultValue="face">face</option>
            <option defaultValue="other">other</option>
          </select>
          <label htmlFor="tattooSize">Approximate size in cm:</label>
          <input
            type="number"
            id="tattooSize"
            name="tattooSize"
            min="5"
            max="100"
            placeholder="cm x cm"
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
        <fieldset>
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
            required
          />
          <label htmlFor="references">Health conditions:</label>
          <textarea
            id="medicalInfo"
            name="medicalInfo"
            rows="4"
            cols="50"
            placeholder="Please indicate if you have any medical conditions, as it may be necessary for me to take appropriate measures to ensure your well-being and mine. Your response will be kept confidential.(e.g. low blood sugar, bloodborne diseases, ..)"
            required
          />
        </fieldset>
        <h3>Payment</h3>
        <p className="paragraph--payment">
          Use this link to transfer the deposit. Later you can return this page,
          fill and submit the appointment request form. Any submitted form
          without having a corresponding payment reference will be disregarded.
        </p>
        <label htmlFor="range">How serious are you about this booking?</label>{" "}
        <input className="input--range" type="range" min="0" max="200" />
        <button>Submit</button>
      </form>
      <fieldset>
        <legend>Deposit Link</legend>
        <Link href="https://www.paypal.com/paypalme/jumisu4u/100EUR">
          click here to pay the deposit for completing your booking
        </Link>
      </fieldset>
    </div>
  );
}
