import React, { useContext, useState, useEffect } from 'react';
import Modal from 'react-modal';

import { moneyToWon } from 'utils/utils';
import * as Styled from 'components/header/searchBar/priceModal/PriceModalInfo.style';

import { ModalProps } from 'model/priceModal.model';
import usePriceModalProvider from './usePriceModalProvider';

function PriceModal({ style, isClick }: ModalProps) {
  const [coordinateData, isOpen, lowPrice, highPrice, averagePrice, onCloseModal] = usePriceModalProvider(isClick);

  return (
    <Modal isOpen={isOpen} style={style} onRequestClose={onCloseModal}>
      <Styled.ModalInfo>
        <Styled.Title>가격 범위</Styled.Title>
        <Styled.PriceWrapper>
          <Styled.Price>{moneyToWon(lowPrice)}</Styled.Price>
          <Styled.RowLine>-</Styled.RowLine>
          <Styled.Price>{moneyToWon(highPrice)}+</Styled.Price>
        </Styled.PriceWrapper>
        <Styled.Average>평균 1박 요금은 {averagePrice} 입니다. </Styled.Average>
        <Styled.Graph coordinate={coordinateData} />
      </Styled.ModalInfo>
    </Modal>
  );
}

export default PriceModal;
