import React from 'react';
import { A, normalize } from 'state-template';

export const calNetLink = 'https://cdt.ca.gov/services/calnet-ordering/';

const schema = {
  // Section 1
  agencyRequestNumber: {
    name: 'agencyRequestNumber',
    label: '1. Agency Request Number',
  },
  // Section 2
  requestDate: {
    name: 'requestDate',
    label: '2. Date',
  },
  // Section 3
  requestType: {
    name: 'requestType',
    label: '3. Request Type',
    options: [
      { value: 'service', label: 'Service' },
      { value: 'equipment', label: <>Equipment (Requires a <A text={'Form 65'} href={calNetLink} />)</> }, // eslint-disable-line
      { value: 'other', label: 'Other' },
    ],
    helpText: 'Check all boxes that apply to this request',
    // 'aria-labelledby': 'section__header--3',
  },
  contractorName: {
    name: 'contractorName',
    label: 'Contractor Name',
  },
  // Section 4
  agencyDepartment: {
    name: 'agencyDepartment',
    label: 'Department',
  },
  agencyContact: {
    name: 'agencyContact',
    label: 'Contact Name',
  },
  agencyPhone: {
    name: 'agencyPhone',
    label: 'Phone Number',
    normalize: normalize.normalizePhone,
  },
  agencyFax: {
    name: 'agencyFax',
    label: 'Fax Number',
    normalize: normalize.normalizePhone,
  },
  agencyDivision: {
    name: 'agencyDivision',
    label: 'Division (Unit, etc.)',
  },
  gsaCode: {
    name: 'gsaCode',
    label: 'General Services Agency Code',
  },
  agencyEmail: {
    name: 'agencyEmail',
    label: 'Email Address',
  },
  agencyServiceAddress: {
    name: 'agencyServiceAddress',
    label: 'Present Service Address',
    tag: 'textarea',
  },
  agencyRequestedAddress: {
    name: 'agencyRequestedAddress',
    label: 'Requested Service Address',
    tag: 'textarea',
  },
  agencyBillingAddress: {
    name: 'agencyBillingAddress',
    label: 'Billing Address',
    tag: 'textarea',
  },
  //  5. Eligibility
  eligibility: {
    name: 'eligibility',
    options: [
      { value: 'state', label: 'State Government' },
      { value: 'local', label: 'Local Government **' },
      { value: 'federal', label: 'Federal Government **' },
    ],
  },
  // 6. CATR/ATR Information
  catrName: {
    name: 'catrName',
    label: 'Name',
  },
  catrEmail: {
    name: 'catrEmail',
    label: 'Email Address',
  },
  catrPhone: {
    name: 'catrPhone',
    label: 'Phone Number',
    normalize: normalize.normalizePhone,
  },
  catrFax: {
    name: 'catrFax',
    label: 'Fax Number',
    normalize: normalize.normalizePhone,
  },
  catrAddress: {
    name: 'catrAddress',
    label: 'Address',
  },
  catrCity: {
    name: 'catrCity',
    label: 'City',
  },
  catrState: {
    name: 'catrState',
    label: 'State',
  },
  catrZip: {
    name: 'catrZip',
    label: 'Zip Code',
  },
  catrSignature: {
    disabled: true,
    name: 'signature',
    label: 'Signature',
  },
  catrTitle: {
    name: 'catrTitle',
    label: 'Title',
  },
  catrDate: {
    name: 'catrDate',
    label: 'Date',
  },
  // 7. Order Detail
  orderDetails: { // grouping of all fields
    name: 'orderDetails',
  },
  orderType: {
    name: 'orderType',
    label: 'Order Type',
    options: [
      { value: 'add', label: 'Add' },
      { value: 'disconnect', label: 'Disconnect' },
      { value: 'change', label: 'Change' },
      { value: 'move', label: 'Move' },
    ],
  },
  serviceDate: {
    name: 'serviceDate',
    label: 'Requested Date of Service',
  },
  quantity: {
    name: 'quantity',
    label: 'Quantity',
  },
  recurringCost: {
    name: 'recurringCost',
    label: 'Monthly Recurring Cost (MRC)',
  },
  nonRecurringCost: {
    name: 'nonRecurringCost',
    label: 'Non Recurring Cost (NRC)',
  },
  stateContractNumber: {
    name: 'stateContractNumber',
    label: 'State Contact Number',
  },
  featureId: {
    name: 'featureId',
    label: 'Feature ID / USOC / Product ID',
  },
  billingAccount: {
    name: 'billingAccount',
    label: 'Exisiting Billing Account Number',
  },
  orderDescription: {
    name: 'orderDescription',
    label: 'Description',
    tag: 'textarea',
  },
  orderComment: {
    name: 'orderComment',
    label: 'Comment',
    tag: 'textarea',
  },
};

export default schema;
