import "./Search.css";
import imgSerach from '../../image/search.png';
import imgFilter from '../../image/refine.png';

function Search(){
    return(
        <div className="searchDiv">
            <button className="search">
                <img src={imgSerach} className="imgSearch"/>
            </button>

            <input type='text' placeholder="Pesquise aqui" className="searchInput"></input>

            <button className="filter">
                <img src={imgFilter} className="imgFilter"/>
            </button>
        </div>
    );
}

export default Search;