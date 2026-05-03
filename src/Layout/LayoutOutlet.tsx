
import { Outlet } from "react-router";
import * as S from "./styleOutlet";
import { Menu } from "../components/Menu/Menu";
import { Trends } from "../components/Trends/Trends";


export function LayoutOutlet() {
    return (
        <S.Wrapper>
            <Menu/>
            <S.Main>
                <Outlet/>
            </S.Main>
            <Trends/>
        </S.Wrapper>

    )
}