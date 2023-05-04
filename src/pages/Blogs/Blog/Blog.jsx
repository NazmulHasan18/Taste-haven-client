// eslint-disable-next-line no-unused-vars
import React from "react";
import { Accordion } from "react-bootstrap";

const Blog = () => {
   return (
      <Accordion>
         <Accordion.Item eventKey="0">
            <Accordion.Header>
               1. What is the differences between uncontrolled and controlled components?
            </Accordion.Header>
            <Accordion.Body>
               <p>
                  In the context of software development, the terms "controlled components" and "uncontrolled
                  components" refer to the ways in which different parts of an application are managed and
                  interact with each other. <br /> <br />
                  Controlled components are components that are fully managed by the application's code. These
                  components typically include input fields and other elements that have their state and
                  behavior defined within the application's codebase. When a user interacts with a controlled
                  component, the application is able to detect and respond to those interactions in a
                  predictable way, since it has complete control over how the component behaves.
                  <br />
                  Example: Basically All the components we made to manage our code easily Those are
                  uncontrolled components
                  <br /> <br />
                  Uncontrolled components, on the other hand, are components that rely on external state or
                  behavior to function. Examples of uncontrolled components include file inputs and certain
                  types of form elements. Because uncontrolled components rely on external state, they can be
                  more difficult to manage and predict. However, they can also be useful for certain types of
                  applications where flexibility is more important than predictability.
                  <br />
                  Example: All react awesome components.
                  <br /> <br />
                  In general, the choice between controlled and uncontrolled components depends on the
                  specific needs of the application. Controlled components are generally easier to work with
                  and provide more predictable behavior, On Contrary uncontrolled components offer more
                  flexibility and can be useful for more complex applications.
               </p>
            </Accordion.Body>
         </Accordion.Item>
         <Accordion.Item eventKey="1">
            <Accordion.Header>2. How to validate React props using PropTypes?</Accordion.Header>
            <Accordion.Body>
               <p>
                  In React, you can use the PropTypes library to validate the props passed to your components.
                  PropTypes provide a way to specify the expected types for the props and issue warnings if
                  the props don't match the specified types.
               </p>
               <br />
               <div>
                  <h4>Steps for Prop-type Validation</h4>
                  <ul>
                     <li>
                        Install Proto type: <span className="fw-bold">npm i prop-types</span>
                     </li>
                     <li> In the component file where you want to validate the props, import PropTypes.</li>
                     <li>Then, Define the prop-types</li>
                  </ul>
               </div>
               <div>
                  <h5>Here are a few examples of common PropTypes validators:</h5>
                  <ul>
                     <li>
                        <span className="fw-semibold"> PropTypes.string</span> : Validates that the prop is a
                        string.
                     </li>
                     <li>
                        <span className="fw-semibold"> PropTypes.number</span> : Validates that the prop is a
                        number.
                     </li>
                     <li>
                        <span className="fw-semibold"> PropTypes.bool</span> : Validates that the prop is a
                        boolean.
                     </li>
                     <li>
                        <span className="fw-semibold"> PropTypes.array</span> : Validates that the prop is a
                        array.
                     </li>
                     <li>
                        <span className="fw-semibold"> PropTypes.object</span> : Validates that the prop is a
                        object.
                     </li>
                     <li>
                        <span className="fw-semibold"> PropTypes.func</span> : Validates that the prop is a
                        function.
                     </li>
                     <li>
                        <span className="fw-semibold"> PropTypes.node</span> : Validates that the prop can be
                        a rendered React element.
                     </li>
                     <li>
                        <span className="fw-semibold"> PropTypes.shape({})</span> : Validates that the prop is
                        an object with a specific shape, where the keys and values are of specific PropTypes.
                     </li>
                  </ul>
               </div>
            </Accordion.Body>
         </Accordion.Item>
         <Accordion.Item eventKey="2">
            <Accordion.Header>3. What the difference between nodejs and express js?</Accordion.Header>
            <Accordion.Body>
               <p>
                  Node.js and Express.js are both popular technologies used in web development, but they serve
                  different purposes. <br />
                  <br />
                  Node.js is a runtime environment for executing JavaScript code outside of a browser. It
                  provides an event-driven, non-blocking I/O model that allows developers to create scalable
                  and high-performance network applications. Node.js is used to build server-side
                  applications, command-line tools, and other applications that require access to the file
                  system or network.
                  <br />
                  <br />
                  Express.js, on the other hand, is a web framework built on top of Node.js. It provides a set
                  of tools and features for building web applications and APIs using Node.js. Express.js
                  simplifies the process of handling HTTP requests, routing, middleware, and other web-related
                  tasks.
               </p>
            </Accordion.Body>
         </Accordion.Item>
         <Accordion.Item eventKey="3">
            <Accordion.Header>
               4. What is a custom hook, and why will you create a custom hook?
            </Accordion.Header>
            <Accordion.Body>
               <p>
                  A custom hook is a JavaScript function that starts with the prefix use. It is a way to reuse
                  stateful logic and share it between different components in a React application. By
                  abstracting away complex logic into a custom hook, you can make your code more reusable,
                  easier to read, and easier to maintain.
                  <br />
                  <br />
                  The purpose of custom hooks is to help developers create modular, reusable code. By using
                  custom hooks, developers can short logic that can be shared across multiple components. This
                  can make code easier to read, test, and maintain.
               </p>
            </Accordion.Body>
         </Accordion.Item>
      </Accordion>
   );
};

export default Blog;
