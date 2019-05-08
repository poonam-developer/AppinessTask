// import axios from 'axios';
import { DashboardType } from './ActionType';
import jsonData from '../../config/res.json';

export function getEmployeeList() {
  console.log('ramji');
  return (dispatch) => {
    dispatch({
      type: DashboardType.COMPAIN_SUCCESS,
      compainInfo: jsonData.user
    });
  };
}
