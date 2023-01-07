import { useEffect, useState } from "react";
import "../styles/NewsFeed.css";
import axios from "axios";

function NewsFeed() {

    const [articles, setArticles] = useState({})

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://crypto-news16.p.rapidapi.com/news/top/5',
            headers: {
                'X-RapidAPI-Key': '25002bdbd2mshd0842aaee362151p107b6cjsn6a61d06aedda',
                'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
            }
        };

        axios.request(options).then(response => {
            // console.log(response.data);
            setArticles(response.data);
        }).catch(error => {
            console.error(error);
        });
    }, [])

    return (
        <div className='NewsFeed' >
            <h2>News Feed</h2>
            {(Object.values(articles)).map((title, idx) => (
                <p key={idx}>
                    <a target="_blank" href={title.url}>{title.title}</a>
                </p>
            ))}
        </div>
    )
}

export default NewsFeed;
