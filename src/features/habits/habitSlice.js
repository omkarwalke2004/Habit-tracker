import { createSlice } from "@reduxjs/toolkit";

const initialHabits = [
    { id: 1, title: "Exercise", description: "Workout for 30 minutes daily." },
  { id: 2, title: "Read", description: "Read 20 pages of a book." },
  { id: 3, title: "Meditate", description: "Meditate for 10 minutes." },
  { id: 4, title: "Drink Water", description: "Drink at least 8 glasses of water daily." },
  { id: 5, title: "Journal", description: "Write in a journal for 10 minutes every evening." },
  { id: 6, title: "Stretching", description: "Do a 5-minute stretching routine every morning." },
  { id: 7, title: "Sleep", description: "Get at least 7-8 hours of sleep each night." },
  { id: 8, title: "Healthy Eating", description: "Eat at least one serving of fruits and vegetables daily." },
  { id: 9, title: "Digital Detox", description: "Spend 30 minutes away from all screens daily." },
  { id: 10, title: "Practice Gratitude", description: "Write down three things you are grateful for each day." },
  
  
  ];

  const habitsSlice = createSlice({
    name:"habits",
    initialState:{items:initialHabits},
    reducers:{
        addhabit:(state,action)=>{
            console.log(action.payload);
            state.items.push({id:Date.now(),...action.payload});
        },
        updateHabit: (state, action) => {
            const { id, title, description } = action.payload;
            const habitIndex = state.items.findIndex((item) => item.id === id);
            if (habitIndex !== -1) {
              state.items[habitIndex] = { id, title, description };
            }
          },
          
        deletehabit:(state,action)=>{
            state.items = state.items.filter((item)=>item.id !== action.payload )
        }
    }
  })
  export const {addhabit,updateHabit,deletehabit} = habitsSlice.actions;
  export default habitsSlice.reducer;