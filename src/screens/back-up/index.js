import { Button, PhaseButton, Text } from '@components';
import { COLORS } from '@constants';
import { copyToClipboard, toast } from '@utils';
import React from 'react';
import { Pressable } from 'react-native';
import styled from 'styled-components/native';

const PHRASES = ['bike', 'dark', 'jumping', 'cave', 'rooms', 'socks', 'dove', 'orange', 'bottle', 'blanket', 'salt', 'bug'];

const copyAllPhrases = () => copyToClipboard(PHRASES.join('\n'), 'All Phrases copied');

const emailPhrases = () => toast('Sending you an email...'); const BackUp = () => {

    return (
        <>
            <Container>
                <TopContainer>
                    <Text
                        lineHeight={22}
                        fontWeight="bold"
                        align="center"
                        spacing={0.08}
                        color={COLORS.HEADER}
                    >
                        please save your 12-word pass phrase
                    </Text>
                    <SubText
                        lineHeight={22}
                        color={COLORS.HEADER}
                        spacing={-0.16}
                        align="center"
                    >
                        and keep it in a secure location
                        {'\n'}
                        so you can recover your wallet anytime
                    </SubText>
                </TopContainer>

                <PhraseContainer>
                    {PHRASES.map((phrase, index) => (
                        <PhraseContent key={index}>
                            <PhaseButton number={index + 1} text={phrase} />
                        </PhraseContent>
                    ))}
                </PhraseContainer>
                <ActionContainer>
                    <Pressable onPress={copyAllPhrases}>
                        <CopyAllText
                            align="center"
                            color="#00AFFF"
                            decoration="underline"
                        >
                            Copy all to clipboard
                        </CopyAllText>
                    </Pressable>
                    <Pressable onPress={emailPhrases}>
                        <Text
                            align="center"
                            color="#00AFFF"
                            decoration="underline">
                            Send me a backup email
                        </Text>
                    </Pressable>
                </ActionContainer>
            </Container>

            <Button label="DONE" />
        </>
    );
};

export default BackUp;

const Container = styled.View`
    flex: 1;
    marginTop: 55px;
`;

const TopContainer = styled.View`
    marginBottom: 18px;
`;

const SubText = styled(Text)`
    marginTop: 5px;
`;

const PhraseContainer = styled.View`
    flexDirection: row;
    flexWrap: wrap;
    alignItems: flex-start;
    justifyContent: space-between;
`;

const PhraseContent = styled.View`
    width: 49%;
    marginBottom: 8px;
`;

const ActionContainer = styled.View`
    marginTop: 31px;
    marginBottom: 39px;
`;

const CopyAllText = styled(Text)`
    marginBottom: 31px;
`;