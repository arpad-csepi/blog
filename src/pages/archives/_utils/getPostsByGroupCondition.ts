import type { CollectionEntry } from "astro:content";

type GroupKey = string | number | symbol;
type GroupFunction<T> = (item: T, index?: number) => GroupKey;

export function getPostsByGroupCondition(
  posts: CollectionEntry<"posts">[],
  groupFunction: GroupFunction<CollectionEntry<"posts">>
) {
  const result: Record<GroupKey, CollectionEntry<"posts">[]> = {};

  for (const [i, item] of posts.entries()) {
    const groupKey = groupFunction(item, i);

    if (!result[groupKey]) {
      result[groupKey] = [];
    }

    result[groupKey].push(item);
  }

  return result;
}
