import type { CollectionEntry } from "astro:content";
import config from "@/config";
import { getPostUrl } from "./getPostPaths";
import { resolveDefaultOgImagePath } from "./resolveDefaultOgImagePath";

type PostEntry = Pick<CollectionEntry<"posts">, "id" | "data"> & {
  filePath?: string | undefined;
};

/**
 * Resolves the image URL for a post card or OG metadata.
 * Prefers frontmatter `ogImage`, then per-post dynamic OG images, then site default.
 */
export function getPostImageUrl(
  post: PostEntry,
  locale: string | undefined = config.site.lang
): string {
  const { ogImage: initOgImage } = post.data;

  if (typeof initOgImage === "string") {
    return initOgImage;
  }

  if (initOgImage?.src) {
    return initOgImage.src;
  }

  if (config.features.dynamicOgImage) {
    const postUrl = getPostUrl(post.id, post.filePath, locale).replace(
      /\/+$/,
      ""
    );
    return `${postUrl}/index.png`;
  }

  return resolveDefaultOgImagePath(config);
}
