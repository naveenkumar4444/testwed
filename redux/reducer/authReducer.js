/* eslint-disable default-case */
let auth;
const ISSERVER = typeof window === "undefined";
if (!ISSERVER) {
  auth = localStorage.getItem("wedcell");
}

let initialState = {
  auth: !!auth ? auth : {},
  isAuthenticated: !!auth,
  loading: false,
  userName: "",
  userMobile: "",
  errors: {},
  verifyLoading: false,
  isVerified: false,
  profileUpdateLoading: false,
  mobileAuth: [],
  otpLoading: false,
  sendOtp: "",
  resetPassword: "",
  IsPassword: false,
  redirectRegister: false,
  verifyOtp: "",
  verifyOtploading: false,
  forgetloading: false,
  otpVerifiedStatus: false,
  resendOtp: false,
  isProfileUpdated: false,
  isAccess: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER":
      state = {
        ...state,
        loading: true,
        errors: {},
        userName: "",
        userMobile: "",
        verifyLoading: false,
        isVerified: false,
        redirectRegister: false,
      };
      break;
    case "REGISTER_FULFILLED":
      state = {
        ...state,
        auth: action.payload.user,
        isAuthenticated: true,
        loading: false,
      };
      localStorage.setItem("wedcell", JSON.stringify(action.payload.user));
      break;
    case "REGISTER_REJECTED":
      if (action.payload.status === 422) {
        state = {
          ...state,
          errors: action.payload.data.errors,
          loading: false,
        };
      } else {
        state = {
          ...state,
          errors: action.payload.data,
          loading: false,
        };
      }
      break;
    case "MOBILE_UPDATE":
      const { userMobile } = action;
      state = {
        ...state,
        userMobile,
      };
      break;
    case "LOGIN":
      state = {
        ...state,
        loading: true,
        errors: {},
      };
      break;
    case "LOGIN_FULFILLED":
      state = {
        ...state,
        auth: action.payload.user,
        isAuthenticated: true,
        loading: false,
      };

      localStorage.setItem("wedcell", JSON.stringify(state.auth));
      break;

    case "LOGIN_REJECTED":
      if (action.payload.status === 422) {
        state = {
          ...state,
          errors: action.payload.data.errors,
          loading: false,
        };
      } else {
        state = {
          ...state,
          errors: action.payload.data,
          loading: false,
        };
      }
      break;

    case "SEND_OTP":
      state = {
        ...state,
        otpLoading: true,
        errors: {},
      };
      break;
    case "SEND_OTP_FULFILLED":
      state = {
        ...state,
        otpLoading: false,
      };
      break;
    case "SEND_OTP_REJECTED":
      state = {
        ...state,
        errors: action.payload,
        otpLoading: false,
      };
      break;
    case "RESEND_OTP":
      state = {
        ...state,
        resendOtp: false,
        otpLoading: true,
        errors: {},
      };
      break;
    case "RESEND_OTP_FULFILLED":
      state = {
        ...state,
        resendOtp: true,
        otpLoading: false,
      };
      break;
    case "RESEND_OTP_REJECTED":
      state = {
        ...state,
        errors: action.payload.data,
        otpLoading: false,
      };
      break;
    case "VERIFY_OTP":
      state = {
        ...state,
        verifyOtploading: true,
        errors: {},
        otpVerifiedStatus: false,
      };
      break;
    case "VERIFY_OTP_FULFILLED":
      state = {
        ...state,
        verifyOtp: action.data,
        verifyOtploading: false,
        otpVerifiedStatus: true,
      };
      break;
    case "VERIFY_OTP_REJECTED":
      if (action.payload.status === 422) {
        state = {
          ...state,
          errors: action.payload.data.errors,
          verifyOtploading: false,
          otpVerifiedStatus: false,
        };
      } else {
        state = {
          ...state,
          errors: action.payload.data,
          verifyOtploading: false,
          otpVerifiedStatus: false,
        };
      }
      break;
    case "LOGOUT_FULFILLED":
      state = {
        ...state,
        errors: {},
        isAuthenticated: false,
        auth: {},
        userName: "",
        userMobile: "",
        verifyLoading: false,
        isVerified: false,
        redirectRegister: false,
      };
      localStorage.removeItem("wedcell");
      window.location.reload(true);
      break;
    case "BACK_FULFILLED":
      state = {
        ...state,
        errors: {},
        auth: {},
        userName: "",
        userMobile: "",
        verifyLoading: false,
        isVerified: false,
        redirectRegister: false,
        otpVerifiedStatus: false,
      };
      break;
    case "FORGOT_PASSWORD":
      state = {
        ...state,
        forgetloading: true,
        errors: {},
      };
      break;
    case "FORGOT_PASSWORD_FULFILLED":
      state = {
        ...state,
        forgetloading: false,
        resetPassword: action.payload,
        IsPassword: true,
        auth: {},
        userName: "",
        userMobile: "",
        isVerified: false,
        otpVerifiedStatus: false,
      };
      break;
    case "FORGOT_PASSWORD_REJECTED":
      if (action.payload.status === 422) {
        state = {
          ...state,
          errors: action.payload.data.errors,
          forgetloading: false,
        };
      } else {
        state = {
          ...state,
          errors: action.payload.data,
          forgetloading: false,
        };
      }
      break;

    case "TOKEN_FULFILLED":
      if (!action.payload) {
        state = {
          ...state,
          errors: {},
          isAuthenticated: false,
          auth: {},
        };
        localStorage.removeItem("wedcell");

      }
      break;
    case "TOKEN_REJECTED":
      state = {
        ...state,
        errors: {},
        isAuthenticated: false,
        auth: {},
      };
      localStorage.removeItem("wedcell");
      break;
  }
  return state;
};

export default authReducer;
