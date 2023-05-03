import { useState } from 'react';

const Form = () => {
  const [state, setState] = useState({
    fname: '',
    lname: '',
    message: '',
    carBrand: '',
    isChecked: false,
    gender: '',
    price: 0,
  });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setState((state) => ({
      ...state,
      [e.target.name]: value,
    }));
  };

  const carBrands = ['Mercedes', 'BMW', 'Maserati', 'Infinity', 'Audi'];

  const carBrandOptions = carBrands.map((carBrand, key) => {
    <option value={carBrand} key={key}>
      {carBrand}
    </option>;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <>
      <h1>React Form Handling</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          {' '}
          {' '}
          <input
            type="text"
            name="fname"
            value={state.fname}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name:
          {' '}
          {' '}
          <input
            type="text"
            name="lname"
            value={state.lname}
            onChange={handleChange}
          />
        </label>
        <label>
          Your Message:
          <textarea
            name="message"
            value={state.message}
            onChange={handleChange}
          />
        </label>
        <label>
          Car brand:
          <select
            name="carBrand"
            value={state.carBrand}
            onChange={handleChange}
          >
            <option value="" disabled>
              --Pick a car brand--
            </option>
            {carBrandOptions}
          </select>
        </label>
        <label>
          <input
            type="checkbox"
            name="isChecked"
            checked={state.isChecked}
            onChange={handleChange}
          />
          Is Checked?
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={state.gender === 'Male'}
            onChange={handleChange}
          />
          {' '}
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={state.gender === 'Female'}
            onChange={handleChange}
          />
          {' '}
          Female
        </label>
        <label>
          Price (between 0 and 100):
          <input
            type="range"
            name="price"
            min="0"
            max="100"
            value={state.price}
            onChange={handleChange}
          />
        </label>
        <button>Submit</button>
      </form>

      <h5>
        Name:
        {' '}
        {state.fname}
        {' '}
        {state.lname}
      </h5>
      <p>
        Message:
        {state.message}
      </p>
      <h5>
        Favorite car brand:
        {state.carBrand}
      </h5>
      <h5>
        Is it checked? :
        {state.isChecked ? 'Yes' : 'No'}
      </h5>
      <h5>
        Gender:
        {state.gender}
      </h5>
      <h5>
        Price: $
        {state.price}
      </h5>
    </>
  );
};

export default Form;
