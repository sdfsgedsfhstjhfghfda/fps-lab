(function () {
    const gate = document.getElementById("auth-gate");
    const form = document.getElementById("auth-form");
    const usernameInput = document.getElementById("auth-username");
    const passwordInput = document.getElementById("auth-password");
    const passwordWrap = document.getElementById("auth-password-wrap");
    const generatedWrap = document.getElementById("auth-generated-wrap");
    const generatedEl = document.getElementById("auth-generated-password");
    const regenerateBtn = document.getElementById("auth-regenerate");
    const messageEl = document.getElementById("auth-message");
    const submitBtn = document.getElementById("auth-submit");
    const toggleBtn = document.getElementById("auth-toggle-mode");
    const titleEl = document.getElementById("auth-title");
    const subtitleEl = document.getElementById("auth-subtitle");
    const accountEl = document.getElementById("auth-account");
    const userEmailEl = document.getElementById("auth-user-email");
    const logoutBtn = document.getElementById("auth-logout");
    const setupEl = document.getElementById("auth-setup");

    const config = window.FPSLAB_SUPABASE || {};
    const configured = Boolean(config.url && config.anonKey);
    const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789";

    let mode = "login";
    let client = null;
    let generatedPassword = "";

    function accountEmail(username) {
        return username.trim().toLowerCase() + "@users.fpslab.app";
    }

    function displayName(session) {
        const meta = session.user.user_metadata || {};
        if (meta.username) {
            return meta.username;
        }
        return (session.user.email || "Hesap").split("@")[0];
    }

    function randomPassword() {
        const bytes = new Uint8Array(12);
        crypto.getRandomValues(bytes);
        let value = "";
        for (let i = 0; i < bytes.length; i += 1) {
            value += alphabet[bytes[i] % alphabet.length];
        }
        return value;
    }

    function fillGeneratedPassword() {
        generatedPassword = randomPassword();
        generatedEl.textContent = generatedPassword;
    }

    function setMessage(text, kind) {
        messageEl.textContent = text || "";
        messageEl.dataset.kind = kind || "";
    }

    function setMode(next) {
        mode = next;
        const isLogin = mode === "login";
        titleEl.textContent = isLogin ? "Giriş yap" : "Hesap oluştur";
        subtitleEl.textContent = isLogin
            ? "Kullanıcı adın ve şifrenle devam et."
            : "Bir kullanıcı adı seç. Şifren otomatik üretilir.";
        submitBtn.textContent = isLogin ? "Giriş yap" : "Hesap oluştur";
        toggleBtn.textContent = isLogin
            ? "Hesabın yok mu? Kayıt ol"
            : "Zaten hesabın var mı? Giriş yap";
        passwordWrap.hidden = !isLogin;
        generatedWrap.hidden = isLogin;
        passwordInput.required = isLogin;
        passwordInput.value = "";
        if (!isLogin) {
            fillGeneratedPassword();
        }
        setMessage("");
    }

    function showApp(session) {
        gate.hidden = true;
        document.body.classList.remove("auth-locked");
        accountEl.hidden = false;
        userEmailEl.textContent = displayName(session);
    }

    function showGate() {
        gate.hidden = false;
        document.body.classList.add("auth-locked");
        accountEl.hidden = true;
        userEmailEl.textContent = "";
    }

    function readUsername() {
        const username = usernameInput.value.trim();
        if (!/^[A-Za-z0-9_]{3,20}$/.test(username)) {
            throw new Error("Kullanıcı adı 3-20 karakter, harf, sayı veya _ olmalı.");
        }
        return username;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        if (!client) {
            return;
        }

        setMessage("");
        submitBtn.disabled = true;

        try {
            const username = readUsername();
            const email = accountEmail(username);

            if (mode === "login") {
                const { error } = await client.auth.signInWithPassword({
                    email,
                    password: passwordInput.value
                });
                if (error) {
                    throw error;
                }
            } else {
                const { data, error } = await client.auth.signUp({
                    email,
                    password: generatedPassword,
                    options: {
                        data: {
                            username: username
                        }
                    }
                });
                if (error) {
                    throw error;
                }
                if (!data.session) {
                    setMode("login");
                    usernameInput.value = username;
                    setMessage(
                        "Hesap hazır. Ürettiğin şifreyi yazıp giriş yap. (Supabase’te e-posta onayı açıksa kapat.)",
                        "ok"
                    );
                }
            }
        } catch (error) {
            setMessage(error.message || "İşlem başarısız.", "error");
        } finally {
            submitBtn.disabled = false;
        }
    }

    async function handleLogout() {
        if (!client) {
            return;
        }
        await client.auth.signOut();
        setMode("login");
        form.reset();
        setMessage("");
    }

    if (!configured) {
        document.body.classList.add("auth-locked");
        setupEl.hidden = false;
        form.hidden = true;
        titleEl.textContent = "Supabase ayarı gerekli";
        subtitleEl.textContent =
            "js/supabase-config.js içine proje URL ve anon key yaz. Dashboard → Project Settings → API.";
        return;
    }

    client = window.supabase.createClient(config.url, config.anonKey);

    client.auth.onAuthStateChange(function (_event, session) {
        if (session) {
            showApp(session);
        } else {
            showGate();
        }
    });

    client.auth.getSession().then(function (result) {
        if (result.data.session) {
            showApp(result.data.session);
        } else {
            showGate();
        }
    });

    form.addEventListener("submit", handleSubmit);
    toggleBtn.addEventListener("click", function () {
        setMode(mode === "login" ? "signup" : "login");
    });
    regenerateBtn.addEventListener("click", fillGeneratedPassword);
    logoutBtn.addEventListener("click", handleLogout);

    setMode("login");
}());
