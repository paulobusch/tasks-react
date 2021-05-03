import { toastr } from 'react-redux-toastr';
import firebase from 'firebase/app';
import 'firebase/auth';

import firebaseInstance from '../../firebase';
import { LOGIN, LOGOUT, LOADING } from './auth-action-types';

export function listenSessionChanged() {
  return dispatch => {
    dispatch({ type: LOADING });
    firebaseInstance.auth().onAuthStateChanged(user => {
        if (user) {
          dispatch({ type: LOGIN, payload: { id: user.uid, email: user.email } }); 
        } else {
          dispatch({ type: LOGOUT });
          window.location.href = '/login';
        }        
      }
    );
  }
}

export function login(values) {
  return () => {
    firebaseInstance.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    firebaseInstance.auth().signInWithEmailAndPassword(values.email, values.password).then(() => {
      window.location.href = '/';
    })
    .catch(e => {
      toastr.error('Erro', 'Usuário/Senha inválidos');
    });
  }
}

export function logout() {
  return () => {
    firebaseInstance.auth().signOut().then()
    .catch(e => {
      toastr.error('Erro', 'Falha ao realizar logout');
    });
  }
}
