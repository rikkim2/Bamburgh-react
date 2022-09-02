import React from 'react';

import { PageTitle } from '../../../components';
import Statements from '../../Statements';
export default function StatementIS() {

    return (
        <>
            <PageTitle
                titleHeading="손익계산서"
                titleDescription="손익계산서는 회사의 당기 매출액과 총비용을 나타내는 재무제표입니다. "
            />
            <Statements flag='IS'/>
        </>
    );

}
