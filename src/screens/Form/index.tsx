import React, { useState } from 'react';
import { Image, Alert } from 'react-native';
import { Wrapper,Container, Form, TextContainer, TextBlack, TextLink, TextLinkContainer } from './styles';
import BGTop from '../../assets/BGTop.png';
import Logo from '../../components/Logo';
import Input from '../../components/Input';
import { Button } from '../../components/Button';
import api from '../../services/api';

export default function FormScreen({navigation}) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    const handleRegister = async () => {
        if (!name || !email || !password) {
            alert('Preencha todos os campos!');
            return;
        }
        try {
            const response = await api.post('/usuarios', { 
                nome: name, 
                email: email, 
                senha: password 
            });

            if (response.status === 201) {
                Alert.alert('Sucesso', 'Usuário criado com sucesso!');
                navigation.navigate('Login');
            }
        } catch (error) {
            console.error('Erro ao criar usuário:', error);
            Alert.alert('Erro', 'Não foi possível criar o usuário. Tente novamente.');
        }
    };
    return (
        <Wrapper>
            <Image source={BGTop} />

            <Container>
                <Form>
                    <Logo />
                    <Input
                        label='Nome'
                        placeholder='Digite seu nome'
                        value={name}
                        onChangeText={setName}
                    />
                    <Input
                        label='E-mail'
                        placeholder='Digite seu e-mail'
                        value={email}
                        onChangeText={setEmail}
                    />
                    <Input
                        label='Senha'
                        placeholder='Digite sua senha'
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                    <Button
                        title="Criar Conta"
                        noSpacing={true}
                        variant='primary'
                        onPress={handleRegister}
                    />
                    <TextContainer>
                        <TextBlack>Já tem uma conta?</TextBlack>
                        <TextLinkContainer onPress={() => navigation.navigate('Login')}>
                            <TextLink>
                                Faça seu login.
                            </TextLink>
                        </TextLinkContainer>
                    </TextContainer>
                </Form>
            </Container>
        </Wrapper>
    );
}