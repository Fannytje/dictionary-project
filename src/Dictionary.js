import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword); 
    let [results, setResults] = useState (null);
    let [loaded, setLoaded] = useState (false);
    let [photos, setPhotos] = useState(null);
    
    function handleDictionaryResponse(response) {
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response){
            setPhotos(response.data.photos);
    }

    function search() {
         //documentation: https://dictionaryapi.dev/ 
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        let pexelsApiKey="563492ad6f91700001000001b547eceed2674bbc967427a9e0fbae7f";
        let pexelsApiUrl=`https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        let headers =  { Authorization: `Bearer ${pexelsApiKey}`};
        axios.get(pexelsApiUrl, {headers : headers}).then(handlePexelsResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
    return (
        <div className="Dictionary">
        <section>
        <h2>What word would you like to look up?</h2>
           <form className="mb-3" onSubmit={handleSubmit} >
            <input type="search" defaultValue={props.defaultKeyword} onChange={handleKeywordChange} class="rounded"/> 
           </form>
        </section>
        <Results results={results}/>
        <Photos photos={photos}/>
        </div>
    );
    }else {
        load();
        return "Loading...";
    }
}