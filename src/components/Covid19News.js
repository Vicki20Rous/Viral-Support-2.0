import News from './Pages/Article';
import { useEffect, useState } from 'react';

import newsapi from "./NewsAPI/newsApi";

const Health = () => {
    const [data, setData] = useState([]);

    const mergeNewsData = (responses) => {
        const arrNews = [];
        responses.map(response => {
            arrNews.push(...response.articles);
        });

        return arrNews;
    }

    useEffect(() => {
        let unmounted = false;

        if (!unmounted) {            
            const arrPromiseNews = [];
            ['us', 'gb', 'cn', 'za', ].map(country => {
                arrPromiseNews.push(
                    newsapi.v2.topHeadlines({
                        category: 'health',
                        country,
                        pageSize: 8,
                        page: 1
                    })
                )
            });
    
            Promise.all(arrPromiseNews)
                .then(responses => {
                    if (responses[0].status === "ok") {
                        setData(mergeNewsData(responses))
                    }
                })
                .catch(err => {
                    console.log(`Something error ${err}`);
                })
        }

        return () => {
            unmounted = true;
        }
    }, []);

    return (
        <>
            <News 
                category="Health"
                data={data}
            />
        </>
    );
}

export default Health;