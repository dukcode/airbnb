import React from 'react';
import Modal from 'react-modal';

import { moneyToWon } from 'utils/utils';
import * as Styled from 'components/header/searchBar/priceModal/PriceModalInfo.style';

interface ModalProps {
  lowPrice: number;
  highPrice: number;
  averagePrice: number;
  yCoordinate: number[];
  isClick: string;
  style: any;
}

function PriceModal({ style, isClick, lowPrice, highPrice, averagePrice, yCoordinate }: ModalProps) {
  const isOpen: boolean = isClick === 'price';
  return (
    <Modal isOpen={isOpen} style={style}>
      <Styled.ModalInfo>
        <Styled.Title>가격 범위</Styled.Title>
        <Styled.PriceWrapper>
          <Styled.Price>{moneyToWon(lowPrice)}</Styled.Price>
          <Styled.RowLine>-</Styled.RowLine>
          <Styled.Price>{moneyToWon(highPrice)}+</Styled.Price>
        </Styled.PriceWrapper>
        <Styled.Average>평균 1박 요금은 {moneyToWon(averagePrice)} 입니다. </Styled.Average>
        <Styled.Graphs />
        {/* <Styled.Graph yCoordinate={yCoordinate} /> */}
      </Styled.ModalInfo>
    </Modal>
  );
}

export default PriceModal;
