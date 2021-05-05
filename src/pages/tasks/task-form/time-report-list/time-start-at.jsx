import React from 'react';
import { Field } from 'redux-form';

import Input from '../../../../common/fields/input/index';

export default function TimeStartAt(props) {
  const { index } = props;
  
  return (
    <Field placeholder="Informe a hora inicial" type="time" 
      name={ `timeReports[${index}].startAt` } component={ Input }/>
  );
}
