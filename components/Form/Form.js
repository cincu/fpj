import styles from "./Form.module.css";
import Link from "next/link";
import DOMPurify from "dompurify"; // To sanitize user input

export default function Form({ onSubmit }) {
  // Function to sanitize and validate input
  const sanitizeInput = (input) => {
    // Remove any HTML tags and trim white spaces
    return DOMPurify.sanitize(input).trim();
  };

  // Validation for email
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  // Client-side form validation and sanitization
  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    // Sanitizing and validating form fields
    const sanitizedData = {
      fname: sanitizeInput(data.fname),
      lname: sanitizeInput(data.lname),
      email: sanitizeInput(data.email),
      instagram: sanitizeInput(data.instagram),
      placement: sanitizeInput(data.placement),
      tattooSize: sanitizeInput(data.tattooSize),
      references: sanitizeInput(data.references),
      tattooBudget: sanitizeInput(data.tattooBudget),
      bookingDate: sanitizeInput(data.bookingDate),
      medicalInfo: sanitizeInput(data.medicalInfo),
    };

    // Basic validation
    if (!sanitizedData.fname || sanitizedData.fname.length > 50) {
      alert("First name is required and should be less than 50 characters.");
      return;
    }

    if (!validateEmail(sanitizedData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!sanitizedData.references || sanitizedData.references.length > 500) {
      alert("References should be less than 500 characters.");
      return;
    }

    // Submit sanitized data to parent or API
    onSubmit(sanitizedData);
    event.target.reset();
  }

  return (
    <div>
      <form
        action={process.env.SENDER_MAIL}
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>Booking</h3>
        <p className={styles["paragraph--payment"]}>
          Read <Link href="./terms-and-conditions">terms and conditions </Link>
          before you start filling the form. Fill out this as explicit as
          possible.
        </p>
        <fieldset>
          <legend>Contact Information</legend>
          <label htmlFor="first-name">First Name:</label>
          <input
            className={styles.placeholder}
            id="fname"
            name="fname"
            placeholder="type your first name"
            type="text"
            required
            maxLength="50" // Limiting input length
          />
          <label htmlFor="last-name">Last Name:</label>
          <input
            className={styles.placeholder}
            id="lname"
            name="lname"
            placeholder="type your last name"
            type="text"
            maxLength="50" // Limiting input length
          />
          <label htmlFor="email">E-mail:</label>
          <input
            className={styles.placeholder}
            id="email"
            name="email"
            placeholder="random@mail.com"
            type="email"
            required
          />
          <label htmlFor="instagram">Instagram:</label>
          <input
            className={styles.placeholder}
            id="instagram"
            name="instagram"
            placeholder="@..."
            type="text"
            maxLength="50" // Limiting input length
          />
        </fieldset>

        <fieldset>
          <legend>Design Ideas</legend>
          <label htmlFor="placement">Placement ideas:</label>
          <select
            className={styles.placeholder}
            id="placement"
            name="placement"
            required
          >
            <option disabled value="">
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
            className={styles.placeholder}
            type="number"
            id="tattooSize"
            name="tattooSize"
            min="5"
            max="100"
            placeholder="cm x cm"
          />
          <label htmlFor="references">References:</label>
          <input
            className={styles.placeholder}
            id="references"
            name="references"
            placeholder="Please be explicit as possible."
            type="text"
            required
            maxLength="500" // Limiting input length
          />
        </fieldset>

        <fieldset>
          <legend>Appointment Details</legend>
          <label htmlFor="tattooBudget">Maximum Budget:</label>
          <input
            className={styles.placeholder}
            type="text"
            id="tattooBudget"
            name="tattooBudget"
            placeholder="do not forget indicating the currency"
            required
            maxLength="10"
          />
          <label htmlFor="bookingDate">Choose the date:</label>
          <input
            className={styles.placeholder}
            type="date"
            id="bookingDate"
            name="bookingDate"
            min="2023-01-01"
            max="2026-12-31"
            required
          />
          <label htmlFor="medicalInfo">Health conditions:</label>
          <input
            className={styles.placeholder}
            id="medicalInfo"
            name="medicalInfo"
            placeholder="Please indicate if you have any medical conditions."
            type="text"
            maxLength="200" // Limiting input length
            required
          />
        </fieldset>

        <button>Submit</button>
        <fieldset>
          <legend>Payment</legend>
          <h4>
            <Link href="https://www.paypal.com/paypalme/jumisu4u/100EUR">
              click here to transfer the deposit after you submit the form
            </Link>
          </h4>
          <p className={styles["paragraph--payment"]}>
            Do not forget to reference your name or Instagram handle on the
            transfer.
          </p>
        </fieldset>
      </form>
    </div>
  );
}
