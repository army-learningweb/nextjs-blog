import { useSearchParams, usePathname } from "next/navigation";

export const usePagination = (total : number) => {
  const ITEM_PER_PAGE = 8;
  const path = usePathname();
  const params = useSearchParams();
  const page = Number(params.get("page")) || 1;
  const numPage = Math.ceil(total / ITEM_PER_PAGE);

  const disablePrevPage = page == 1;
  const disableNextPage = page == numPage;

  const linkPagging: (string | number)[] = [];
  for (let i = 1; i <= numPage; i++) {
    linkPagging.push(i);
  }

  return {linkPagging, disableNextPage, disablePrevPage, path, page}
};
