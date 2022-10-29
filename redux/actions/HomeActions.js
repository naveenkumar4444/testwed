import axios from "axios";
import { PROXY } from '../../config'

export const GetMehndis = () => async (dispatch) => {
  try {
    const response = await axios.post(
      `${PROXY}/item/getAll`,
      {
        category: "Mehndi",
      }
    );

    console.log(response);

    dispatch({
      type: "FETCH_MEHNDI",
      payload: response.data,
    });

    console.log("working", response);
  } catch (error) {
    dispatch({
      type: "MEHNDI_REJECTED",
      payload: error.response,
    });
  }
};

export const GetHotels = () => async (dispatch) => {
  try {
    const response = await axios.post(
      `${PROXY}/item/getAll`,
      {
        category: "Hotel",
      }
    );

    dispatch({
      type: "FETCH_HOTEL",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "HOTEL_REJECTED",
      payload: error.response,
    });
  }
};

export const GetMakeups = () => async (dispatch) => {
  try {
    const response = await axios.post(
      `${PROXY}/item/getAll`,
      {
        category: "Makeup",
      }
    );

    dispatch({
      type: "FETCH_MAKEUP",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "MAKEUP_REJECTED",
      payload: error.response,
    });
  }
};

export const GetPhotographers = () => async (dispatch) => {
  try {
    const response = await axios.post(
      `${PROXY}/item/getAll`,
      {
        category: "Photographers",
      }
    );

    dispatch({
      type: "FETCH_PHOTOGRAPHER",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "PHOTOGRAPHER_REJECTED",
      payload: error.response,
    });
  }
};

export const GetDecors = () => async (dispatch) => {
  try {
    const response = await axios.post(
      `${PROXY}/item/getAll`,
      {
        category: "Planning & Decor",
      }
    );

    dispatch({
      type: "FETCH_DECOR",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "DECOR_REJECTED",
      payload: error.response,
    });
  }
};

export const GetVendors = (id) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${PROXY}/item/getAll`,
      {
        type: "Vendor",
        _id: id
      }
    );

    dispatch({
      type: "FETCH_VENDOR",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "VENDOR_REJECTED",
      payload: error.response,
    });
  }
};

export const GetVenues = (id) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${PROXY}/item/getAll`,
      {
        type: "Venue",
        _id: id
      }
    );

    dispatch({
      type: "FETCH_VENUE",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "VENUE_REJECTED",
      payload: error.response,
    });
  }
};
