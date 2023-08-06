import * as C from './sytles'
import { Link } from 'react-router-dom';
export const Header = () => {
    return (
        <C.Container>
            <Link to={'/'}>
                <h1>Cadastro de Desenvolvedor</h1>
            </Link>
            <p>Faça seu cadastro !!</p>
        </C.Container>
    );
}