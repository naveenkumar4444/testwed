import axios from "axios";
import { PROXY } from '../../config'

export const login = (mobile, password) => async (dispatch) => {
  try {
    dispatch({
      type: "LOGIN",
    });

    const response = await axios.post(`${PROXY}/users/login`, {
      mobile,
      password,
    });

    dispatch({
      type: "LOGIN_FULFILLED",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "LOGIN_REJECTED",
      payload: error.response,
    });
  }
};

export const mobileAuth = (mobile) => async (dispatch) => {
  try {
    dispatch({ type: "MOBILE_LOGIN" });
    const response = await axios.post("/api/mobile-login", {
      mobile,
    });
    dispatch({
      type: "MOBILE_LOGIN_FULFILLED",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "MOBILE_LOGIN_REJECTED",
      payload: error.response,
    });
  }
};

export const mobileUpdate = (userMobile) => async (dispatch) => {
  dispatch({
    type: "MOBILE_UPDATE",
    userMobile,
  });
};

export const sendOtp = (mobile) => async (dispatch) => {
  try {
    dispatch({ type: "SEND_OTP" });

    const response = await axios.post("/api/sms-otp", {
      mobile,
    });
    dispatch({
      type: "SEND_OTP_FULFILLED",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "SEND_OTP_REJECTED",
      payload: error.response,
    });
  }
};

export const resendOtp = (mobile) => async (dispatch) => {
  try {
    dispatch({ type: "RESEND_OTP" });

    const response = await axios.post("/api/sms-otp", {
      mobile,
    });
    dispatch({
      type: "RESEND_OTP_FULFILLED",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "RESEND_OTP_REJECTED",
      payload: error.response,
    });
  }
};

export const verifyOtp = (mobile, otp) => async (dispatch) => {
  try {
    dispatch({ type: "VERIFY_OTP" });

    const response = await axios.post("/api/verify-sms-otp", { mobile, otp });
    dispatch({
      type: "VERIFY_OTP_FULFILLED",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "VERIFY_OTP_REJECTED",
      payload: error.response,
    });
  }
};

export const register = (data) => async (dispatch) => {
  try {
    dispatch({ type: "REGISTER" });

    const response = await axios.post("/api/register", data);
    dispatch({
      type: "REGISTER_FULFILLED",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "REGISTER_REJECTED",
      payload: error.response,
    });
  }
};

export const forgotPassword = (data) => async (dispatch) => {
  try {
    dispatch({ type: "FORGOT_PASSWORD" });
    const response = await axios.post("/api/forgot-password-web", data);
    dispatch({
      type: "FORGOT_PASSWORD_FULFILLED",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "FORGOT_PASSWORD_REJECTED",
      payload: error.response,
    });
  }
};

export const tokenValidate = (token) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/verify/token`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch({
      type: "TOKEN_FULFILLED",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "TOKEN_REJECTED",
      payload: error.response,
    });
  }
};

export const logOut = () => async (dispatch) => {
  dispatch({ type: "LOGOUT_FULFILLED" });
};
