import * as Styled from './styles';

export interface CardProps {
  email: string;
  id: string;
}

export function Card({ email, id }: CardProps) {
  return (
    <Styled.Item>
      <span>
        <strong>Email: </strong>
        {email}
      </span>
      <span>
        <strong>Id: </strong>
        {id}
      </span>
    </Styled.Item>
  );
}
