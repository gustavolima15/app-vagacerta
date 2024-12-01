import { Image } from 'react-native';
import {useState} from 'react'
import { Wrapper,Container, Form, TextContainer, TextBlack, TextLink, TextLinkContainer } from './styles';
import api from '../../services/api';

import BGTop from '../../assets/BGTop.png';
import Logo from '../../components/Logo';
import Input from '../../components/Input';
import { Button } from '../../components/Button';


export default function Login({ navigation }) {


    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


    const handleLogin = async () => {
      try {
        const response = await api.post('/usuarios/login', { email, senha });
        const { token, user } = response.data;

        if (user) {
          const jsonValue = JSON.stringify(user);
          await AsyncStorage.setItem('user', jsonValue);
          await AsyncStorage.setItem('token', token);

          setUser(user);
          setToken(token);

          navigation.navigate('Auth', { screen: 'Home' });
        } else {
          console.log('Login failed', 'Email or password is incorrect');
        }
      } catch (error) {
        console.error(error);
        console.log('Login failed', 'An error occurred during login');
      }
    };

    return (
        <Wrapper>
            <Image source={BGTop} />

            <Container>

                <Form>
                    <Logo />
                    <Input label='E-mail' placeholder='digite seu e-mail' value={email}
        onChangeText={setEmail}/>
                    <Input label='Senha' placeholder='digite sua senha' value={senha}
        onChangeText={setSenha}/>
                    <Button 
                    title="Entrar" 
                    noSpacing={true} 
                    variant='primary'
                    onPress={handleLogin}
                    />
                    <TextContainer>
                        <TextBlack>Não tem uma conta?</TextBlack>
                        <TextLinkContainer onPress={() => navigation.navigate('FormScreen')}>
                            <TextLink>
                                    Crie agora mesmo.
                            </TextLink>
                        </TextLinkContainer>
                    </TextContainer>
                </Form>

            </Container>
        </Wrapper>
    );
}
