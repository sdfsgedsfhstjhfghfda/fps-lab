export default {
    async fetch(request) {
        return new Response(
            JSON.stringify({
                success: true,
                message: "FPS Lab API çalışıyor!"
            }),
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
    }
};
