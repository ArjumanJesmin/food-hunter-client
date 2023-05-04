/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container>
            <Row>
                <div className='border shadow bg-light p-5 m-4'>
                    <>
                    <h4>What the differences between uncontrolled and controlled components.?</h4>
                    <br />
                    <p>Controlled components are those components that are fully controlled by React. In a controlled component, React controls the state of the component and updates the state based on user input. The component receives its value and onChange event handler as props, which are used to update the state whenever the user interacts with the component. <br/> In other words, the state of the component is stored in React's state, and the component is rerendered whenever the state changes. Controlled components are useful when you need to perform some validation or want to maintain a specific order of user input.</p>
                    </>
                    <br />
                    <>
                    <h4>How to validate React props using PropTypes.?</h4>
                    <br />
                    <p>React props are a way of passing data from a parent component to a child component. PropTypes is a utility in React that provides a way to validate the data being passed through props. PropTypes can help you catch bugs early on by checking whether the data type of the props matches what you expect it to be.</p>
                    </>
                    <br />
                    <>
                    <h4>What is the difference between nodejs and express js..?</h4>
                    <br />
                    <p><strong>Node.js:</strong> Node.js is an open-source, cross-platform runtime environment that allows developers to use JavaScript on the server-side to build scalable, event-driven applications. Node.js is built on top of the V8 JavaScript engine from Google Chrome and provides an asynchronous I/O model that enables non-blocking I/O operations, making it well-suited for building scalable, real-time applications.</p> 
                    <br />
                    <p><strong>Express.js:</strong> Express.js is a popular open-source web application framework built on top of Node.js. It provides a set of features and tools for building web applications and APIs quickly and easily. Express.js simplifies the process of building web applications by providing a range of built-in features, such as routing, middleware, and templating engines..</p> 
                    </>
                    <br />
                    <>
                    <h4>What is a custom hook, and why will you create a custom hook?</h4>
                    <br />
                    <p>In React a custom hook is a JavaScript function that allows you to extract logic and state from a component and reuse it across multiple components. Custom hooks are functions that start with the prefix use, and they follow the same rules as regular hooks, such as using them at the top level of your component or custom hook.</p> 
                    <br />
                    <p>A custom hook can be used to encapsulate any complex logic, such as fetching data from an API, handling form inputs, or managing state. By creating a custom hook, you can abstract away complex logic and reuse it in multiple components without duplicating code.</p> 
                    </>
                    <br />
                </div>
            </Row>
        </Container>
    );
};

export default Blog;