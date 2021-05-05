import React from 'react';
import { Field } from 'redux-form';
import moment from 'moment';

import Input from '../../../../common/fields/input/index';

function endAtValidator(startAtRaw, endAtRaw) {
  const format = 'HH:mm';
  const startAt = moment(startAtRaw, format);
  const endAt = moment(endAtRaw, format);
  if (!startAt.isValid() && !endAt.isValid()) return null;
  if (startAt.isSame(endAt)) return 'A hora final deve ser diferente da inicial';
  if (startAt.isAfter(endAt)) return 'A hora final deve ser maior que a inicial';
}

export default function TimeEndAt(props) {
  const { index, row } = props;
  
  return (
    <Field placeholder="Informe a hora final" type="time" 
      name={ `timeReports[${index}].endAt` } component={ Input } 
      validate={ value => endAtValidator(row.startAt, value) }/>
  );
}
