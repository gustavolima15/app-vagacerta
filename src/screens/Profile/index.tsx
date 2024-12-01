import React, { useState, useEffect } from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';
import { Alert } from 'react-native';
import { Title } from '../Details/styles';


export default function Profile({navigation }) {
    const [id, setId] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const getData = async () => {
            try {

                const jsonValue = await AsyncStorage.getItem('user');
                const user = JSON.parse(jsonValue);
                const response = await api.get(`usuarios/${user.id}`);
                const userData = response.data;

                setId(userData.id);
                setName(userData.nome);
                setEmail(userData.email);
            } catch (e) {
                console.error('Erro ao buscar dados do usuário:', e);
            }
        };

        getData();
    }, []);

    const handleUpdate = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('user');
            const user = JSON.parse(jsonValue);
            const id = user.id;

            const response = await api.put(`/usuarios/${id}`, 
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
    }
    const handleLogout = async () => {
        try {

            await AsyncStorage.removeItem('token');
            await AsyncStorage.removeItem('user');

            navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
            });

            Alert.alert('Logout realizado com sucesso!');
        } catch (error) {
            console.error('Erro ao realizar logout:', error);
            Alert.alert('Erro ao realizar logout. Tente novamente.');

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

            <Title>Atualizar Cadastro</Title>

            <Container>
                <ContentContainer>
                    <Input 
                        label="Nome" 
                        placeholder="Digite seu nome" 
                        value={name} 
                        onChangeText={setName} 
                    />
                    <Input 
                        label="E-mail" 
                        placeholder="Digite seu e-mail" 
                        value={email} 
                        onChangeText={setEmail} 
                    />
                    <Input 
                        label="Senha" 
                        placeholder="Digite sua nova senha" 
                        value={password} 
                        onChangeText={setPassword} 
                        secureTextEntry 
                    />
                </ContentContainer>

                <Button 
                    title="Salvar informações" 
                    noSpacing={true} 
                    variant="primary" 
                    onPress={handleUpdate}
                />
                <Button 
                    title="Sair" 
                    noSpacing={true} 
                    variant="primary" 
                    onPress={handleLogout}
                />
            </Container>
        </Wrapper>
    );
}