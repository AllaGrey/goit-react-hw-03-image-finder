import styled from 'styled-components';

export const GalleryItem = styled.li`
  padding: 0;
`;

export const Image = styled.img`
  display: block;
  cursor: pointer;
  transition: transform 0.35s;

  :hover {
    transform: scale(1.2);
    box-shadow: 10px 10px 10px -8px rgba(0, 0, 0, 0.75);
  }
`;
