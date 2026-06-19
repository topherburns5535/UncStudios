import Image from "next/image";

export default function ProjectCard({
  title,
  description,
  status,
  actionLabel,
  featured = false,
  label,
  titleArtSrc,
  titleArtAlt,
  iconSrc,
  iconAlt,
}) {
  return (
    <article className={`project-card${featured ? " featured-project" : ""}`}>
      {titleArtSrc ? (
        <div className="project-media">
          <div className="project-title-art-frame">
            <Image
              src={titleArtSrc}
              alt={titleArtAlt || `${title} title art`}
              width={1086}
              height={1448}
              className="project-title-art"
            />
          </div>

          {iconSrc ? (
            <div className="project-icon-badge">
              <Image
                src={iconSrc}
                alt={iconAlt || `${title} icon`}
                width={1254}
                height={1254}
                className="project-icon-art"
              />
            </div>
          ) : null}
        </div>
      ) : null}

      <div className="project-card-header">
        <div className="project-heading-block">
          {label ? <p className="project-label">{label}</p> : null}
          <h3>{title}</h3>
        </div>
        <span className="status-badge">{status}</span>
      </div>

      <p>{description}</p>

      <span className="project-link is-placeholder" aria-disabled="true">
        {actionLabel}
      </span>
    </article>
  );
}
