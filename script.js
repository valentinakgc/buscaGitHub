function getProfile() {
    event.preventDefault();
    const username = document.getElementById('usernameInput').value;
    fetch("https://api.github.com/users/" + username)
        .then(response => response.json())
        .then(data => {
            const profileInfo = document.getElementById('profileInfo');
            if (data.message === "Not Found") {
                profileInfo.innerHTML = "<p>Usuário não encontrado.</p>";
            } else {
                profileInfo.innerHTML = `
                <img class="avatar" src="${data.avatar_url}" alt="Avatar de ${data.login}"></img>
                <h2>${data.name}</h2>
                <p>Nome de usuário: ${data.login}</p>
                <p>Repositórios públicos: ${data.public_repos}</p>
                <p>Seguidores: ${data.followers}</p>
                <p>Seguindo: ${data.following}</p>
                <a href="${data.html_url}?tab=repositories" target="_blank">Repositórios</a>
                `;
            }
        } )
        .catch(error => {
            console.error(error);
        });
}