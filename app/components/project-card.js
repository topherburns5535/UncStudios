export default function ProjectCard({
  title,
  description,
  status,
  actionLabel,
}) {
  return (
    <article className="project-card">
      <div className="project-card-header">
        <h3>{title}</h3>
        <span className="status-badge">{status}</span>
      </div>

      <p>{description}</p>

      <span className="project-link is-placeholder" aria-disabled="true">
        {actionLabel}
      </span>
    </article>
  );
}
