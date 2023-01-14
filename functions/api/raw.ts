export const onRequestGet: PagesFunction<Env> = async ({ env }) => {
  await env.KV_FOR_REPRO.list();
  return new Response("Without Hono!");
};
