import './index.css';

const Search = ({title, image, type, genre, summary}) => {
    return ( 
        <div className=" rounded-md shadow-md p-4">
            <div>
                <h2 className="">Title: {title}</h2>
                <img src={image} alt="" className="w-auto h-auto"/>
                <h3 className="">Type: {type}</h3>
                <h4 className="">Genre: {genre}</h4>
                <p dangerouslySetInnerHTML={{ __html: summary }}></p>
            </div>
        </div>
     );
}
 
export default Search;