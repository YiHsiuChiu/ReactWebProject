import { createSlice, nanoid } from "@reduxjs/toolkit";

function shuffleArray(inputArray){
    inputArray.sort(()=> Math.random() - 0.5);
}
const initialState = [
];
const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        taskUpdated(state, action) {
            const {data} = action.payload;
            const arrayForSort = [...data]
            shuffleArray(arrayForSort);
            while(state.length>0){
                state.pop();
            }
            var i = 0;
            for(i=0;i<arrayForSort.length;i++){
                console.log(arrayForSort[i]);
                state.push(arrayForSort[i]);
            }
            
        },
        taskAdded(state, action) {
            while(state.length>0){
                state.pop();
            }
            const { todo_list } = action.payload;
            var i = 0;
            for(i=0;i<todo_list.length;i++){
                todo_list[i]['id'] = nanoid();
                state.push(todo_list[i]);
            }
        },
        // taskDeleted (state, action) {
        //   const {id} = action.payload;
        //   return state.filter( item => item.id !== id);
        // }
    }
});

export const { taskUpdated, taskAdded, taskDeleted } = tasksSlice.actions;
export default tasksSlice.reducer;