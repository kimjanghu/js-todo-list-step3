export default function TeamButton(id, teamName) {
  const routeTo = `/kanban.html?id=${id}`;
  return `
    <div class="team-card-container">
      <a data-team-id=${id} href=${routeTo} class="card">
        <div class="card-title">
          ${teamName}
        </div>
      </a>
    </div>
  `;
}
