export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Nextstore";

export const APP_DESC =
  process.env.NEXT_PUBLIC_APP_DESC ||
  "A modern e-commerce store built with Nextjs";

export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || `http://localhost:3000`;

export const LATEST_PRODUCTS_LIMIT =
  Number(process.env.LATEST_PRODUCTS_LIMIT) || 4;

export const signInDefaultValues = {
  email: "",
  password: "",
};

export const signUpDefaultValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const shippingAddressDefaultValues = {
  fullName: "",
  streetAddress: "",
  city: "",
  postalCode: "",
  country: "",
};

export const PAYMENT_METHODS = process.env.PAYMENT_METHODS
  ? process.env.PAYMENT_METHODS.split(", ")
  : ["Stripe", "CashOnDelivery"];

export const DEFAULT_PAYMENT_METHOD =
  process.env.DEFAULT_PAYMENT_METHOD || "Stripe";

export const PAGE_SIZE = Number(process.env.PAGE_SIZE) || 12;

export const productDefaultValues = {
  name: "",
  slug: "",
  category: "",
  images: [],
  brand: "",
  description: "",
  price: "0",
  stock: 0,
  rating: "0",
  numReviews: "0",
  isFeatured: false,
  banner: null,
};
