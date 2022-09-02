import React,{ useState } from 'react';
import {Document, Page,pdfjs} from 'react-pdf'
import { applyMiddleware } from 'redux';

import { PageTitle } from '../../components';

import { ExampleWrapperSeamless } from '../../layout-components';

import WidgetsCarousels3 from './Carousels3';
//import WidgetsCarousels4 from '../../../src/assets/0.pdf';
//import WidgetsCarousels5 from '../../../src/assets/cert_DS/비앤지/2021/인건비/1월 급여대장.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
export default function PayrollSingoseu() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber,setPageNumber] = useState(1);

  function onDocumentLoadSuccess({numPages}){
      setNumPages(numPages);
  }

  return (
    <>
      <PageTitle
        titleHeading="원천징수이행상황신고서"
        titleDescription="회사가 지급한 상대방의 소득을 원천징수한 상세 내역을 국세청에 보고하는 서식입니다. 징수한 원천세를 납부서와 함께 확인할 수 있습니다. "
      />

      <div>
          <Document
            //file="/cert_DS/비앤지/2021/인건비/1월 급여대장.pdf"
            file="http://localhost:3000/cert_DS/비앤지/2021/인건비/1월 급여대장.pdf"
            //file={WidgetsCarousels5}
            options={{ workerSrc: "/pdf.worker.js" }}
            //onLoadSuccess={onDocumentLoadSuccess}
          >
              <Page pageNumber={pageNumber}/>
          </Document>
      </div>
      <div>
          <iframe src="/cert_DS/비앤지/2021/인건비/1월 급여대장.pdf"></iframe>
      </div>

{/* 
      <ExampleWrapperSeamless>
        <WidgetsCarousels3 />
      </ExampleWrapperSeamless> */}

    </>
  );
}
