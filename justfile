check:
    deno run astro check --minimumFailigSeverity hint

preview: build
    deno run astro preview --open

# TODO: Make build and dev with no cache --force option

build:
    deno run astro build

sync:
    deno run astro sync

dev:
    deno run astro dev --open
