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
        <article className="prose prose-blockquote:rounded-m prose-headings:bold prose-a:text-purple-600">
          <h2>Appointment</h2>
          <h3>Payment</h3>
          <p>
            Use this link to transfer the deposit. Later you can return this
            page, fill and submit the appointment request form. Any submitted
            form without having a corresponding payment reference will be
            disregarded.
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
              className="input input-bordered input-primary w-full max-w-s"
              required
            />
            <label htmlFor="last-name">Last Name:</label>
            <input
              id="lname"
              name="lname"
              placeholder="type your last name"
              type="text"
              required
              className="input input-bordered input-primary w-full max-w-s"
            />
            <label htmlFor="email">E-mail:</label>
            <input
              id="email"
              name="email"
              placeholder="random@mail.com"
              type="text"
              required
              className="input input-bordered input-primary w-full max-w-s"
            />
            <label htmlFor="instagram">Instagram:</label>
            <input
              id="instagram"
              name="instagram"
              placeholder="@..."
              type="text"
              className="input input-bordered input-primary w-full max-w-s"
            />
          </fieldset>
          <fieldset>
            <legend>Design Ideas</legend>
            <label htmlFor="placement">Placement ideas:</label>
            <select
              className="select select-primary w-full max-w-s"
              id="placement"
              name="placement"
              required
            >
              <option disabled selected value="choose">
                choose
              </option>
              <option value="upper-lower-arm-torso">
                lower arm, leg, torso
              </option>
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
              className="select select-primary w-full max-w-xs"
              required
            />
            <label htmlFor="references">References:</label>
            <textarea
              id="references"
              name="references"
              rows="6"
              cols="50"
              required
              className="textarea textarea-primary"
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
              className="select select-primary w-full max-w-xs"
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
              className="textarea textarea-primary"
              placeholder="Please indicate if you have any medical conditions, as it may be necessary for me to take appropriate measures to ensure your well-being and mine. Your response will be kept confidential.(e.g. low blood sugar, bloodborne diseases, ..)"
            />
          </fieldset>
          <label htmlFor="tos">
            <input
              type="checkbox"
              name="tos"
              id="tos"
              className="checkbox checkbox-primary"
            />
            I have read the{" "}
            <Link href="./terms-and-conditions">terms and conditions</Link> (i
            would be very grateful if you actually read)
          </label>
          <label htmlFor="range">
            How serious are you about this booking?
            <input
              type="range"
              min={0}
              max="200"
              value="0"
              className="range range-primary"
            />
          </label>
        </article>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
