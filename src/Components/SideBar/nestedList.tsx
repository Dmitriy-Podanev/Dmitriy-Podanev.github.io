import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import {menuBtn} from "../../routes/constants";
import {KeyboardArrowDown, KeyboardArrowUp} from '@mui/icons-material';
import {getTemplateBtn} from "./helper";

export default function NestedList(btn: menuBtn) {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <ListItemButton onClick={handleClick} sx={{pl: 5, pt: 2}}>
                <ListItemText primary={btn.title}/>
                <ListItemIcon>
                    {open ? <KeyboardArrowUp/> : <KeyboardArrowDown/>}
                </ListItemIcon>
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" sx = {{pl: 4}}>
                    <ul>
                        {btn.children.map((item) => {
                            let btn: menuBtn = item as menuBtn;
                            return getTemplateBtn(btn);
                        })}
                    </ul>
                </List>
            </Collapse>
        </>

    )
        ;
}