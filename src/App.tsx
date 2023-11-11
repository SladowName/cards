import './app.scss'
import {Sidebar} from "./components/sidebar";
import {useState} from "react";
import {Content} from "./components/content";

function App() {
    const [activeItem, setActiveItem] = useState<string>('Design');

  return (
    <div className={'app'}>
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem}/>
      <Content activeItem={activeItem}/>
    </div>
  )
}

export default App
