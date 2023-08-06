import * as C from './styles';
import { Link } from 'react-router-dom';
import { ProfileIcon } from '../../Svgs/ProfileSvg/ProfileSvg';
import {BookIcon} from '../../Svgs/BookSvg/BookSvg';
import { MailIcon } from '../../Svgs/MailSvg/MailSvg';
import { CheckIcon } from '../../Svgs/CheckSvg/CheckSvg';
type Props = {
    title : string,
    description : string,
    icon : string,
    path : string,
    active : boolean,
}

export const SideBarItem = ({title,description,icon,path,active} : Props) => {
    return (
        <C.Container>
            <Link to = {path}>
                <C.Info>
                    <C.Title>{title}</C.Title>
                    <C.Description>{description}</C.Description>
                </C.Info>
                <C.IconArea active={active}>
                    {icon == 'profile' &&  <ProfileIcon fill="white" width = "24" height = "24" ></ProfileIcon>}
                    {icon == 'book' &&  <BookIcon fill="white" width = "24" height = "24" ></BookIcon>}
                    {icon == 'mail' &&  <MailIcon fill="white" width = "24" height = "24" ></MailIcon>}
                    {icon == 'check' &&  <CheckIcon fill="white" width = "24" height = "24" ></CheckIcon>}
                </C.IconArea>
                <C.Point active={active}></C.Point>
            </Link>
        </C.Container>
    );
}