import { useNavigate, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm , FormActions } from '../../contexts/FormContext';
import { SelectOption } from '../../components/SelectOption';
import { Theme } from '../../components/Theme';
import { useEffect } from 'react';
export const FormStep2 = () => {
    const navigate = useNavigate();
    const {state , dispatch} = useForm();

    useEffect(() => {
        if (state.name == ''){
            navigate('/')
        }else{
            dispatch({
                type : FormActions.setCurrentStep,
                payload : 2,
            });
        }
    },[])
    const handleNextStep = () => {
      if (state.name != '' && state.level != null){
        navigate('/step3')
      }else{
        alert('Selecione uma opção!')
      }
    }
    const setLevel = (level : number) => {
        dispatch({
            type : FormActions.setLevel,
            payload : level,
        })
    }
    return (
        
          <Theme>
            <C.Container>
             <p>Passo 2 de 3</p>
             <h1>{state.name}, o que melhor descreve você ?</h1>
             <p>Selecione seu estado atual profissionalmente</p>
             <hr/>
             <SelectOption
                title = 'Sou iniciante'
                description = 'Comecei a programar a 1 ano'
                icon = '🥳'
                selected = {state.level === 0}
                onClick={()=>setLevel(0)}
             />
              <SelectOption
                title = 'Sou Progamador'
                description = 'Já Programo a 2 anos ou mais'
                icon = '😵'
                selected = {state.level === 1}
                onClick={()=>setLevel(1)}
             />
             <Link to={'/'} className='backButton'>Voltar</Link>
             <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
          </Theme>
          
       
    );
}