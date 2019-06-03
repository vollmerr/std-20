import ReactDOM from 'react-dom/server';
import JsPDF from 'jspdf';

import schema from './schema';

const PAGE_WIDTH = 216;
const PAGE_HEIGHT = 280;
const PADDING = 8;

const FIELD_VALUE_HEIGHT = 6;
const FIELD_LABEL_HEIGHT = 6;
const FIELD_PADDING = 2;
const SECTION_HEADER_PADDING = 5;
const SUB_SECTION_HEADER_PADDING = 4;
// have helpText, add some additional padding
const HEIGHT_WITH_HELP = FIELD_LABEL_HEIGHT + FIELD_VALUE_HEIGHT + FIELD_PADDING;

/* eslint-disable class-methods-use-this */
class PrintForm {
  constructor(values) {
    this.x = PADDING;
    this.y = PADDING;
    this.rowHeight = FIELD_LABEL_HEIGHT + FIELD_VALUE_HEIGHT;
    this.values = values;

    this.doc = new JsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'letter',
      putOnlyUsedFonts: true,
    });

    this.resetColor();
    this.setFontSize();
  }

  resetColor() {
    this.doc.setDrawColor('#333');
  }

  setFontSize(size = 10) {
    this.doc.setFontSize(size);
  }

  setFontStyle(style = 'regular') {
    this.doc.setFontStyle(style);
  }

  getValue(field) {
    return this.values[schema[field].name];
  }

  getLabel(field) {
    return schema[field].label;
  }

  getHelpText(field) {
    return schema[field].helpText;
  }

  getText(text) {
    let value = ReactDOM.renderToString(text);
    const link = /(.*?(?=<a))(.*?(?=<\/a>))<\/a>(.*)/.exec(value);
    // have link, remove anchor markup
    if (link) {
      const linkText = link[2].replace(/(.*?(?=>))>/, '');
      value = link[1] + linkText + link[3];
    }
    return value;
  }

  getWidth(width) {
    return ((PAGE_WIDTH - (PADDING * 2)) / 12) * width - FIELD_PADDING;
  }

  addRow = (height) => {
    const y = height || this.rowHeight;

    this.x = PADDING;
    this.y = this.y + y;
    this.rowHeight = FIELD_LABEL_HEIGHT + FIELD_VALUE_HEIGHT;
  }

  addPage() {
    this.doc.addPage();
    this.x = PADDING;
    this.y = PADDING;
    this.addPageHeader();
  }

  addPageIfNeeded(rowHeight) {
    // add new page if overflow
    if (this.y + rowHeight > PAGE_HEIGHT - PADDING) {
      this.addPage();
    }
  }

  addLabel(field) {
    const label = this.getLabel(field);

    if (label) {
      this.setFontSize(8);
      this.setFontStyle('bold');
      this.addText(label, this.x, this.y);
      this.setFontStyle();
      this.setFontSize();
      return true;
    }

    return false;
  }

  addText(text, x, y, width) {
    const options = {};
    if (width) {
      options.maxWidth = this.getWidth(width) - (FIELD_PADDING * 2);
    }
    this.doc.text(this.getText(text), x, y, options);
  }

  addHelpText(field, x, y, width) {
    const helpText = this.getHelpText(field);

    if (helpText) {
      this.setFontSize(8);
      this.addText(helpText, x, y, width);
      return true;
    }

    return false;
  }

  addTextField({ value, field, width }) {
    const fieldValue = value || this.getValue(field);
    const fieldWidth = this.getWidth(width);

    let rowCount = 1;
    if (fieldValue) {
      rowCount = Math.ceil(this.doc.getTextWidth(fieldValue) / fieldWidth);
    }
    // default if invalid height found
    if (Number.isNaN(rowCount) || !rowCount) {
      rowCount = 1;
    }
    // set textareas as larger if they are not already
    if (schema[field].tag === 'textarea' && rowCount < 2) {
      rowCount = 2;
    }

    const valueHeight = rowCount * FIELD_VALUE_HEIGHT;
    const rowHeight = valueHeight + FIELD_LABEL_HEIGHT;
    // add new page if overflow
    this.addPageIfNeeded(rowHeight);
    // update rowHeight for adjusting in addRow if larger
    if (rowHeight > this.rowHeight) {
      this.rowHeight = rowHeight;
    }

    this.addLabel(field);

    // add value
    this.setFontSize(11);
    this.addText(fieldValue, this.x + 2, this.y + FIELD_LABEL_HEIGHT, width);
    // add box around value
    this.doc.setDrawColor('#999');
    this.doc.rect(this.x, this.y + 2, fieldWidth, valueHeight);
    this.resetColor();

    this.addHelpText(field, this.x, this.y + valueHeight + FIELD_LABEL_HEIGHT);

    this.x += fieldWidth + FIELD_PADDING;
    this.setFontSize();
  }

  addCheckField({ value, field, width }) {
    const fieldValue = value || this.getValue(field);
    const fieldWidth = this.getWidth(width);

    this.addLabel(field);
    this.setFontSize(11);

    // add checkboxes with labels
    let fieldY;
    schema[field].options.forEach((option, i) => {
      fieldY = this.y + (i * 6) + 2;
      // draw checkbox
      this.doc.setDrawColor('#999');
      this.doc.rect(this.x, fieldY, 4, 4);
      this.resetColor();
      // checked checkbox
      if (fieldValue && fieldValue.includes(option.value)) {
        this.doc.text('X', this.x + 0.5, fieldY + 3);
      }
      // add label to checkbox
      this.addText(option.label, this.x + 6, fieldY + 3, width);
    });

    this.addHelpText(field, this.x, fieldY + 10);

    this.x += fieldWidth + FIELD_PADDING;
    this.setFontSize();
  }

  addRadioField({ value, field, width }) {
    const fieldValue = value || this.getValue(field);
    const hasLabel = this.addLabel(field);

    this.doc.setFontSize(11);
    // add checkboxes with labels
    const fieldY = hasLabel ? this.y + 4 : this.y;
    let fieldX = this.x;
    schema[field].options.forEach((option) => {
      // draw radio
      this.doc.setDrawColor('#999');
      this.doc.circle(fieldX + 4, fieldY, 2);
      this.resetColor();
      // checked checkbox
      if (fieldValue === option.value) {
        this.addText('X', fieldX + 2.5, fieldY + 1.5);
      }
      // add label to radio
      this.addText(option.label, fieldX + 8, fieldY + 1, width);
      fieldX += this.doc.getTextWidth(this.getText(option.label)) + 12;

      this.setFontSize(10);
    });

    this.addHelpText(field, this.x, fieldY + 8, width);

    this.x += this.getWidth(width) + FIELD_PADDING;
  }

  addSectionHeader(text) {
    this.addRow(2);
    this.addPageIfNeeded(15);

    this.doc.setDrawColor('#999');
    this.doc.line(this.x + PADDING, this.y, PAGE_WIDTH - (PADDING * 2), this.y);
    this.resetColor();

    this.addRow(SECTION_HEADER_PADDING);

    this.setFontStyle('italic');
    this.addText(text, this.x, this.y);
    this.setFontStyle();

    this.addRow(SECTION_HEADER_PADDING);
  }

  addSectionSubHeader(text) {
    this.addRow(SUB_SECTION_HEADER_PADDING * 2);
    this.addPageIfNeeded(10);
    this.setFontStyle('italic');
    this.addText(text, this.x, this.y);
    this.setFontStyle();
    this.addRow(SUB_SECTION_HEADER_PADDING);
  }

  addPageHeader() {
    // left
    this.addText('STATE OF CALIFORNIA', PADDING, PADDING);
    this.setFontSize(9);
    this.addText('California Department of Technology', PADDING, PADDING + 3);
    // right
    this.setFontSize();
    this.setFontStyle('bold');
    let text = 'TELECOMMUNICATIONS SERVICE REQUEST';
    let offsetWidth = PAGE_WIDTH - this.doc.getTextWidth(text) - PADDING;
    this.addText(text, offsetWidth, PADDING);
    this.setFontSize(9);
    this.setFontStyle();
    text = 'STD. 20 (Rev. 9/2017)';
    offsetWidth = PAGE_WIDTH - this.doc.getTextWidth(text) - PADDING;
    this.addText(text, offsetWidth, PADDING + 3);
    // center
    this.setFontStyle('italic');
    offsetWidth = (PAGE_WIDTH - this.doc.getTextWidth(text) - 2 * PADDING) / 2;
    this.addText('Attach addtional information as needed', offsetWidth, PADDING + 10);
    // reset
    this.setFontStyle();
    this.setFontSize();
    this.addRow(18);
  }

  addSection1to3() {
    this.addTextField({ field: 'agencyRequestNumber', width: 3 });
    this.addTextField({ field: 'requestDate', width: 3 });
    this.addCheckField({ field: 'requestType', width: 6 });
    this.addRow();
    this.addTextField({ field: 'contractorName', width: 6 });
    this.addRow(HEIGHT_WITH_HELP);
  }

  addSection4() {
    this.addSectionHeader('4. Agency Information');
    this.addTextField({ field: 'agencyDepartment', width: 4 });
    this.addTextField({ field: 'agencyContact', width: 4 });
    this.addTextField({ field: 'agencyPhone', width: 2 });
    this.addTextField({ field: 'agencyFax', width: 2 });
    this.addRow();
    this.addTextField({ field: 'agencyDivision', width: 4 });
    this.addTextField({ field: 'gsaCode', width: 4 });
    this.addTextField({ field: 'agencyEmail', width: 4 });
    this.addRow();
    this.addTextField({ field: 'agencyServiceAddress', width: 4 });
    this.addTextField({ field: 'agencyRequestedAddress', width: 4 });
    this.addTextField({ field: 'agencyBillingAddress', width: 4 });
    this.addRow();
  }

  addSection5() {
    this.addSectionHeader('5. Eligibility');
    this.addRadioField({ field: 'eligibilityState', width: 6 });
    this.addRadioField({ field: 'eligibilityNonState', width: 6 });
    this.addRow(HEIGHT_WITH_HELP);
  }

  addSection6() {
    this.addSectionHeader('6. CATR/ATR Information');
    this.addTextField({ field: 'catrName', width: 4 });
    this.addTextField({ field: 'catrEmail', width: 4 });
    this.addTextField({ field: 'catrPhone', width: 2 });
    this.addTextField({ field: 'catrFax', width: 2 });
    this.addRow();
    this.addTextField({ field: 'catrAddress', width: 4 });
    this.addTextField({ field: 'catrCity', width: 4 });
    this.addTextField({ field: 'catrState', width: 2 });
    this.addTextField({ field: 'catrZip', width: 2 });
    this.addRow();
    this.addTextField({ field: 'catrSignature', width: 4 });
    this.addTextField({ field: 'catrTitle', width: 4 });
    this.addTextField({ field: 'catrDate', width: 4 });
    this.addRow(HEIGHT_WITH_HELP);
  }

  addSection7() {
    const orderDetails = this.getValue('orderDetails');

    this.addSectionHeader('7. Order Detail');
    this.addRow(-SECTION_HEADER_PADDING * 2); // remove padding added
    // go through all orders building the section. Only first will be on first page
    orderDetails.forEach((order, i) => {
      this.addSectionSubHeader(`Request #${i + 1}`);
      this.addRadioField({ field: 'orderType', width: 8, value: order.orderType });
      this.addTextField({ field: 'serviceDate', width: 4, value: order.serviceDate });
      this.addRow();
      this.addTextField({ field: 'quantity', width: 4, value: order.quantity });
      this.addTextField({ field: 'recurringCost', width: 4, value: order.recurringCost });
      this.addTextField({ field: 'nonRecurringCost', width: 4, value: order.nonRecurringCost });
      this.addRow();
      this.addTextField({ field: 'stateContractNumber', width: 4, value: order.stateContractNumber });
      this.addTextField({ field: 'featureId', width: 4, value: order.featureId });
      this.addTextField({ field: 'billingAccount', width: 4, value: order.billingAccount });
      this.addRow();
      this.addTextField({ field: 'orderDescription', width: 12, value: order.orderDescription });
      this.addRow();
      this.addTextField({ field: 'orderComment', width: 12, value: order.orderComment });
      this.addRow();
    });
  }

  save() {
    this.addPageHeader();
    this.addSection1to3();
    this.addSection4();
    this.addSection5();
    this.addSection6();
    this.addSection7();

    // this.doc.autoPrint();
    this.doc.save('std-20.pdf');
  }
}

export default PrintForm;
