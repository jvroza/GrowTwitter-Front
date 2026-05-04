import * as S from "./styleExplore";

const trends = [
    { category: "Esportes · Há 45 min", title: "Assunto sobre esportes" },
    { category: "Assunto do Momento em Brasil", title: "Assunto do Momento" },
    { category: "Música · Assunto do Momento", title: "Assunto sobre Música" },
    { category: "Cinema · Assunto do Momento", title: "Assunto sobre Filmes e Cinema" },
    { category: "Entretenimento · Assunto do Momento", title: "Assunto sobre Entretenimento" },
    { category: "Assunto do Momento em Porto Alegre", title: "Assunto do Momento em Porto Alegre" },
    { category: "Daphne · Principal Assunto do Momento", title: "Assunto sobre a Daphne" },
];

export function Explore() {
    return (
        <S.Container>
            <S.PageTitle>Explorar</S.PageTitle>
            <S.TrendList>
                {trends.map((trend, i) => (
                    <S.TrendItem key={i}>
                        <S.TrendCategory>{trend.category}</S.TrendCategory>
                        <S.TrendTitle>{trend.title}</S.TrendTitle>
                    </S.TrendItem>
                ))}
            </S.TrendList>
        </S.Container>
    );
}

