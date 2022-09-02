import React from 'react';
import { Button  } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const KejungListDetail = (props)=>{


    return(
        <tr>
            <td className="text-center text-black-50">
                <span>{props.Tran_Dt}</span>
            </td>
            <td>
                <b>{props.Remk}</b>
                <span className="d-block text-black-50 font-size-sm">
                {props.Trader_Name}
                </span>
            </td>

            <td className="font-size-lg font-weight-bold text-right">
                <small>차)</small>
                <span>{props.TranAmt_Cr}</span>
            </td>
            <td className="font-size-lg font-weight-bold text-right">
                <small>대)</small>
                <span>{props.TranAmt_Dr}</span>
            </td>                        
            <td className="text-warning text-right">
                <span>{props.TranSum}</span>
            </td>
            <td className="text-right">
                <Button className="btn-neutral-primary mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                <FontAwesomeIcon
                    icon={['fas', 'search']}
                    className="font-size-sm"
                />
                </Button>
                <Button className="btn-neutral-first mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                <FontAwesomeIcon
                    icon={['far', 'edit']}
                    className="font-size-sm"
                />
                </Button>
            </td>
        </tr>
    )
}

export default KejungListDetail;
