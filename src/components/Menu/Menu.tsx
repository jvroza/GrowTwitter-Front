import * as S from "./styleMenu";
import { Home, Hash, User } from "lucide-react";
import { useAuth } from "../../hooks/useAuth.ts";
import {useNavigate} from "react-router-dom";

export const Menu = () => {

    const navigate = useNavigate();
    const { signOut } = useAuth()

    const handleLogout = async () => {
        await signOut();
        navigate("/login");
    };


    return (
        <S.Container>
            <S.TopSection>
                <S.Logo onClick={() => navigate("/feed")}>
                    <S.LogoGrow>grow</S.LogoGrow>
                    <S.LogoTweet>tweet</S.LogoTweet>
                </S.Logo>

                <S.NavList>
                    <S.NavItem onClick={() => navigate("/feed")}>
                        <Home size={20} />
                        Página Inicial
                    </S.NavItem>
                    <S.NavItem onClick={() => navigate("/explore")}>
                        <Hash size={20} />
                        Explorar
                    </S.NavItem>
                    <S.NavItem onClick={() => navigate("/profile")}>
                        <User size={20} />
                        Perfil
                    </S.NavItem>
                </S.NavList>

                <S.TweetButton onClick={() => navigate("/feed")}>Tweetar</S.TweetButton>
            </S.TopSection>

            <S.BottomSection>
                <S.UserRow>
                    <S.Avatar src="/assets/avatar.png" alt="avatar" />
                    <S.UserInfo>
                        <S.UserName>Growdev</S.UserName>
                        <S.UserHandle>@growdev</S.UserHandle>
                    </S.UserInfo>
                </S.UserRow>
                <S.LogoutButton onClick={handleLogout}>SAIR</S.LogoutButton>
            </S.BottomSection>
        </S.Container>
    );
};