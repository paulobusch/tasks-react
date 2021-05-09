import { toastr } from 'react-redux-toastr';

import { DASHBOARD_FETCHED } from './dashboard-action-types';
import firebaseInstance from './../../firebase/index';

export function loadAllTasks(completed) { 
  return dispatch => {
    const collection = firebaseInstance.firestore().collection('tasks');

    collection.get().then(result => {
      const list = result.docs.map(d => ({ id: d.id, ...d.data() }))
        .sort((a, b) => b.createdAt - a.createdAt);
      list.map(d => d.createdAt = d.createdAt.toDate());
      dispatch({ type: DASHBOARD_FETCHED, payload: list });
      if (completed) completed(true);
    })
    .catch((error) => {
      toastr.error('Erro', `Falha ao carregar registros!`);
      if (completed) completed(false);
      throw error;
    });
  };
}
