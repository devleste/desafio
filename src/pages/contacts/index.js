import React from "react"
import "./style.css"
import Filter from "../../components/filter"
import SeachResults from "../../components/search-results"

function Contacts() {
    return (
        <div className="search-page">
            <Filter/>
            <SeachResults/>
        </div>
    )
}

export default Contacts