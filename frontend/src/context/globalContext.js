import React, { createContext, useReducer, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../services/api';
import reducer, { types, initialState } from './reducer';

export const GlobalContext = createContext(null);

export const ThemeContext =  createContext(null);

export default function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const history = useHistory();

  const listIncidents = useCallback(async() => {
    const ongId = localStorage.getItem('ongId');

    try{
      dispatch({type: types.CLEAN_STATE});
      dispatch({type: types.IS_LOADING });

      const incidents = await api.get('/profile', {
        headers: {
          authorization: ongId
        }
      });

      dispatch({type: types.LIST_INCIDENTS, incidents: incidents.data})
    }catch(err) {
      dispatch({type: types.SET_ERRORS, errors: err });

    }
  }, []);

  async function handleDeleteIncident(id) {
    const ongId = localStorage.getItem('ongId');

    try {
      dispatch({type: types.IS_LOADING });

      await api.delete(`/incidents/${id}`, {
        headers: {
          authorization: ongId
        }
      });

      dispatch({type: types.DELETE_INCIDENT, id})
      
    } catch(err) {
      dispatch({type: types.SET_ERRORS, errors: err });
    }
  }

  async function handleNewIncident(data) {
    const ongId = localStorage.getItem('ongId');
    
    try {
      dispatch({type: types.IS_LOADING })
      const incident = await api.post('/incidents', data, {
          headers: {
            authorization: ongId
          }
        });
      dispatch({type: types.ADD_INCIDENT, incident})

      history.push('/profile');
    } catch(err) {
      dispatch({type: types.SET_ERRORS, errors: err });
    }
  }

  async function handleRegister(data) {
    try {
      const response = await api.post('/ongs', data);

      alert(`Seu ID de acesso: ${response.data.id}`);

      history.push('/');
    }catch(err) {
      alert(err);
    }
  }

  async function handleLogin(data) {
		try{
      
      dispatch({type: types.IS_LOADING })
			const response = await api.post('/sessions', data);
			localStorage.setItem('ongId', data.id);
      localStorage.setItem('ongName', response.data.name);
      
      
      setTimeout(() => {
        dispatch({type: types.CLEAN_STATE});
        history.push('/profile')
      }, 4530);
      
			
		} catch(err) {
      
      dispatch({type: types.SET_ERRORS, errors: err });
			alert(err);
		}
  }
  
  function handleLogout() {
    localStorage.removeItem('ongId');
    localStorage.removeItem('ongName');
    dispatch({type: types.CLEAN_STATE});

    history.push('/');
  }

  return(
    <GlobalContext.Provider 
      value={
        {
          ...state,
          handleNewIncident,
          listIncidents,
          handleDeleteIncident,
          handleRegister,
          handleLogin,
          handleLogout
        }
      }
    >
      {children}
    </GlobalContext.Provider>
  );
}
