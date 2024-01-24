import React from 'react';
import Navbar from '../navbar/Navbar';
import Todolist from '../Todolist/TodoList';
import './Home.css';
import Footer from '../footer/Footer';
function Home() {
  return (
    <div>
    <div >
    <Navbar />
    </div>
    <div>
    <Todolist/>
    </div>
    <Footer/>
    </div>
  );
}

export default Home;