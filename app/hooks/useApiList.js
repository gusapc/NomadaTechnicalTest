import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ApiService from '../services/ApiService';

import camelcase from 'camelcase';

export default function (modelName = '', method = '', params = {}) {
  const stateKey = camelcase(modelName, { pascalCase: true });
  const data = useSelector((state) => state[stateKey]);
  const dispatch = useDispatch();

  const fetch = async () => {
    if (!method) return;
    if (data.isLoading) return;
    dispatch({ type: `GET_${modelName}_BEGIN` });
    await ApiService[method](params)
      .then((res) => {
        if (!res.data) throw new Error(res.message);
        const { data } = res;
        dispatch({ type: `GET_${modelName}_SUCCESS`, payload: { list: data } });
      })
      .catch((err) => dispatch({ type: `GET_${modelName}_FAILURE`, payload: { error: err } }));
  };

  const push = (item) => dispatch({ type: `PUSH_${modelName}`, payload: item });

  useEffect(() => {
    fetch();
  }, []);

  return { ...data, fetch, push };
}
