# State Transitions with Web Components

This project explores the use of a state machine and web components for a TodoMVC UI application. This project is a refactored version of the previous project [todomvc-revisted](https://github.com/mapteb/todomvc-revisited) to replace the vanilla JavaScript functions with [web components](https://www.webcomponents.org/introduction).

## Usage

To use this framework the following steps are suggested:

1. Setup an HTML template for the UI application identifying the locations for the custom elements to be backed by the web components.

2. Add scrtipt tags to the HTML file to reference the web component files

3. Configure the states and events identified in the above state transitions table.

4. Write code in the processor() functions to communicate with the web components via the corresponding custom elements.

5. Add the state machine controller code (see handleAppEvent() and handlePostEvent() functions in the HTML file)


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

## Demo

An online demo of this application is available at the [Todo App](https://mapteb.github.io/state-transitions-with-webcomponents/todoApp.html)
