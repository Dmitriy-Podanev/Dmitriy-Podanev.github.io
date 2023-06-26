import React from "react";
import {menuBtn} from "../../routes/constants";
import {Outlet} from "react-router-dom";
import List from "@mui/material/List";
import {getTemplateBtn} from "./helper";


interface props {
    listBtn: menuBtn[],
}

export const SideBar: React.FC<props> = ({listBtn}: props) =>
    (
        <>
            <List
                component="div"
                id={'sidebar'}
                aria-labelledby="nested-list-subheader"
            >
                <ul>
                    {listBtn.map((item) => {
                        return getTemplateBtn(item);
                    })}
                </ul>
            </List>
            <div id='detail'>
                <Outlet/> {/*здесь будут вложенные компоненты, которые прилетают из children корневого файла*/}
            </div>
        </>


    )


