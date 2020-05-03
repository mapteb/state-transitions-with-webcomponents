# State Transitions with Web Components

This project explores the use of a state machine and web components for a TodoMVC UI application. This project is a refactored version of the previous project [todomvc-revisted](https://github.com/mapteb/todomvc-revisited) to replace the vanilla JavaScript functions with [web components](https://www.webcomponents.org/introduction).

## Usage

To use this framework the following steps are suggested:

1. Setup an HTML template for the UI application identifying the locations for the custom elements to be backed by the web components. (See the custom element tags input-comp, checkbox-group-comp and button-comp in the [HTML file](https://github.com/mapteb/state-transitions-with-webcomponents/tree/master/docs))

2. Add script tags to the HTML file to reference the web component files (See the script tags for input-comp.js, checkbox-group-comp.js and button-comp.js)

3. Configure the states and events identified in the above state transitions table. (See the JavaScript const objects appStates and appEvents in the [todoApp.js file](https://github.com/mapteb/state-transitions-with-webcomponents/tree/master/docs))

4. Write code in the processor() functions to communicate with the web components via the corresponding custom element's attributes - data-request and data-response.

5. Add the state machine controller code (see handleAppEvent() and handlePostEvent() functions in the [todoApp.js file](https://github.com/mapteb/state-transitions-with-webcomponents/tree/master/docs))


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

An online demo of this application is available at the [Todo App](https://mapteb.github.io/state-transitions-with-webcomponents/todoApp.html).

### More Info

More information about this project is also available at this [DZone article](https://dzone.com/articles/state-transitions-with-web-components).

### Related Project

The state transitions technique used in this JavaScript project can also be easily adapted to Java/Spring Boot applications. Here is an [example](https://github.com/mapteb/state-transitions-with-spring-integration).
