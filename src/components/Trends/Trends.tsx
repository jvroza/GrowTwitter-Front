import * as S from "./styleTrends";

const trendList = [
    { category: "Esportes · Há 45 min", title: "Assunto sobre esportes" },
    { category: "Assunto do Momento em Brasil", title: "Assunto do Momento" },
    { category: "Música · Assunto do Momento", title: "Assunto sobre Música" },
    { category: "Cinema · Assunto do Momento", title: "Assunto sobre Filmes e Cinema" },
];

export const Trends = () => {
    return (
        <S.Container>
            <S.Panel>
                <S.PanelTitle>O que está acontecendo?</S.PanelTitle>
                {trendList.map((trend, i) => (
                    <S.TrendItem key={i}>
                        <S.TrendCategory>{trend.category}</S.TrendCategory>
                        <S.TrendTitle>{trend.title}</S.TrendTitle>
                    </S.TrendItem>
                ))}
                <S.ShowMore>Mostrar mais</S.ShowMore>
            </S.Panel>
        </S.Container>
    );
};