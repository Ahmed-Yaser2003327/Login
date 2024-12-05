import * as yup from "yup";

export const validationSchemaForContact = yup.object().shape({
  name: yup
    .string()
    .required("يرجى إدخال الاسم")
    .min(3, "يجب أن يكون الاسم على الأقل 3 أحرف"),

  email: yup
    .string()
    .required("يرجى إدخال البريد الإلكتروني")
    .email("يرجى إدخال بريد إلكتروني صحيح"),

  message: yup
    .string()
    .required("يرجى إدخال الرسالة")
    .min(10, "يجب أن تحتوي الرسالة على 10 أحرف على الأقل")
    .max(500, "يجب ألا تتجاوز الرسالة 500 حرف"), // لضمان عدد معقول من الأحرف
});
