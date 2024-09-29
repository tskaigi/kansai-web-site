import { type PageID, pageInfos } from "../lib/data/pageInfos";

export const getTitleByIndex = (id: PageID): string | undefined => {
  const pageInfo = pageInfos.find((page) => page.id === id);
  return pageInfo?.title;
};

export const getDescriptionByIndex = (id: PageID): string | undefined => {
  const pageInfo = pageInfos.find((page) => page.id === id);
  return pageInfo?.description;
};
