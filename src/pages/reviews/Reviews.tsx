import { ClientReview } from '../../data/@types/clientReview';
import Messages from '../../components/messages/Messages';
import reviews from "../../data/json/reviews.json";
import Entry from '../../components/entry/Entry';
import { useState, useEffect } from 'react';

export function Reviews() {
  const [content, setContent] = useState<ClientReview[]>([]);
  const url = 'http://localhost:5000/reviews';

  const [authorName, setAuthorName] = useState('');
  const [messageContent, setMessageContent] = useState('');

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
      } catch {
        console.log('Fetching data from "src/data/reviews/reviews.json"');
        setContent(reviews);
      }
    }
    fetchData();
  });

  const sendReview = () => {
    if (authorName === '') {
      alert("Please, insert an author name.");
      return;
    }

    if (messageContent === '') {
      alert("Please, insert a message");
      return;
    }

    const postBody = {
      author: authorName,
      message: messageContent
    }

    const fetchData = async () => {
      try {
        await fetch(url,
          { method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(postBody) });

          const authorInput: HTMLInputElement = document.getElementById('name-input') as HTMLInputElement;
          const messageInput: HTMLInputElement = document.getElementById('message-input') as HTMLInputElement;
          authorInput.value = '';
          messageInput.value = '';

      } catch(e: any) {
        console.log(e);
      }
    }
    fetchData();
  }

    const updateAuthor = (nextAuthor: string) => {
      setAuthorName(nextAuthor);
    }

    const updateMessage = (nextMessage: string) => {
      setMessageContent(nextMessage);
    }

  return(
    <>
      <Entry 
        clickHandler={ sendReview }
        nameHandler={ updateAuthor }
        messageHandler={ updateMessage } />
      <Messages clientReviews={ content } />
    </>
  );
}
