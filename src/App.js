import './App.css';

import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Countries from './components/Countries/Countries';
import Users from './components/Users/Users';
import UserDetails from './components/UserDetails/UserDetails';
import Posts from './components/Posts/Posts';
import Categories from './components/Categories/Categories';
import Notepad from './components/Notepad/Notepad';
import Notepad2 from './components/Notepad2/Notepad2';

//Component@ funkcia e vor@ veradarcnum e JSX karucvacq

// function App() {
//   const showCounter = true;

//   return (
//     <div className="App">
//       <Header text={5} num={10} />
//       {showCounter ? <Counter /> : ''}
//       <Users />
//       <Box />
//       <Posts />
//     </div>
//   );

//   // const el = document.createElement("div");
//   // const el1 = document.createElement("h1");
//   // el1.innerText = "Hello React";
//   // el.appendChild(el1);


//   // const el = `
//   //   <div>
//   //     <h1>Hello React</h1>
//   //   </div>
//   // `;
//   // return el;



// }

// export default App;


// function App() {
//   let [users, setUsers] = useState([
//     { id: 1, name: "John", age: 23, active: true },
//     { id: 2, name: "Tom", age: 21, active: false },
//     { id: 3, name: "Erik", age: 18, active: true },
//     { id: 4, name: "Sarah", age: 19, active: false },
//     { id: 5, name: "Michael", age: 34, active: false },
//     { id: 6, name: "Jack", age: 26, active: true },
//   ]);

//   return (
      
//     <div> 


//       <Posts />
//     </div>
    
//   );
// }

// export default App;


// const Child1 = memo(function ({count}) {
//   useEffect(()=>{
//     console.log("Updated Child 1")
//   });
//   return (
//     <div>
//       <h1>Child 1</h1>
//       <Child11 count={count} />
//     </div> 
//   )
// }, (prev, next) => {
//   console.log(prev);
//   console.log(next);
//   return JSON.stringify(prev) === JSON.stringify(next);
// });

// const Child1 = function ({count}) {
//   useEffect(()=>{
//     console.log("Updated Child 1")
//   });

//   return (
//     <div>
//       <h1>Child 1</h1>
//       <Child11 count={count} />
//     </div> 
//   )
// }

// function Child11({count}) {
//   useEffect(()=>{
//     console.log("Updated Child 1.1")
//   });
//   return (
//     <div>
//       <h2>Child 1.1</h2>
//       <Child111 count={count} />
//       <Child112 count={count} />
//     </div>
//   );
// }


// function Child111({count}) {
//   useEffect(()=>{
//     console.log("Updated Child 1.1.1")
//   }, []);
//   return (
//     <div>
//       <h2>Child 1.1.1</h2>
//       <p>{count}</p>
//     </div>
    
//   )
// }

// function Child112({count}) {
//   useEffect(()=>{
//     console.log("Updated Child 1.1.2")
//   }, []);
//   return (
//     <div>
//       <h2>Child 1.1.2</h2>
//       <p>{count}</p>
//     </div>
//   )
// }

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>App</h1>
//       <button onClick={() => {
//         setCount(count + 1);
//       }}>+</button>
//       <Child1 count={count} />
//     </div>
//   );
// }

// export default App;



const App = () => {
  // const [count, setCount] = useState(0);
  const users = [
    {id:1, name:'John'},
    {id:2, name:'Tom'},
    {id:3, name:'Jane'},
  ];
  return (
    <div>
      {/* <h1>{count}</h1>
      <button onClick={ () => { setCount(count + 1) }}>+</button>
      <Element 
        text='Hello World' 
        post={{title:'Post Title', body:'Post Body'}}
      /> */}

      {/* <Circle />

      <ul>
        {users.map((user, index) => <React.Fragment key={index}><li>{user.name}</li></React.Fragment>)}
      </ul> */}
        <NavBar />
        <Routes>
          <Route path='/' element={<h1>Home</h1>} />
          <Route path='/about' element={<h1>About</h1>} />
          <Route path='/contact' element={<h1>Contact</h1>} /> 
          <Route path='/users' element={<Users />} /> 
          <Route path='/countries' element={<Countries />} /> 
          <Route path='/posts' element={<Posts />} /> 
          <Route path='/users/:id/:name' element={<UserDetails />} /> 
          <Route path='/categories' element={<Categories />} /> 
          <Route path='/notepad' element={<Notepad />} /> 
          <Route path='/notepad2' element={<Notepad2 /> } /> 
          <Route path='*' element={<h1>Error 404</h1>} /> 
        </Routes>

      {/* <Square post={{title:'Title 1', body:'Text'}} /> */}

      {/* <PhotoList />*/} 
    </div>
  );
}

export default App;