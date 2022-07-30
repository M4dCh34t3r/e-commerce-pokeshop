
import { CardButton, Card, CardName, CardImage, CardPrice, CardsWrapper, ItemTooltip, SectionName } from './style';
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
      <CardsWrapper>
        { props.shopItems.map(shopItem => (
          <Card key={ shopItem.id }>
            
            <ItemTooltip> { shopItem.description } </ItemTooltip> 
            
            <CardImage src={ shopItem.image} alt={ shopItem.name } />

            <CardName> { shopItem.name } </CardName>
            
            <CardPrice> { shopItem.price }₽ </CardPrice>
            
            <CardButton onClick={ () => props.clickHandler(shopItem.id) }> Add to cart </CardButton>
          </Card>
        )) }
      </CardsWrapper>
    </>
  );
}
