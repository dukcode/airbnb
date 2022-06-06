import React from 'react';
import * as Styled from 'components/header/searchBar/searchBarItem/searchBarItem.style';

type SearchBarItemProps = {
  title: string;
  contents: string;
  // onClick: any;
};

function SearchBarItem({ title, contents }: SearchBarItemProps) {
  return (
    <Styled.Item>
      <Styled.ItemTitle>{title}</Styled.ItemTitle>
      <Styled.ItemContents>{contents}</Styled.ItemContents>
    </Styled.Item>
  );
}

export default SearchBarItem;
