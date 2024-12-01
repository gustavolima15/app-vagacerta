import React from 'react';
import { Feather } from '@expo/vector-icons';
import { 
    Wrapper,
    Container, 
    Header, 
    HeaderButtonContainer, 
    ButtonIcon, 
    ButtonText,
    ContentContainer,
} from '../Profile/styles';
import Logo from '../../components/Logo';
import theme from '../../theme';
import Input from '../../components/Input'
import { Button } from '../../components/Button';


export default function Profile({navigation }) {
    const handleUpdate = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('user');
            const user = JSON.parse(jsonValue);
            const id = user.id;

            const response = await api.put(/usuarios/${id}, 
                { 
                    nome: name, 
                    email: email, 
                    senha: password 
                }
            );

            const updatedUser = response.data.user;

            await AsyncStorage.setItem('user', JSON.stringify(updatedUser));
            setName(updatedUser.nome);
            setEmail(updatedUser.email);


            alert('Informações atualizadas com sucesso!');
        } catch (error) {
            console.error('Erro ao atualizar os dados do usuário:', error);
            alert('Erro ao atualizar as informações. Tente novamente.');
        }
    };
    return (
        <Wrapper>
            <Header>
                <HeaderButtonContainer onPress={() => navigation.goBack()}>
                    <ButtonIcon>
                        <Feather size={16} name="chevron-left" color={theme.COLORS.BLUE} />
                    </ButtonIcon>
                    <ButtonText>
                        Voltar
                    </ButtonText>
                </HeaderButtonContainer>
                <Logo />
            </Header>

            <Container>
                <ContentContainer>
                    <Input label='Nome' placeholder='digite seu nome'/>
                    <Input label='E-mail' placeholder='digite seu e-mail'/>
                    <Input label='Senha' placeholder='digite sua senha'/>
                </ContentContainer>

                <Button 
                    title="Salvar informações" 
                    noSpacing={true} 
                    variant='primary'
                    />
            </Container>
        </Wrapper>
    );
}
