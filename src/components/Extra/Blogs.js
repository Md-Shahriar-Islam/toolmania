import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='p-16'>
                <div>
                    <h1 className='text-2xl font-semibold'> How will you improve the performance of a React Application?</h1>
                    <p>For improve the performance of react application need to Keeping component state local where necessary.Also you need to keep less component rendering.
                        Memoizing React components to prevent unnecessary re-renders.
                        Code-splitting in React using dynamic import()
                        Windowing or list virtualization in React.
                        Lazy loading images in React.</p>
                </div>
                <div>
                    <h1 className='text-2xl font-semibold'>How does protypal inheritance work</h1>
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.
                        It is implemented by sending props from one component to another </p>
                </div>
                <div>
                    <h1 className='text-2xl font-semibold'> Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>
                    <p>If we update state directly calling the setState() it may just replace the update we made.
                        When we directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method and this will only return the present value.
                        Thus we will lose control of the state across all components.</p>
                </div>
                <div>
                    <h1 className='text-2xl font-semibold'> You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                    <p>If we want to implement a search to find a product we can use
                        if[ array.filter(event (arrow function symbol) event.name === 'name')(greater than symbol).length  0] where array is the given  array name and name is the name which we want to find.
                    </p>
                </div>
                <div>
                    <h1 className='text-2xl font-semibold'> What is a unit test? Why should write unit tests?</h1>
                    <p> Unit testing ensures that all code meets quality standards before it’s deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Blogs;