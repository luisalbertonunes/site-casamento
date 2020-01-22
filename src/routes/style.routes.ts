import styled from 'styled-components';
import { Grid, Flex } from 'captalys-core';
import { medias } from './props.routes';

export const GridInitial = styled(Grid).attrs({ medias })`
    min-height:100vh;
    height:100%;
    background-color:white;
    color: #333;
`;

export const FlexInitial = styled(Flex).attrs({
    alignItems: 'center',
    width: '100%'
})``;