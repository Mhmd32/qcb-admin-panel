import axios from 'axios';

const API_URL = 'http://localhost:7071/api/tool_get_functions';

export interface ApiRequest {
  database_name: string;
  container_name: string;
  itemId: string;
}

export const fetchData = async (containerName: string) => {
  try {
    const response = await axios.post(API_URL, {
      database_name: "QCB_AI_DB_UAT",
      container_name: containerName,
      itemId: "1"
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

export const updateData = async (containerName: string, data: any) => {
  try {
    const response = await axios.post(API_URL, {
      database_name: "QCB_AI_DB_UAT",
      container_name: containerName,
      itemId: "1",
      data: data
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to update data');
  }
};