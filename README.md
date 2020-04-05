# State Transitions with Web Components

This project explores the use of a state machine and web components for a TodoMVC UI application. This project is a refactored version of the previous project [todomvc-revisted](https://github.com/mapteb/todomvc-revisited) to replace the vanilla JavaScript functions with [web components](https://www.webcomponents.org/introduction).

## Demo

An online demo of this application is available at the [Todo App](https://mapteb.github.io/todomvc-revisited/todoApp.html).

## Usage

To use this framework the following steps are suggested:

1. Write the state transitions for the UI application(see the table below for an example)
2. Configure the states and events in JavaScript const variables.
   See appStates and appEvents in the HTML file.
3. Setup the HTML template,
   Identify the custom element tags for the application.
   See the **input-comp**, **checkbox-group-comp** and **button-comp** tags used in this demo.
4. Create the corresponding web components.
   See **input-comp.js**, **checkbox-group-comp.js** and **button-comp.js**
5. Update the HTML file to add script tags for the above js files.

The following state transitions are assumed for the demo TodoMVC UI application are:

<pre>
=================================================================================================================================
     Initial State              |  Pre-event |   Processor      |      Post-event               |     Final State
=================================================================================================================================
uknownState                     - onload     - processOnload     - onloadSuccess                 - readyForAdd 
readyForAdd                     - addTodo    - processAddTodo    - addTodoSuccessNoneSelected    - readyForAddSelect
readyForAddSelect               - addTodo    - processAddTodo    - addTodoSuccessNoneSelected    - readyForAddSelect
readyForAddSelect               - changeTodo - processChangeTodo - changeTodoSuccessSomeSelected - readyForAddSelectUnselectDelete 
readyForAddSelect               - changeTodo - processChangeTodo - changeTodoSuccessAllSelected  - readyForAddUnselectDelete
readyForAddUnselectDelete       - addTodo    - processAddTodo    - addTodoSuccessSomeSelected    - readyForAddSelectUnselectDelete
readyForAddUnselectDelete       - changeTodo - processchangeTodo - changeTodoSuccessNoneSelected - readyForAddSelect
readyForAddUnselectDelete       - changeTodo - processchangeTodo - changeTodoSuccessSomeSelected - readyForAddSelectUnselectDelete
readyForAddUnselectDelete       - deleteTodo - processDeleteTodo - deleteTodoSuccessAllDeleted   - readyForAdd
readyForAddSelectUnselectDelete - addTodo    - processAddTodo    - addTodoSuccessSomeSelected    - readyForAddUnselectDelete
readyForAddSelectUnselectDelete - changeTodo - processChangeTodo - changeTodoSuccessAllSelected  - readyForAddUnselectDelete
readyForAddSelectUnselectDelete - changeTodo - processChangeTodo - changeTodoSuccessSomeSelected - readyForAddSelectUnselectDelete
readyForAddSelectUnselectDelete - changeTodo - processChangeTodo - changeTodoSuccessNoneSelected - readyForAddSelect
readyForAddSelectUnselectDelete - changeTodo - processChangeTodo - changeTodoSuccessSomeSelected - readyForAddSelectUnselectDelete
readyForAddSelectUnselectDelete - deleteTodo - processDeleteTodo - deleteTodoSuccessNoneSelected - readyForAddSelect
</pre>