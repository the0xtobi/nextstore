import { Metadata } from "next";
import { getOrderById } from "@/lib/actions/order.actions";
import { notFound } from "next/navigation";
import OrderDetailsTable from "./order-details-table";
import { ShippingAddress } from "@/types";
import { auth } from "@/auth";

export const metadata: Metadata = {
  title: "Order Details",
};

export default async function OrderDetailsPage(props: {
  params: Promise<{ id: string }>;
}) {
  const session = await auth();
  const { id } = await props.params;

  const order = await getOrderById(id);
  if (!order) notFound();
  return (
    <>
      <OrderDetailsTable
        order={{
          ...order,
          shippingAddress: order.shippingAddress as ShippingAddress,
        }}
        isAdmin={session?.user.role === "admin" || false}
      />
    </>
  );
}
