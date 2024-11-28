import { useSelector,useDispatch } from "react-redux";

import React from 'react'
import Habitcard from "../Components/habitcard";
import { deletehabit } from "../features/habits/habitSlice";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Homepage = () => {
    const dispatch = useDispatch();
    const habits = useSelector((state)=>state.habits.items)
    const handeldelete=(id)=>{
        dispatch(deletehabit(id))
        toast.success('Habit deleted successfully',{
           
        })

    }
  return (
    <div className="p-4">
        <h1 className="text-center text-gray-700 text-3xl md:text-4xl font-bold font-serif mb-6">
        My Habits
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {habits.map((habit)=>(
            <Habitcard key={habit.id} habit={habit} onDelete={handeldelete}/>
        ))}

      </div>
      {habits.length === 0 &&(
         <p className="text-center text-lg mt-4 text-gray-500">
         No habits to display. Start by adding a new habit!
       </p>
      )}
        
      
    </div>
  )
}

export default Homepage
