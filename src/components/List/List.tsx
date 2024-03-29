import React from 'react';
import ListItem from './ListItem';
import { City } from '../../types/dataTypes';
import styled from 'styled-components';

interface Props {
    items: City[];
}

const StyledList = styled.ul`
    display:flex;
    justify-content:center;
    flex-flow: row wrap;
    padding: 0;
`;

const List: React.FC<Props> = ({ items }) => {
    return (
        <StyledList>
            {Object.values(items).map((item) =>{
                return(
                <ListItem key={`${item.name}-${item.country}`} item={item} />
            )})}
        </StyledList>
    )
}

export default List;