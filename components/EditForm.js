export default function EditForm({ onSubmit, defaultData, formName }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  }
  return (
    <form className="form--edit" name={formName} onSubmit={handleSubmit}>
      <label htmlFor="imageUrl">image url</label>
      <input
        id="imageUrl"
        name="imageUrl"
        type="text"
        defaultValue={defaultData?.imageUrl}
      />
      <label htmlFor="title">title</label>
      <input
        id="title"
        name="title"
        type="text"
        defaultValue={defaultData?.title}
      />

      <label htmlFor="price">price</label>
      <input
        id="price"
        name="price"
        type="text"
        defaultValue={defaultData?.price}
      />
      <label htmlFor="availableForms">available forms:</label>
      <input
        id="availableForms"
        name="availableForms"
        type="text"
        defaultValue={defaultData?.availableForms}
      />
      <select id="category" name="category" required>
        <option defaultValue={defaultData?.category}>choose</option>
        <option defaultValue="graphics">graphics</option>
        <option defaultValue="tattoos">tattoos</option>
        <option defaultValue="shop">shop</option>
      </select>

      <label htmlFor="dateOfTattoo">date of tattoo:</label>
      <input
        id="dateOfTattoo"
        name="dateOfTattoo"
        type="text"
        defaultValue={defaultData?.dateOfTattoo}
      />
      <button className="crud" type="submit">
        submit
      </button>
    </form>
  );
}
