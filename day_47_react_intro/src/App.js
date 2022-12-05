import './App.css';
import Navigation from './components/navigation/Navigation';
import Section1 from './components/sections/section1/Section1';



//! das hier ist schon eine Component

//! function ComponentName() {
// !  return (<div>
//!     <p></p>
//!   </div>)
//! }



function App() {
  return (
    <div className='App'>
      <Navigation />
      <Section1 />
    </div>
  )
}

export default App;