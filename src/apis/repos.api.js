import axiosClient from "./axios.client";

const reposApi = {
  getAll(page, size, lang) {
    const url = '/repos';
    const params = {
      page,
      size,
      lang
    }
    return axiosClient.get(url, { params });
  },
  getLangTypes() {
    const url = '/repos/langs';
    return axiosClient.get(url);
  }
}

export default reposApi;