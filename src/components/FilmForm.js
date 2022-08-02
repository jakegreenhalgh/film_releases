import React, {useState} from "react";

const FilmForm = ({onFormSubmit}) => {
    const [title, setTitle] = useState("");
    const [url, setURL] = useState("");

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleURLChange = (event) => {
        setURL(event.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const titleToSubmit = title.trim();
        const urlToSubmit = url.trim();

        if (!titleToSubmit || !urlToSubmit) {
            return
        }

        onFilmSubmit({
            title: titleToSubmit,
            url: urlToSubmit
        });

        setTitle("");
        setURL("");
    }
    
    return (
        <form className="film-form" onSubmit={handleFormSubmit}>
            <input 
            type='text'
            placeholder="Film Title"
            value={title}
            onChange={handleTitleChange}></input>
            <input 
            type='text' 
            placeholder="URL"
            value={url}
            onChange={handleURLChange}>
            </input>
            <input type='submit'value='Submit'></input>
        </form>
    )
}

export default FilmForm