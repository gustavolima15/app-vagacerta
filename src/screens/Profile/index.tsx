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
    const [id, setId] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const getData = async () => {
            try {
                // Recupera o usuário do AsyncStorage
                const jsonValue = await AsyncStorage.getItem('user');
                const user = JSON.parse(jsonValue);
const response = await api.get(/usuarios/${user.id});
                const userData = response.data;

                // Atualiza os estados com os dados do usuário
                setId(userData.id);
                setName(userData.nome);
                setEmail(userData.email);
            } catch (e) {
                console.error('Erro ao buscar dados do usuário:', e);
            }
        };

        getData();
    }, []);
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
