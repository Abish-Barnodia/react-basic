import './App.css'
import Card from './components/card' // Fixed casing issue
import Student from './student.jsx'
// props = read only prperties that are shared between components ,
//         A pareent component can send data to child component,
//         <component key = value/>


//prop types = a mechanism that ensure that the passed value is of correct
 //               datatype
 //               age: propTypes.number
function App() {


  // let newArr = [1, 2, 3];
  return (
    // <div>
    // <div>
    // <h1 className='bg-green-400 text-white p-4 rounded-xl mb-4'>tailwind test</h1>
    // <Card username="react project" someObj={newArr} />
    // <Card username="YourUsername" />
    // </div> {/* Wrapped all elements in a single parent div */}
    //      </div>
    <>
    <Student name="spongebob"age={30} isStudent={true}/>
    </>
  );
}

export default App
