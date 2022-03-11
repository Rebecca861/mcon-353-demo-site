import {} from "react-router-dom";
import { Todo } from "./todo"
import {render, screen} from "@testing-library/react"

describe("Todo component", () => {
    test("When a task title is typed into the input box and the 'add' button is clicked, a new todo item is added to the list", () => {
        render(<TodoProvider><Todo /></TodoProvider>);
        const inputEl = screen.getByLabelText("I need to...");
        console.log(inputEl);
    });
});