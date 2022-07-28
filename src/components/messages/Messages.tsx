import { CardWrapper, MessageAuthor, MessageCard, MessageDate,MessageText } from "./style";
import { ClientReview } from "../../data/@types/clientReview";
import formatDate from "../../services/utils/formatDate";

interface MessageProps {
  clientReviews: ClientReview[];
}

export default function Messages(props: MessageProps) {
  console.log(props.clientReviews[0]);
  return(
    <CardWrapper>
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
    </CardWrapper>
  );
}
