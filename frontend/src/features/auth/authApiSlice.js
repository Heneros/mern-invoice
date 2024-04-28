import { baseApiSlice } from "../api/baseApiSlice";

export const authApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "/auth/register",
        method: "POST",
        body: userData,
      }),
    }),
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    resendVerifyEmail: builder.mutation({
      query: (userEmail) => ({
        url: "/auth/resend_email_token",
        method: "POST",
        body: userEmail,
      }),
    }),
    passwordResetRequest: builder.mutation({
      query: (formData) => ({
        url: "/auth/reset_password_request",
        method: "POST",
        body: formData,
      }),
    }),
    resetPassword: builder.mutation({
      query: (formData) => ({
        url: "/auth/reset_password",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useResendVerifyEmailMutation,
  usePasswordResetRequestMutation,
  useResetPasswordMutation,
} = authApiSlice;