export default {
    async fetch(request) {

        // CORS
        if (request.method === "OPTIONS") {
            return new Response(null, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "POST, OPTIONS",
                    "Access-Control-Allow-Headers": "Content-Type"
                }
            });
        }

        if (request.method !== "POST") {
            return new Response(
                JSON.stringify({
                    success: false,
                    error: "Sadece POST isteği kullanılabilir."
                }),
                {
                    status: 405,
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*"
                    }
                }
            );
        }

        try {

            const config = await request.json();

            console.log("Gelen config:", config);

            return new Response(
                JSON.stringify({
                    success: true,
                    message: "FPS API çalışıyor!",
                    received: config
                }),
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*"
                    }
                }
            );

        } catch (error) {

            return new Response(
                JSON.stringify({
                    success: false,
                    error: "Geçersiz JSON."
                }),
                {
                    status: 400,
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*"
                    }
                }
            );

        }
    }
};
