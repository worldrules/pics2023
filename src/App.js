import searchImages from './api';
import SearchBar from './components/SearchBar'
import Imagelist from './components/Imagelist'

function App() {
    const handleSubmit = async (term) => {
        const result = await searchImages(term)

        console.log(result)

    };

    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />
            <Imagelist />
        </div>
    )
}


export default App;