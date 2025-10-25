"use server";
import { LATEST_PRODUCTS_LIMIT } from "../constants";
import { prisma } from "@/db/prisma";
import { convertToPlainObject, formatError } from "../utils";
import { PAGE_SIZE } from "./../constants/index";
import { revalidatePath } from "next/cache";

// Get latest products
export async function getLatestProduct() {
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: "desc" },
  });
  return convertToPlainObject(data);
}

// Get single product by it's slug
export async function getProductBySlug(slug: string) {
  return await prisma.product.findFirst({
    where: { slug: slug },
  });
}

// Get all products
export async function getAllProducts({
  page,
  limit = PAGE_SIZE,
  query,
  category,
}: {
  page: number;
  limit?: number;
  query: string;
  category?: string;
}) {
  const [data, dataCount] = await Promise.all([
    prisma.product.findMany({
      skip: (page - 1) * limit,
      take: limit,
    }),
    prisma.product.count(),
  ]);

  return { data, totalPages: Math.ceil(dataCount / limit) };
}

// Delete a product
export async function deleteProduct(id: string) {
  try {
    await prisma.product.delete({
      where: { id },
    });
    revalidatePath("/admin/products");
    return { success: true, message: "Product deleted successfully" };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}
