import { Component, Inject, OnInit } from '@angular/core';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import * as XLSX from 'xlsx';
/* import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts'; */
const pdfMake = require('pdfmake/build/pdfmake');
const pdfFonts = require('pdfmake/build/vfs_fonts');
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'amb-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css'],
})
export class ExportComponent implements OnInit {
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA)
    private data: { content: any[]; dto: any; title: string; fileName: string },
    private reference: MatBottomSheetRef<ExportComponent>
  ) {}

  ngOnInit(): void {}

  export(evt: any, option: string, action: string = '') {
    evt.preventDefault();
    switch (option) {
      case 'pdf':
        this.exportToPDF(
          this.data.content,
          this.data.title,
          this.data.fileName,
          this.data.dto,
          action
        );
        break;
      case 'excel':
        this.exportToExcel(
          this.data.content,
          this.data.title,
          this.data.fileName,
          this.data.dto
        );
        break;
    }
  }

  exportToExcel(content: any[], title: string, fileName: string, dto: any) {
    const dataToExport = dto.mapping(content);
    const sheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataToExport);
    const book: XLSX.WorkBook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(book, sheet, title);
    XLSX.writeFile(book, `${fileName}.xlsx`);
    this.reference.dismiss();
  }

  exportToPDF(
    content: any[],
    title: string,
    fileName: string,
    dto: any,
    action: string
  ) {
    const dataToExport = dto.mapping(content);
    const informationFormatted: any = this.getInformationFormatted(
      dataToExport,
      title
    );
    const docGenerated = pdfMake.createPdf(informationFormatted);
    switch (action) {
      case 'open':
        docGenerated.open();
        break;
      case 'download':
        docGenerated.download();
        break;
      case 'print':
        docGenerated.print();
        break;
    }
    this.reference.dismiss();
  }

  getInformationFormatted(contentData: any[], title: string): object {
    const dataFormatted = {
      content: [
        {
          text: title,
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20],
        },
      ],
      styles: {
        header: {
          fontSize: 16,
          bold: true,
          margin: [0, 0, 0, 10],
          decoration: 'underline',
        },
      },
    };

    this.addHeadersToPDF(dataFormatted, contentData[0]);
    this.addItemsToPDF(dataFormatted, contentData);

    return dataFormatted;
  }

  addHeadersToPDF(dataFormatted: any, element: any): void {
    const headersColumns = [];
    for (const prop in element) {
      headersColumns.push({
        text: prop,
        style: 'header',
      });
    }

    dataFormatted.content.push({
      columns: headersColumns,
    });
  }

  addItemsToPDF(dataFormatted: any, contentData: any) {
    contentData.forEach((el: any) => {
      const items = [];
      for (const prop in el) {
        items.push(el[prop]);
      }

      dataFormatted.content.push({
        columns: items,
      });
    });
  }
}
