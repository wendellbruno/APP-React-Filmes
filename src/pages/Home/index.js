import React from "react";

import { Container, SearchButton, SearchContainer, Input } from './styles'
import { Feather } from '@expo/vector-icons'

import Header from '../../components/Header'

function Home(){
    return (
        <Container>
           <Header title="React Prime" />
            <SearchContainer>
                <Input pleaceholder="Ex vingadores"></Input>
                <SearchButton>
                    <Feather name="search" size={30} color="FFF" />
                </SearchButton>
            </SearchContainer>

        </Container>
    )
};

export default Home;