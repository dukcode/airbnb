import React, { useContext } from 'react';
import Modal from 'react-modal';

import { moneyToWon } from 'utils/utils';
import * as Styled from 'components/header/searchBar/priceModal/PriceModalInfo.style';
import { Context } from 'components/context/PriceModalContext';
import { useState } from 'react';
import { useEffect } from 'react';

interface ModalProps {
  priceData: number[];
  isClick: string;
  style: unknown;
}

interface Coordinate {
  xRange: number;
  yCoordinate: number[];
}

function PriceModal({ style, isClick, priceData }: ModalProps) {
  const PriceContext = useContext(Context);
  const [title, setTitle] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const initialLowPrice = priceData[0];
  const initialHighPrice = priceData[priceData.length - 1];
  const lowPrice = initialLowPrice + (PriceContext.leftBtnValue * (initialHighPrice - initialLowPrice)) / 100;
  const highPrice = initialLowPrice + (PriceContext.rightBtnValue * (initialHighPrice - initialLowPrice)) / 100;
  const averagePrice = moneyToWon(
    priceData.reduce((acc: number, el: number) => {
      return acc + el;
    }, 0) / priceData.length,
  );
  useEffect(() => {
    setIsOpen(isClick === 'price');
  }, [isClick || isOpen]);

  function makeYCoordinate() {
    const singleX: number = (initialHighPrice - initialLowPrice) / 50;
    const yArr: number[] = [];
    const countArr: number[] = [];
    let count = 0;
    let singlePrice = initialLowPrice + singleX;

    // eslint-disable-next-line consistent-return
    function recursion(number: number, compareNum: number, plusNum: number) {
      if (number >= compareNum) {
        return number;
      }
      return recursion(number + plusNum, compareNum, plusNum);
    }

    priceData.forEach((price, idx) => {
      if (price <= singlePrice) {
        count += 1;
        if (idx === priceData.length - 1) {
          countArr.push(count);
        }
      } else {
        countArr.push(count);
        count = 0;
        count += 1;
        const tempSingle = singlePrice;
        singlePrice = recursion(singlePrice, price, singleX);
        const zeroCount = (singlePrice - tempSingle) / singleX;
        for (let i = 0; i < zeroCount - 1; i += 1) {
          countArr.push(0);
        }
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
    xRange: 7.3,
    yCoordinate: makeYCoordinate(),
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <Modal isOpen={isOpen} style={style} onRequestClose={closeModal}>
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
