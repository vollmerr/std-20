import React from 'react';
import { FieldArray } from 'redux-form';
import {
  FieldDate,
  FieldInput,
  FieldRadioButtons,
  Button,
} from 'state-template';

import schema from '../schema';

class Section7 extends React.Component {
  // attach array indexed name to field name (ex: orderDetails[1].quantity)
  withNamePrefix = (detail, values) => ({
    ...values,
    name: `${detail}.${values.name}`,
  })

  renderDetails = ({ fields }) => {
    if (!fields.length) {
      fields.push({});
    }

    return (
      <fieldset className={'form-group'}>
        <div className={'row align-items-center'}>
          <legend className={'col-md-6'}>7. Order Detail</legend>

          <div className={'col-md-6'}>
            <Button
              text={'Add Request'}
              variant={'primary'}
              className={'float-right m-b-md d-print-none'}
              iconProps={{ name: 'plus-line' }}
              onClick={() => fields.push({})}
            />
          </div>

          {
            fields.map((detail, index) => (
              <React.Fragment key={detail}>
                <FieldRadioButtons {...this.withNamePrefix(detail, schema.orderType)} className={'col-md-8'} inline />
                <FieldDate {...this.withNamePrefix(detail, schema.serviceDate)} className={'col-md-4'} />

                <FieldInput {...this.withNamePrefix(detail, schema.quantity)} className={'col-md-4'} />
                <FieldInput {...this.withNamePrefix(detail, schema.recurringCost)} className={'col-md-4'} />
                <FieldInput {...this.withNamePrefix(detail, schema.nonRecurringCost)} className={'col-md-4'} />

                <FieldInput {...this.withNamePrefix(detail, schema.stateContractNumber)} className={'col-md-4'} />
                <FieldInput {...this.withNamePrefix(detail, schema.featureId)} className={'col-md-4'} />
                <FieldInput {...this.withNamePrefix(detail, schema.billingAccount)} className={'col-md-4'} />

                <FieldInput {...this.withNamePrefix(detail, schema.orderDescription)} className={'col-md-12'} />

                <FieldInput {...this.withNamePrefix(detail, schema.orderComment)} className={'col-md-12'} />

                <div className={'col-md-12'}>
                  <Button
                    text={'Remove Request'}
                    variant={'default'}
                    className={'float-right d-print-none'}
                    iconProps={{ name: 'close-line' }}
                    onClick={() => fields.remove(index)}
                  />
                </div>

                {index !== fields.length - 1 && <div className={'col-md-12'}><hr /></div>}
              </React.Fragment>
            ))
          }
        </div>
      </fieldset>
    );
  }

  render() {
    return (
      <FieldArray name={schema.orderDetails.name} component={this.renderDetails} />
    );
  }
}

export default Section7;
