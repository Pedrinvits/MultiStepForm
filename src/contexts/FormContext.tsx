import {ReactNode, createContext, useContext, useReducer} from 'react';
type State = {
    currentStep : number;
    name : string;
    level : 0 | 1 | null;
    email : string;
    github : string;
}
type Action = {
    type : FormActions;
    payload : any;
}
type ContextType = {
    state : State;
    dispatch : (action : Action ) => void;
}
type FormProviderProps = {
    children : ReactNode;
}
//Context
const FormContext = createContext <ContextType | undefined >(undefined);

const initialData : State = {
    currentStep : 0,
    name : '',
    level : null,
    email : '',
    github : ''
}
//Reduzer
export enum FormActions {
    setCurrentStep,
    setName,
    setLevel,
    setEmail,
    setGithub
}
const FormReducer = (state : State, action : Action) => {
    switch(action.type) {
        // primeiro padrâmetro recebe os dados, entra no case que executa o passo atual (action.payload) que vai ser inserida no currentStep, ai ele retorna um state com o currentStep modificado
        case FormActions.setCurrentStep :
            return {...state, currentStep : action.payload};
        case  FormActions.setName :   
            return {...state,name : action.payload};
        case  FormActions.setLevel :   
            return {...state,level : action.payload};
        case  FormActions.setEmail :   
            return {...state,email : action.payload};
        case  FormActions.setGithub :   
            return {...state,github : action.payload}; 
        // caso nao venha nenhuma acao que a gente determinou, retorna um default só com o state
        default : 
            return state;       
            
    }
}
//Provider - Vai ser o ambiente geral que vamos gerenciar nossos dados
export const FormProvider = ({children} : FormProviderProps) =>{
    // o dispatch vai ser uma funcao que vamos usar ppara executar uma ação
    const [state,dispatch] = useReducer(FormReducer, initialData); 
    const value  = {state,dispatch};
    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    );
}

// Context Hook  - utilizar e ter acesso aos dados
export const useForm = () => {
    const context = useContext(FormContext);
    if (context == undefined) {
        throw new Error('useForm precisa ser usado dentro do FormProvider');
    }
    return context;
}