function buscarDados() {
  const usuario = document.getElementById("usuario").value;
  const url = `https://api.github.com/users/${usuario}`;

  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onload = function () {
    if (xhr.status === 200) {
      const dados = JSON.parse(xhr.responseText);
      document.getElementById("perfil").innerHTML = `
        <img src="${dados.avatar_url}" alt="${dados.login}">
        <h2>${dados.name || dados.login}</h2>
        <p>${dados.login}</p>
        <div class="stats">
          <div>Repositórios<br>${dados.public_repos}</div>
          <div>Seguidores<br>${dados.followers}</div>
          <div>Seguindo<br>${dados.following}</div>
        </div>
        <a href="${dados.html_url}" target="_blank">Ver no Github</a>
      `;
    } else {
      document.getElementById("perfil").innerHTML = "<p>Usuário não encontrado.</p>";
    }
  };
  xhr.onerror = function () {
    document.getElementById("perfil").innerHTML = "<p>Erro ao carregar perfil.</p>";
  };
  xhr.send();
}
