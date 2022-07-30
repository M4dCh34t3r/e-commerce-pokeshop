
import { CardButton, Card, CardName, CardImage, CardPrice, Tooltip, SectionName, Wrapper} from './style';
import { ShopItem } from '../../data/@types/shopItem';

interface SectionProps {
  sectionName: string;
  shopItems: ShopItem[];
  clickHandler: Function;
}

export default function Section(props: SectionProps) {
  return(
    <>
      <SectionName> { props.sectionName } </SectionName>
      <Wrapper>
        { props.shopItems.map(shopItem => (
          <Card key={ shopItem.id }>
            
            <Tooltip> { shopItem.description } </Tooltip> 
            
            <CardImage src={ shopItem.image} alt={ shopItem.name }/>

            <CardName> { shopItem.name } </CardName>
            
            <CardPrice> { shopItem.price }₽ </CardPrice>
            
            <CardButton onClick={ () => props.clickHandler(shopItem.id) }> Add to cart </CardButton>
          </Card>
        )) }
      </Wrapper>
    </>
  );
}
