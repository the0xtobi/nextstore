"use client";

import { useRouter } from "next/navigation";
import { Button } from "../button";

type PaginationProps = {
  page: number;
  totalPages: number;
  urlParamName?: string;
};

export default function Pagination({
  page,
  totalPages,
  urlParamName,
}: PaginationProps) {
  const router = useRouter();

  return (
    <div className="flex gap-2">
      <Button
        size="lg"
        variant="outline"
        className="w-28"
        disabled={Number(page) <= 1}
        onClick={() => router.push(`/user/orders?page=${page - 1}`)}
      >
        Previous
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="w-28"
        disabled={Number(page) >= totalPages}
        onClick={() => router.push(`/user/orders?page=${page + 1}`)}
      >
        Next
      </Button>
    </div>
  );
}
