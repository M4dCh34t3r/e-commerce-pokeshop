import { EntryWrapper, EntryLabel, MessageInput, NameInput, EntryButton } from "./style";

interface EntryProps {
  clickHandler: Function;
  messageHandler: Function;
  nameHandler: Function;
}
export default function ReviewEntry(props: EntryProps) {
  return(
    <EntryWrapper>
      <EntryLabel>REVIEW AUTHOR</EntryLabel>
      
      <NameInput 
        type="text"
        id="name-input"
        onChange={ (event) => props.nameHandler(event.target.value) } />
      
      <EntryLabel>REVIEW MESSAGE</EntryLabel>
      
      <MessageInput 
        type="text"
        id="message-input"
        onChange={ (event) => props.messageHandler(event.target.value) } />
      
      <EntryButton onClick={ () => props.clickHandler() }>SEND</EntryButton>
    </EntryWrapper>
  );
}
