import {menuBtn} from "../../routes/constants";
import NestedList from "./nestedList";
import {Link} from "react-router-dom";
import {ListItemButton, ListItemText} from "@mui/material";
import React from "react";

export function getTemplateBtn(btn: menuBtn) {

    switch (btn.typeName) {
        case 'list':
            return NestedList(btn)
        case "route":
            return (
                <Link to={btn.path}>
                    <ListItemButton key={btn.id} sx={{pl: 4}}>
                        <ListItemText primary={btn.title}/>
                    </ListItemButton>
                </Link>
            )
        case "button":
            return (
                <ListItemButton key={btn.id} sx={{pl: 4}}>
                    <ListItemText primary={btn.title}/>
                </ListItemButton>
            )
        default:
            return null;
    }
}