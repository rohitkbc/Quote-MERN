import httpClient from '../http-common';

const view = () => {
  return httpClient.get('/view');
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {view}