import React from 'react';

import { PageTitle } from '../../../components';
import PageInvoice1 from '../../../example-components/PageInvoice/PageInvoice1';
export default function StatementRE() {

    return (
        <>
            <PageTitle
                titleHeading="이익잉여금처분계산서"
                titleDescription="이익잉여금처분계산서는 현재까지 누적된 회사의 총 이익을 나타내는 재무제표입니다."
            />
            <PageInvoice1 />
        </>
    );

}
