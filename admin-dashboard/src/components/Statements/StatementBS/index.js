import React from 'react';

import { PageTitle } from '../../../components';
import Statements from '../../Statements';
export default function StatementBS() {

    return (
        <>
            <PageTitle
                titleHeading="재무상태표"
                titleDescription="재무상태표는 회사의 누적된 자산과 부채를 나타내는 재무제표입니다. "
            />
            <Statements flag='BS'/>
        </>
    );

}
