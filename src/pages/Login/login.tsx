import { useAuth } from "../../hooks/useAuth.ts";
import * as S from "./styleLogin";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export interface LoginProps {
    username: string;
    password: string;
}

export function Login () {
    const [formData, setFormData] = useState<LoginProps>({
        username: "",
        password: "",
    })

    const navigate = useNavigate();
    const{ signIn } = useAuth()

    const handleLogin = async () => {
        try {
            await signIn(formData);
            navigate("/feed");

        } catch (error: unknown) {
            if (error instanceof Error) {
                alert(error.message);
            } else {
                alert("Erro ao fazer login");
            }
        }
    };

    return (
        <S.PageWrapper>
            <S.Card>
                <S.LeftPanel>
                    <S.BrandTitle>Growtwitter</S.BrandTitle>
                    <S.BrandSubtitle>
                        Trabalho final do bloco intermediário
                    </S.BrandSubtitle>
                    <S.BrandDescription>
                        O Growtwitter é a plataforma definitiva para todos os apaixonados por redes
                        sociais que buscam uma experiência familiar e poderosa, semelhante ao Twitter,
                        mas com um toque único. Seja parte desta comunidade que valoriza a liberdade
                        de expressão, a conexão com pessoas de todo o mundo e a disseminação de ideias.
                    </S.BrandDescription>
                </S.LeftPanel>

                <S.RightPanel>
                    <S.FormTitle>Entrar no Growtwitter</S.FormTitle>

                    <form
                        onSubmit={async (e) => {
                            e.preventDefault();
                            await handleLogin();
                        }}
                    >
                        <S.FieldGroup>
                            <S.Label>Username</S.Label>
                            <S.Input
                                type="text"
                                value={formData.username}
                                onChange={(e) =>
                                    setFormData({ ...formData, username: e.target.value })
                                }
                            />
                        </S.FieldGroup>

                        <S.FieldGroup>
                            <S.Label>Password</S.Label>
                            <S.Input
                                type="password"
                                value={formData.password}
                                onChange={(e) =>
                                    setFormData({ ...formData, password: e.target.value })
                                }
                            />
                        </S.FieldGroup>

                        <S.LoginButton type="submit">Entrar</S.LoginButton>

                        <S.RegisterText>
                            Não tem uma conta?{" "}
                            <S.RegisterLink onClick={() => navigate("/register")}>
                                Crie uma agora
                            </S.RegisterLink>
                        </S.RegisterText>
                    </form>
                </S.RightPanel>
            </S.Card>
        </S.PageWrapper>
    )
}