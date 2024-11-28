import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Habitformmodal from '../Components/habitFormModal';

const EditHabitPage = ({ onSubmit }) => {
  const { id } = useParams();
  const habit = useSelector((state) =>
    state.habits.items.find((h) => h.id === parseInt(id))
  );

  // If the habit is not found, display a message
  if (!habit) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <p className="text-xl font-semibold text-gray-700">Habit not found.</p>
          <p className="text-gray-500 mt-2">The habit you are trying to edit does not exist.</p>
        </div>
      </div>
    );
  }

  // Render the Habitformmodal with the habit data for editing
  return (
    <div className="bg-gray-50 w-full h-screen">
      <div className="w-full">
        <Habitformmodal initialData={habit} onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default EditHabitPage;
