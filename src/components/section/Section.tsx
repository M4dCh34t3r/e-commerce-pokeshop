
import { CardButton, Card, CardName, CardImage, CardPrice, SectionName, Wrapper} from './style';
import { ShopItem } from '../../data/@types/shopItem';

interface SectionProps {
  sectionName: string;
  shopItems: ShopItem[];
}

export default function Section(props: SectionProps) {

  const anchorMouseOverHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const a: HTMLAnchorElement = event.currentTarget;
    a.style.backgroundColor = "#58afdb";
    a.style.color = "#f4f4f4"
  };

  const anchorMouseOutHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const a: HTMLAnchorElement = event.currentTarget;
    a.style.backgroundColor = "#60c0ef";
    a.style.color = "#ffffff"
  };

  const lIMouseOverHandler = (event: React.MouseEvent<HTMLLIElement>) => {
    const lI: HTMLLIElement = event.currentTarget;
    lI.style.backgroundColor = "#f0f0f0";
  };

  const lIMouseOutHandler = (event: React.MouseEvent<HTMLLIElement>) => {
    const lI: HTMLLIElement = event.currentTarget;
    lI.style.backgroundColor = "#f9f9f9";
  };

  return(
    <>
      <SectionName> { props.sectionName } </SectionName>
      <Wrapper>
        { props.shopItems.map(shopItem => (
          <Card key={ shopItem.id }
            onMouseOver={ lIMouseOverHandler }
            onMouseOut={ lIMouseOutHandler }>
            <CardImage src={ shopItem.image} alt={ shopItem.name }/>
            <CardName> { shopItem.name }</CardName>
            <CardPrice> { shopItem.price }₽ </CardPrice>
            <CardButton href="#"
            onMouseOver={ anchorMouseOverHandler }
            onMouseOut={ anchorMouseOutHandler }>
            Add to cart</CardButton>
          </Card>
        )) }
      </Wrapper>
    </>
  );
}
