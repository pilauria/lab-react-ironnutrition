import { Input } from 'antd';
import { useState } from 'react';

export default function AddFoodForm(props) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleNameInput = event => setName(event.target.value);
  const handleImageInput = event => setImage(event.target.value);
  const handleCaloriesInput = event => setCalories(event.target.value);
  const handleServingsInput = event => setServings(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    const newFood = { name, image, calories, servings };

    props.addNewFood(newFood);

    setName('');
    setImage('');
    setCalories(0);
    setServings(0);
  };

  return (
    <div className='AddFood'>
      <h4>Add Food Entry</h4>

      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <Input
          placeholder='Food Name'
          type='text'
          name='name'
          value={name}
          onChange={handleNameInput}
        />

        <label>Image: </label>
        <Input
          placeholder='Food Image'
          type='text'
          name='image'
          value={image}
          onChange={handleImageInput}
        />

        <label>Calories: </label>
        <Input
          placeholder='0'
          type='number'
          name='calories'
          value={calories}
          onChange={handleCaloriesInput}
        />

        <label>Servings: </label>
        <Input
          placeholder='0'
          type='number'
          name='servings'
          checked={servings}
          onChange={handleServingsInput}
        />

        <button type='submit'>Create</button>
      </form>
    </div>
  );
}
