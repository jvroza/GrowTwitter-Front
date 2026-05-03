import { useState } from "react";
import * as S from "./styleRegister";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth.ts";

interface RegisterProps {
    name: string;
    username: string;
    password: string;
    imageUrl?: string;
}

export function Register() {

    const [formData, setFormData] = useState<RegisterProps>({
        name: "",
        username: "",
        password: "",
        imageUrl: "",
    });

    const navigate = useNavigate();
    const { signUp } = useAuth();

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    async function handleSubmit() {

        try {

            const payload = {
                ...formData,
                imageUrl: formData.imageUrl?.trim() || undefined,
            };

            await signUp(payload);
            navigate("/feed");

        } catch (error: unknown) {
            if (error instanceof Error) {
                alert(error.message);
            } else {
                alert("Erro ao criar conta");
            }
        }

    }

    return (
        <S.PageWrapper>
            <S.Card>
                <S.LeftPanel>
                    <S.BrandTitle>Growtwitter</S.BrandTitle>
                    <S.BrandSubtitle>Trabalho final do bloco intermediário</S.BrandSubtitle>
                    <S.BrandDescription>
                        O Growtwitter é a plataforma definitiva para todos os apaixonados por redes
                        sociais que buscam uma experiência familiar e poderosa, semelhante ao Twitter,
                        mas com um toque único. Seja parte desta comunidade que valoriza a liberdade
                        de expressão, a conexão com pessoas de todo o mundo e a disseminação de ideias.
                    </S.BrandDescription>
                </S.LeftPanel>

                <S.RightPanel>
                    <S.FormTitle>Criar conta</S.FormTitle>

                    {formData.imageUrl && (
                        <S.AvatarPreviewWrapper>
                            <S.AvatarPreview
                                src={formData.imageUrl}
                                alt="preview"
                                onError={(e) => (e.currentTarget.style.display = "none")}
                            />
                        </S.AvatarPreviewWrapper>
                    )}

                    <S.FieldGroup>
                        <S.Label>Nome</S.Label>
                        <S.Input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </S.FieldGroup>

                    <S.FieldGroup>
                        <S.Label>Username</S.Label>
                        <S.Input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </S.FieldGroup>

                    <S.FieldGroup>
                        <S.Label>Password</S.Label>
                        <S.Input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </S.FieldGroup>

                    <S.FieldGroup>
                        <S.Label>URL da foto de perfil (OPCIONAL)</S.Label>
                        <S.Input
                            type="url"
                            name="imageUrl"
                            placeholder="https://exemplo.com/minha-foto.jpg"
                            value={formData.imageUrl}
                            onChange={handleChange}
                        />
                    </S.FieldGroup>

                    <S.RegisterButton onClick={handleSubmit}>Criar conta</S.RegisterButton>

                    <S.LoginLink>
                        Já tem uma conta?{" "}
                        <S.LoginAnchor onClick={() => navigate("/login")}>
                            Entrar
                        </S.LoginAnchor>
                    </S.LoginLink>
                </S.RightPanel>
            </S.Card>
        </S.PageWrapper>
    );
};