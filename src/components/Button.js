import { COLORS } from '@constants';
import React, { memo } from 'react';
import styled from 'styled-components/native';
import Text from './Text';

export default Button = memo(({ label }) => {
    return (
        <Container>
            <Text color={COLORS.WHITE} fontWeight="700">{label}</Text>
        </Container>
    )
});

const Container = styled.Pressable`
    height: 44px; 
    border-radius: 80px;
    background: #00AFFF 0% 0% no-repeat padding-box;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
