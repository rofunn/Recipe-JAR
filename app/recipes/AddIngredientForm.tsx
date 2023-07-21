import { Recipe_ingredient, addIngredient } from '@/types';
import { useEffect, useState } from 'react';
import { updateIngredient } from '../db/prisma';

const AddIngredientForm = () => {
  const data = localStorage.getItem('ingList') as string;
  const currentList = JSON.parse(data);

  const [ingName, setIngname] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(0);
  const [unit, setUnit] = useState<string>('');
  const [ingList, setIngList] = useState<addIngredient[]>(currentList);

  const updatedIngredient = {
    name: ingName,
    quantity: quantity,
    unit: unit,
  };
  return (
    <>
      <div>
        <label>Ingredient Name:</label>
        <input
          type="text"
          value={ingName}
          onChange={e => {
            setIngname(e.target.value);
          }}
        />
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={e => setQuantity(parseInt(e.target.value))}
        />
        <label>Unit:</label>
        <input
          type="text"
          value={unit}
          onChange={e => setUnit(e.target.value)}
        />
        <button
          type="submit"
          onClick={e => {
            ingList.push(updatedIngredient);
            e.preventDefault();
            localStorage.setItem('ingList', JSON.stringify(ingList));
            setIngname('');
            setQuantity(0);
            setUnit('');
          }}
        >
          Add
        </button>
      </div>
    </>
  );
};

export default AddIngredientForm;
