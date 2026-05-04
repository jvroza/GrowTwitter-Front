import { useState } from "react";
import * as S from "./styleMenu";
import { useNavigate } from "react-router-dom";
import { Home, Hash, User, Search } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";
import { TweetModal } from "../Tweets/TweetModal.tsx";
import logoImg from "../../assets/logo.png";

export const Menu = () => {
    const navigate = useNavigate();
    const { signOut, user } = useAuth();
    const [showModal, setShowModal] = useState(false);

    const handleLogout = async () => {
        await signOut();
        navigate("/login");
    };

    return (
        <S.Container>
            <S.TopSection>
                <S.Logo onClick={() => navigate("/feed")}>
                    <S.LogoImage src={logoImg} alt="growtweet" />
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
                    <S.NavItem onClick={() => navigate("/search")}>
                        <Search size={20} />
                        Pesquisar
                    </S.NavItem>
                    <S.NavItem onClick={() => navigate("/profile")}>
                        <User size={20} />
                        Perfil
                    </S.NavItem>
                </S.NavList>

                <S.TweetButton onClick={() => setShowModal(true)}>
                    Tweetar
                </S.TweetButton>
            </S.TopSection>

            <S.BottomSection>
                <S.UserRow>
                    <S.Avatar
                        src={user?.imageUrl ?? "/assets/avatar.png"}
                        alt="avatar"
                    />
                    <S.UserInfo>
                        <S.UserName>{user?.name ?? "Usuário"}</S.UserName>
                        <S.UserHandle>@{user?.username ?? ""}</S.UserHandle>
                    </S.UserInfo>
                </S.UserRow>
                <S.LogoutButton onClick={handleLogout}>SAIR</S.LogoutButton>
            </S.BottomSection>

            {showModal && <TweetModal onClose={() => setShowModal(false)} />}
        </S.Container>
    );
};