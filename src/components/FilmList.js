import React from "react";
import Film from "./Film";

const FilmList = ({films}) => {

    const FilmNodes = films.map(film => {
        return (
          <Film title={film.title} key={film.id} url={film.url}/>
        );
      });

    return (
       <>
        {FilmNodes}
        </>
    )
}

export default FilmList