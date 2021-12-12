import React from 'react';
import styled from 'styled-components';

const Title = props => {
    const { text } = props;
    return <Title>
        { text }
    </Title>;
};

const Title = styled.span`
    font-size: 20px;
`;