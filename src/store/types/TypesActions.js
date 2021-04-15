import { toastr } from 'react-redux-toastr';
import 'firebase/firestore';

import { TYPE_FETCHED } from './TypesActionsTypes';
import firebaseInstance from '../../firebase/index';

const collection = firebaseInstance.firestore().collection('types');

export function getAll(completed) {
  return dispatch => {
    collection.get().then(result => {
      const list = result.docs.map(d => ({ id: d.id, ...d.data() }))
        .sort((a, b) => b.createdAt - a.createdAt);
      dispatch({ type: TYPE_FETCHED, payload: list });
      if (completed) completed(true);
    })
    .catch(() => {
      toastr.error('Erro', `Falha ao carregar tipos!`);
      if (completed) completed(false);
    });
  };
}

