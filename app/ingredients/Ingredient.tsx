'use client';
import { ExtraIngredient } from '@/types';
import React, { ChangeEvent, useState } from 'react';
import units from '../db/units';
import { updateExtraIngredient } from '../db/prisma';

const Ingredient = ({
  ingredient: { name, quantity, unit, userId },
}: {
  ingredient: ExtraIngredient;
}) => {
  const [unitState, setUnitState] = useState(unit);
  const [quantState, setQuantState] = useState(quantity);
  const update = async () => {
    updateExtraIngredient({
      name,
      userId,
      quantity: quantState,
      unit: unitState,
    });
  }
  const handleQuant = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    // setQuantState(e.target.value);
    // await update();
  };

  const handleUnit = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    // setUnitState()
  }
  return (
    <>
      <p>{name}</p>
      <input type="number" value={quantState} min={0} />
      <select
        name="selectUnit"
        id="unit"
        value={unitState}
        onChange={handleUnit}
      >
        {units.map(u => (
          <option value={unitState} key={u.abr}>{u.abr}</option>
        ))}
      </select>
    </>
  );
};

export default Ingredient;
