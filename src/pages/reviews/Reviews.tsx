import { ClientReview } from '../../data/@types/clientReview';
import Messages from '../../components/messages/Messages';
import reviews from "../../data/json/reviews.json";
import { useState, useEffect } from 'react';

export function Reviews() {
    const [content, setContent] = useState<ClientReview[]>([]);
    const url = 'http://localhost:5000/reviews';

    useEffect(() =>  {
      const fetchData = async () => {
        try {
          let response = await fetch(url);

          if (response.status === 200) {
            console.log("Data successfully fetched from ", url);
            let data = await response.json();
            setContent(data);
            return
          }
          throw 'Error fetching reviews';

        } catch(e: any) {
          console.log(e);
          console.log('Fetching data from "src/data/reviews/reviews.json"')
          setContent(reviews);
        }
      }
      fetchData();
    });

  return(
    <Messages clientReviews={ content }/>
  );
}
