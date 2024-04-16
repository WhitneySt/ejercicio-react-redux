import axios from "axios";
import { addTask, startingTodoFetch, todoFetchFail, todoFetchSuccess } from "./todoSlice";
import endpoints from "../../data/endpoints";

export const getTasksAction = () => {
    return async (dispatch) => {
        dispatch(startingTodoFetch());
        try {
            const { data } = await axios.get(endpoints.tasks);
            dispatch(todoFetchSuccess(data));
        } catch (error) {
            console.error(error);
            dispatch(todoFetchFail(error));
        }
    }
}

export const addTaskAction = (newTask) => {
    return async (dispatch) => {
        dispatch(startingTodoFetch());
        try {
            const response = await axios.post(endpoints.tasks, {
                task: newTask,
                status: false
            })
            console.log(response.data);
            dispatch(addTask(response.data))
        } catch (error) {
            console.error(error);
            dispatch(todoFetchFail(error))
        }
    }
}