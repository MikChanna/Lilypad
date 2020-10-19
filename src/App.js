import React from "react";
import Form from "./components/Form";
import List from "./components/List";
import { TodoProvider } from "./utils/GlobalState";
import "./App.css";



function App() {

  return (
    <div className="container text-center">
     <TodoProvider>
       <Form/>
       <List/>
     </TodoProvider>
     
     
    </div>
  );
}


export default App;
