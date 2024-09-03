import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { imageNotFound } from '../assets/images';
import { getProduct } from '../functions/product';

const initialState = {
  product: {
    Title: '',
    Description: '',
    Price: 0,
    Image: imageNotFound,
    Quantity: 0,
    sold: 0,
    color: '',
    Brand: '',
    Category: '',
    subCategory: '',
    ficheTech: [{ label: '', value: '' }],
    pdf: '',
    video: '',
  },
  status: 'idle',
  error: null,
};

export const fetchProductBySlug = createAsyncThunk(
  'product/fetchProductBySlug',
  async (slug) => {
    const response = await getProduct(slug);
    return response.data;
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    clearProduct: (state) => {
      state.product = initialState.product;
    },
    addFicheTech: (state) => {
      state.product.ficheTech.push({ label: '', value: '' });
    },
    deleteFicheTech: (state, action) => {
      state.product.ficheTech.splice(action.payload, 1);
    },
    updateFicheTech: (state, action) => {
      const { index, key, value } = action.payload;
      state.product.ficheTech[index][key] = value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductBySlug.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductBySlug.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.product = action.payload;
      })
      .addCase(fetchProductBySlug.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const {
  setProduct,
  clearProduct,
  addFicheTech,
  deleteFicheTech,
  updateFicheTech,
} = productSlice.actions;
export default productSlice.reducer;
