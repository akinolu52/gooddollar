import { Button, PhaseButton, Text } from '@components';
import { COLORS } from '@constants';
import React from 'react';
import { View } from 'react-native';

const BackUp = () => {
    return (
        <>
            <View style={{ borderWidth: 1, }}>
                <Text
                    lineHeight={22}
                    fontWeight="bold"
                    textAlign="center"
                    spacing={0.08}
                    color={COLORS.HEADER}
                >
                    please save your 12-word pass phrase
                </Text>
                <Text
                    lineHeight={22}
                    color={COLORS.HEADER}
                    spacing={-0.16}
                    textAlign="center"
                >
                    and keep it in a secure locationso you can recover your wallet anytime
                </Text>
            </View>

            <View style={{ margin: 10 }}>
                <PhaseButton number="1" text="bike" />
                <PhaseButton number="2" text="bike" />
            </View>

            <Button
                label="DONE"
            />
        </>
    );
};

export default BackUp;
