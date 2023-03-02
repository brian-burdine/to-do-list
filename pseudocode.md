# To-Do List

## Goals
Render a to-do list in an HTML document using React. The initial state of the document is a heading indicating the app's purpose and a text field for the user to input a task. When a to-do item is entered, the page is rerendered with the new item on the page, and several control options available: 
- the ability to mark the task as done or completed, 
- to delete the task, 
- to switch the view between all tasks, active/unfinished tasks, and completed tasks, 
- to mark all tasks as completed, and finally 
- to mark all completed tasks as active/unfinished again.

For each view, the to-do items that meet that requirement are displayed, as well as a count of the displayed items.

## React Component Hierarchy
My current plan to hit the target specifications is:
- A header with "To-Do List" or something as the text; this doesn't have to be a component since it's currently static, but I could see it having some kind of dynamic content at some point and I need practice with React, so I'll treat it as one.
- A table containing the components of the list:
  - The table head contains a field for user input, and is always rendered: 
    - A button to mark all of the tasks in the list as completed, only visible when there are one or more active tasks in the list
    - A text input field that prompts a user for a to-do item
    - A button to submit the contents of the text field as a new item
  - The table body contains the tasks the user has added, and is rendered if there are tasks that match the current view. It contains:
    - A button to mark the task as completed, which changes the style of the text
    - The text of the task
    - A button that deletes the task
  - The table foot contains information about the current view and options to change it. It is rendered as long as there are any tasks being tracked, even if they are not displayed in the current view. It contains:
    - A count of the currently displayed tasks
    - Radio buttons that switch the view between 'All', 'Active', and 'Completed'
    - A button that changes all completed tasks as active

With that in mind, I think my hierarchy will look something like this:
```
<App>
    <Header />
    <ToDoList>
        <InputField>
            <CompleteTasksButton>
            <SubmitTask>
        <ToDoItem> (looped to render all current ones)
            <ToDoCompleteButton>
            <ToDoText>
            <ToDoDeleteButton>
        <Footer>
            <SwitchViewButtons>
            <RestoreTasksButton>
    </ToDoList>
</App>
```

## Variables
The state of the application will be controlled by a few variables:
- *inputText*
  - A string containing the text entered into the text field at the top of the application by the user, used when the user submits a task to create the content of the task
- *tasks*
  - An array of *task* objects, which contain a unique signifier *id*, a *text* property that takes the value of *inputText* when the *task* object is created, and a flag property *done* that is initially set to false. At the start of the application, *tasks* is empty.
- *currentView*
  - A string indicating the current view, set by radio buttons in the footer when there are one or more items in *tasks*. The default view is "all", and the other values it can take are "active" and "done"

## Functions
The functions used in the application will mostly be the ones that return the various components of the page, though several components also have callback functions for event handlers.

## Procedure