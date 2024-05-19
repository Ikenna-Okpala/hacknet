// // @useClient

// import React, { useState, useEffect } from 'react';

// const MyComponent = () => {
//     const [content, setContent] = useState('Initial content');

//     useEffect(() => {
//         const timer1 = setTimeout(() => {
//             setContent('Content after 5 seconds');

//             const timer2 = setTimeout(() => {
//                 setContent('Content after 10 seconds');
//             }, 5000); // Change content again after another 5 seconds

//             // Cleanup function for the second timeout
//             return () => clearTimeout(timer2);
//         }, 5000); // Change content after 5 seconds

//         // Cleanup function for the first timeout
//         return () => clearTimeout(timer1);
//     }, []); // Empty dependency array so this effect runs once on mount

//     return (
//         <div>{content}</div>
//     );
// };

// export default MyComponent;