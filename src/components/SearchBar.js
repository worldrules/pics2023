import { useState } from 'react';

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('')

    const handleFormSubmit = (e) => {

        e.preventDefault();
        onSubmit(term);
    }

    const handleChange = (e) => {
        setTerm(e.target.value)
    }


    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <input value={term} onChange={handleChange} />
            </div>
        </form>
    );

}


export default SearchBar;