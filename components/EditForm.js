export default function EditForm({ onSubmit, defaultData, formName }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
    event.target.reset();
  }
  return (
    <form name={formName} onSubmit={handleSubmit}>
      <label htmlFor="image-url">image url</label>
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
      <label htmlFor="category">category/:graphics/tattoos/shop</label>
      <input
        id="category"
        name="category"
        type="text"
        defaultValue={defaultData?.category}
      />
      <label htmlFor="dateOfTattoo">date of tattoo:</label>
      <input
        id="dateOfTattoo"
        name="dateOfTattoo"
        type="text"
        defaultValue={defaultData?.dateOfTattoo}
      />
      <button type="submit">submit</button>
    </form>
  );
}
