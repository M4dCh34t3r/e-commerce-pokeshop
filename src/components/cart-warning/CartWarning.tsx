import { WarningLink, WarningWrapper } from "./style";

interface WarningProps {
  warningMessage: string;
  redirectPageTo: string;
  redirectMessage: string;
}

export default function CartWarning(props: WarningProps) {
  return(
    <WarningWrapper>
      <h1>
        { props.warningMessage }
      </h1>
      <WarningLink
        to={ props.redirectPageTo }>
        { props.redirectMessage }
      </WarningLink>
    </WarningWrapper>
  );
}
