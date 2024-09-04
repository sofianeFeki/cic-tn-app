import axios from 'axios';

const API_BASE_URL = 'https://cic-server-ygl9.onrender.com/api';

export const productCreate = async (formData) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };
  return await axios.post(`${API_BASE_URL}/product/create`, formData, config);
};

export const getProduct = async (slug) =>
  await axios.get(`${API_BASE_URL}/product/${slug}`);

export const updateProduct = async (slug, formData) =>
  await axios.put(`${API_BASE_URL}/admin/product-update/${slug}`, formData);

export const getProducts = async (page, sort, itemsPerPage, filters = {}) =>
  await axios.post(`${API_BASE_URL}/products`, {
    page,
    itemsPerPage,
    sort,
    filters,
  });

export const removeProduct = async (slug) =>
  await axios.delete(`${API_BASE_URL}/product/${slug}`, {});

export const searchProducts = async (
  query,
  page,
  sort,
  itemsPerPage,
  filters = {}
) =>
  await axios.post(`${API_BASE_URL}/products/search/${query}`, {
    page,
    itemsPerPage,
    sort,
    filters,
  });

export const getProductsByCategory = async (
  category,
  page,
  sort,
  itemsPerPage,
  filters = {}
) => {
  return await axios.post(`${API_BASE_URL}/products/category/${category}`, {
    page,
    itemsPerPage,
    sort,
    filters,
  });
};

export const getNewArrivals = async (limit) =>
  await axios.get(`${API_BASE_URL}/products/newArrivals/${limit}`);
export const getBestSellers = async (limit) =>
  await axios.get(`${API_BASE_URL}/products/bestSellers/${limit}`);
export const getProductTitlesByCategories = async () => {
  return await axios.get(`${API_BASE_URL}/products/titles`);
};

export const getProductByTitle = async (title) => {
  return await axios.get(`${API_BASE_URL}/products/title/${title}`);
};

export const saveProductOfTheYear = (productTitle) => {
  return axios.post(`${API_BASE_URL}/products/saveProductOfTheYear`, {
    title: productTitle,
  });
};

export const getProductOfTheYear = async () => {
  return await axios.get(`${API_BASE_URL}/products/productOfTheYear`);
};
