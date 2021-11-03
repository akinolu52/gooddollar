import { COLORS } from '@constants';
import React, { memo } from 'react';
import styled from 'styled-components/native';

export default Text = memo(props => {
    const {
        variant = "body", children,
        color, fontWeight = "normal",
        fontSize = 16, lineHeight = 19,
        spacing = undefined,
        align = "center", style, ...rest
    } = props;
    return (
        <StyledText
            adjustsFontSizeToFit
            color={color}
            style={style}
            align={align}
            spacing={spacing}
            fontSize={fontSize}
            lineHeight={lineHeight}
            fontWeight={fontWeight}
            {...rest}
        >
            {children}
        </StyledText>
    )
});

const StyledText = styled.Text`
    fontWeight: ${props => props.fontWeight};
    fontFamily: 'Roboto-Regular';
    textAlign: ${props => props.align};
    fontSize:${props => props.fontSize}px;
    lineHeight:${props => props.lineHeight}px;
    color: ${props => props.color || COLORS.TEXT_PRIMARY};
    letterSpacing: ${props => props.spacing ? `${props.spacing}px` : props.spacing};
`;
