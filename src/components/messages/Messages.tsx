import { MessageAuthor, MessageCard, MessageDate,MessageText, Wrapper } from "./style";
import { ClientReview } from "../../data/@types/clientReview";
import formatDate from "../../services/utils/formatDate";

interface MessageProps {
  clientReviews: ClientReview[];
}

export default function Messages(props: MessageProps) {
  console.log(props.clientReviews[0]);
  return(
    <Wrapper>
      { props.clientReviews.map(clientReview => (  
        <MessageCard key={ clientReview.id }>
          <MessageAuthor>
            { clientReview.author }
          </MessageAuthor>
          <MessageText>
            { clientReview.message }
          </MessageText>
          <MessageDate>
            { formatDate(clientReview.creationDate) }
          </MessageDate>
        </MessageCard>
      )) }
    </Wrapper>
  );
}
