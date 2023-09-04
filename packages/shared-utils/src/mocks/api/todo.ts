import { Todo } from "../../types/todo";
import { getTomorrow } from "../../utils/date";

export const MOCK_GET_TODO: Todo = {
    endDate: getTomorrow(),
    task: 'Clean House',
}
