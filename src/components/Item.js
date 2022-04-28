import React from "react";
import { ListItem, ListItemText } from '@material-ui/core/';

const Item = ({ name, dateils }) => {


    return (
        <ListItem>
            <ListItemText
                primary={name}
                secondary={dateils}
            />
        </ListItem>

    )
}

export default Item;