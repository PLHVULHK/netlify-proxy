export default {
  async fetch(request) {
    const response = await fetch("https://beeg.porn/");
    const newHeaders = new Headers(response.headers);
    newHeaders.delete("x-frame-options");
    newHeaders.delete("content-security-policy");

    return new Response(response.body, {
      status: response.status,
      headers: newHeaders
    });
  }
}