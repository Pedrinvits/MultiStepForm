import * as C from './sytles';
import { Theme } from '../../components/Theme';
import { useForm , FormActions } from '../../contexts/FormContext';
import { useEffect } from 'react';
import { useNavigate , Link } from 'react-router-dom';
export const Finalizacao = () => {
    const {state , dispatch} = useForm();
    const navigate = useNavigate();
    useEffect(() => {
        if (state.name == ''){
            navigate('/')
        }else{
            dispatch({
                type : FormActions.setCurrentStep,
                payload : 4,
            });
        }
    },[])
    return (
        <Theme>
            <C.Container>
                <h1>Obrigado {state.name} por finalizar seu cadastro !</h1>
                <h3>Seus dados : </h3>
                <p>Level - {state.level === 0 ? 'iniciante' : 'Programador  '}</p>
                <p>Email - {state.email}</p>
                <p>GitHub - {state.github}</p>
            </C.Container>
            <C.BackButton>
                <Link to = {'/step3'} className='backButton'>Voltar</Link>
            </C.BackButton>
        </Theme>  
    );
}