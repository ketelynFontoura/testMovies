import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

//icones de bibliotecas 
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';

import './Navbar.css';

const Navbar = () => {
    //eventos de busca pelo formulário
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!search) return
        
        navigate(`/search?q=${search}`);
        setSearch("");
    }

    return (
        <nav id="navbar">
            <h2>
                <Link to="/"> <BiCameraMovie /> Movies K </Link>
            </h2>
            <form onSubmit={handleSubmit}>
                {/* cada vez que alguem digita algo no input, eu mudo o estado do Search */}
                <input type="text" placeholder='Busque um filme' 
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}/>
                <button type="submit"> 
                    <BiSearchAlt2 />
                </button>
            </form>
        </nav>
    )
}

export default Navbar