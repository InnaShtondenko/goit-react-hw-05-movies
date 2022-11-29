import { additionalLinks } from 'const/additionalLinks'; 
import { LinksList, LinksItem, StyledLink } from './Additional.links.styled';

export const AdditionalLinks = () => (
  <LinksList>
    {additionalLinks.map(({ path, text }) => (
      <LinksItem key={path}>
        <StyledLink to={path}>{text}</StyledLink>
      </LinksItem>
    ))}
  </LinksList>
);