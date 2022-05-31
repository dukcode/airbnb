import React from 'react';
import Modal from 'react-modal';

import { moneyToWon } from 'utils/utils';
import * as Styled from 'components/header/searchBar/priceModal/PriceModalInfo.style';

interface ModalProps {
  priceData: number[];
  isClick: string;
  style: any;
}

interface Coordinate {
  xRange: number;
  yCoordinate: number[];
}

function PriceModal({ style, isClick, priceData }: ModalProps) {
  const lowPrice = priceData[0];
  const highPrice = priceData[priceData.length - 1];
  const averagePrice = moneyToWon(
    priceData.reduce((acc: number, el: number) => {
      return acc + el;
    }, 0) / priceData.length,
  );
  const isOpen: boolean = isClick === 'price';

  function makeYCoordinate() {
    const singleX: number = (highPrice - lowPrice) / 50;
    const yArr: number[] = [];
    const countArr: number[] = [];
    let count = 0;
    let singlePrice = lowPrice + singleX;

    priceData.forEach((price) => {
      if (price <= singlePrice) {
        count += 1;
      } else {
        singlePrice += singleX;
        countArr.push(count);
        count = 0;
        count += 1;
      }
    });

    const highCount = Math.max(...countArr);

    countArr.forEach((count) => {
      const priceRatio: number = 114 / highCount;
      yArr.push(priceRatio * count);
    });
    return yArr;
  }

  const coordinateData: Coordinate = {
    xRange: 7,
    yCoordinate: makeYCoordinate(),
  };

  return (
    <Modal isOpen={isOpen} style={style}>
      <Styled.ModalInfo>
        <Styled.Title>가격 범위</Styled.Title>
        <Styled.PriceWrapper>
          <Styled.Price>{moneyToWon(lowPrice)}</Styled.Price>
          <Styled.RowLine>-</Styled.RowLine>
          <Styled.Price>{moneyToWon(highPrice)}+</Styled.Price>
        </Styled.PriceWrapper>
        <Styled.Average>평균 1박 요금은 {averagePrice} 입니다. </Styled.Average>
        <Styled.Graphs coordinate={coordinateData} />
      </Styled.ModalInfo>
    </Modal>
  );
}

export default PriceModal;
