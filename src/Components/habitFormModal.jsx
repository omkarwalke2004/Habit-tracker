import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateHabit } from '../features/habits/habitSlice';

const Habitformmodal = ({ initialData = { id: null, title: '', description: '' }, onSubmit }) => {
  const [formdata, setformdata] = useState(initialData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelchange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (formdata.id) {
        // Editing an existing habit
        dispatch(updateHabit(formdata)); // Dispatch update action
        toast.success('Habit updated successfully!'); // Show update toast
      } else {
        // Adding a new habit
        onSubmit(formdata);
        toast.success('Habit added successfully!'); // Show add toast
      }
      navigate('/');
    } catch (error) {
      toast.error('Something went wrong. Please try again.'); // Show error toast
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700">Title</label>
          <input
            value={formdata.title}
            onChange={handelchange}
            type="text"
            id="title"
            name="title"
            className="w-full border p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={formdata.description}
            onChange={handelchange}
            id="description"
            className="w-full border p-2"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all duration-200"
        >
          Save Habit
        </button>
      </form>
    </>
  );
};

export default Habitformmodal;
