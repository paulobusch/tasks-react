import React from 'react';
import { Field } from 'redux-form';

import Input from '../../../../common/fields/input/index';

export default function TimeEndAt(props) {
  const { index } = props;
  
  return (
    <Field placeholder="Informe a hora final" type="time" 
      name={ `timeReports[${index}].endAt` } component={ Input }/>
  );
}
