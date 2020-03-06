import React from 'react';
import {useLocation} from 'react-router-dom';
import {ArrowRight16} from '@carbon/icons-react';

import {HeaderContainer, Header, Image, ViewResumeLink} from './styles';

const UserHeader = ({user}) => {
    const location = useLocation();

    return (
        <HeaderContainer isHome={location.pathname === '/'}>
            <Header>
                <Image src={user.basics.picture}/>
                <div>
                    <h2>{user.basics.name}</h2>
                    <h5>{user.basics.label}</h5>
                    <p>{user.basics.region}</p>
                    <p>{user.basics.phone}</p>
                    <p><a href={'mailto:' + user.basics.email} target="_top">{user.basics.email}</a></p>
                    <p>{user.basics.headline}</p>
                </div>
            </Header>
            <div>
                <ViewResumeLink
                    href={`https://cb.lk/cvpiyush`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span>View Résumé</span>
                    <ArrowRight16/>
                </ViewResumeLink>
            </div>
        </HeaderContainer>
    );
};

export default UserHeader;
