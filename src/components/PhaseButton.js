import { COLORS } from '@constants';
import React, { memo } from 'react';
import styled from 'styled-components/native';
import Text from './Text';

export default PhaseButton = memo(({ number, text }) => {
    return (
        <PhaseContainer>
            <NumberContainer>
                <Text color={COLORS.WHITE}>{number}</Text>
            </NumberContainer>
            <Text>{text}</Text>
        </PhaseContainer>
    )
});

const PhaseContainer = styled.Pressable`
    height: 36px;
    border: 1px solid #00AFFF;
    border-radius: 80px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    flex-direction: row;
    align-items: center;
    overflow: hidden;
`;

const NumberContainer = styled.View`
    width: 28px;
    height: 100%;
    margin-right:8px;
    background: #00AFFF 0% 0% no-repeat padding-box;
    justify-content: center;
    align-items: center;
`;
