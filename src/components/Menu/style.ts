import styled from 'styled-components';
import { Flex } from 'captalys-core';

export const MenuStyle = styled(Flex).attrs({
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    direction: 'row'
})`
    border: 1px solid red;
    background-color: white;
`;

export const MenuContainer = styled(Flex).attrs({
    height: '100%',
    width: '100%',
    direction: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px'

})``;