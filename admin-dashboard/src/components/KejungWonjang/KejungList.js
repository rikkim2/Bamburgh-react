import React from 'react';
import { ListItem  } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function KejungList (props){

    return(    
        <ListItem
            id={props.acnt_cd}
            component="a"
            button
            //href="#/"
            onClick={(e) => {
                props.handleListItemClick(props.acnt_cd,props.acnt_nm)             
            }}
            className="bl-0 pl-4 rounded-pill"
            selected={props.selectedAcntcd===props.acnt_cd}
            >
            <span>{props.acnt_nm}</span>
            <div className="ml-auto">
            <FontAwesomeIcon
                icon={['fas', 'chevron-right']}
                className="font-size-xs opacity-3"
            />
            </div>
        </ListItem>     
        
    )
}
export default KejungList;
