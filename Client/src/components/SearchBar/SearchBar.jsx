import { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({onSearch}) {

   const [id, setId] = useState(``);

   const handleChange = (event) => {
      setId(event.target.value);

   }

   return (
      <div>
         <input className="search-bar" type="text" placeholder="Search..." onChange={handleChange} value={id} />
         <button className="form-button3" onClick={() => {onSearch(id); setId(``)}}>Agregar</button>
      </div>
   );
}
