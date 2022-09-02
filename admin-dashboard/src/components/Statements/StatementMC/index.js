import React from 'react';

import { PageTitle } from '../../../components';
import Statements from '../../Statements';
export default function StatementMC() {

    return (
        <>
            <PageTitle
                titleHeading="제조원가명세서"
                titleDescription="제조원가명세서는 회사의 제조부문에 사용된 총비용을 나타내는 재무제표입니다. "
            />
            <Statements flag='IS'/>
        </>
    );

}
