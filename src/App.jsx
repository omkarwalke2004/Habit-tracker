import React from 'react';
import Header from './Components/header';
import Homepage from './pages/homepage';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Habitdetails from './pages/habitdetails';
import Habitformmodal from './Components/habitFormModal';

import { useSelector, useDispatch } from 'react-redux';
import { addhabit, updateHabit } from "./features/habits/habitSlice";
import EditHabitPage from './pages/edithabitpage';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const dispatch = useDispatch();
  const habits = useSelector((state) => state.habits.items);

  const handleSubmit = (habit, id = null) => {
    if (id) {
      dispatch(updateHabit({ id, ...habit }));
    } else {
      dispatch(addhabit(habit));
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-200">
       <ToastContainer position="top-right" autoClose={3000} />
      <Router>
        <Header />
        <Routes>
          {/* Homepage */}
          <Route path="/" element={<Homepage />} />

          {/* Add New Habit */}
          <Route
            path="/add"
            element={<Habitformmodal onSubmit={(habit) => handleSubmit(habit)} />}
          />

          {/* Edit Existing Habit */}
          <Route
            path="/edit/:id"
            element={
              <EditHabitPage
                onSubmit={(habit) => handleSubmit(habit, habit.id)}
                habits={habits}
              />
            }
          />

          {/* View Habit Details */}
          <Route path="/details/:id" element={<Habitdetails />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
