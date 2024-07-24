import type {APIRoute} from "astro";

export const prerender = false;

interface RepoStats {
  forks: number;
  stars: number;
}

const fallback: RepoStats = {
  forks: 46,
  stars: 9,
};

export const GET: APIRoute<RepoStats> = async () => {
  return new Response(JSON.stringify(fallback), {status: 401});
};
