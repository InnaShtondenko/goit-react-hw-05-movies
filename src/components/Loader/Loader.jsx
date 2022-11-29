import { ThreeDots } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export const Loader = () => (
  <LoaderContainer>
    <ThreeDots
      height="120"
      width="120"
      radius="9"
      color="#0073ff"
      ariaLabel="three-dots-loading"
      visible={true}
    />
  </LoaderContainer>
);