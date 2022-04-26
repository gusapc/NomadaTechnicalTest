import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ApiService from '../services/ApiService';
import camelcase from 'camelcase';

export default function (modelName = '', method = '', params = {}, customStateKey = '') {
	const stateKey = customStateKey || camelcase(modelName, { pascalCase: true });
	const storeData = useSelector((state) => state[stateKey]);
	const dispatch = useDispatch();

	const fetch = async (data = {}) => {
		if (!method) return;
		if (storeData?.isLoading) return;
		dispatch({ type: `GET_${modelName}_BEGIN` });
		await ApiService[method]({ ...params, ...data })
			.then((res) => {
				const { data } = res;
				dispatch({ type: `GET_${modelName}_SUCCESS`, payload: data });
			})
			.catch((err) => {
				dispatch({ type: `GET_${modelName}_FAILURE`, payload: { error: err } });
			});
	};

	const reset = () => dispatch({ type: `RESET_${modelName}` });

	const setData = (data) =>
		dispatch({
			type: `SET_${modelName}_DATA`,
			payload: {
				data,
			},
		});

	useEffect(() => {
		if (params.skip) {
			return;
		}
		if (params.skipIfItExist && storeData.data) {
			return;
		}
		fetch();
	}, []);

	return { ...storeData, fetch, setData, reset };
}
