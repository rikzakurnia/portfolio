// src/components/ProjectCard.js
import React from 'react';
import { FaGithub, FaYoutube } from 'react-icons/fa';
import { FiArrowUpRight, FiCheck, FiArrowRight } from 'react-icons/fi';

const ProjectLinks = ({ project, size = 'md' }) => (
  <div className="flex flex-wrap gap-2">
    {project.demoLink && (
      <a
        href={project.demoLink}
        target="_blank"
        rel="noopener noreferrer"
        className={size === 'sm' ? 'btn-ghost !px-3 !py-1.5 !text-xs' : 'btn-primary'}
      >
        <FaYoutube /> Watch demo
      </a>
    )}
    {project.repoLink && (
      <a
        href={project.repoLink}
        target="_blank"
        rel="noopener noreferrer"
        className={size === 'sm' ? 'btn-ghost !px-3 !py-1.5 !text-xs' : 'btn-ghost'}
      >
        <FaGithub /> Repository
      </a>
    )}
  </div>
);

const Tags = ({ items }) => (
  <div className="flex flex-wrap gap-1.5">
    {items.map((tech) => (
      <span key={tech} className="tag">{tech}</span>
    ))}
  </div>
);

// Split "Title (In Development)" into the title and its status label.
const parseTitle = (title) => {
  const match = title.match(/^(.*?)\s*\((.*)\)$/);
  return match ? { name: match[1], status: match[2] } : { name: title, status: null };
};

export const FlagshipCard = ({ project }) => {
  const { name, status } = parseTitle(project.title);

  return (
    <article className="card overflow-hidden">
      {project.image && (
        <div className="relative aspect-[16/8] overflow-hidden border-b border-line bg-bg">
          <img src={project.image} alt={name} className="h-full w-full object-cover" />
          <div className="absolute left-4 top-4 flex gap-2">
            <span className="rounded-full bg-black/70 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-white backdrop-blur">
              Flagship
            </span>
            {status && (
              <span className="flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-white">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                {status}
              </span>
            )}
          </div>
        </div>
      )}

      <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{name}</h3>
          <p className="mt-3 leading-relaxed text-muted">{project.description}</p>
          <div className="mt-5">
            <Tags items={project.technologies} />
          </div>
          <div className="mt-6">
            <ProjectLinks project={project} />
          </div>
        </div>

        <div className="rounded-xl border border-line bg-bg/60 p-5">
          <p className="eyebrow mb-4">Progress</p>
          <ul className="space-y-3">
            {project.highlights.map((h) => {
              const isNext = /^next\s*:/i.test(h);
              return (
                <li key={h} className="flex gap-3 text-sm">
                  <span
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                      isNext ? 'border border-dashed border-accent text-accent' : 'bg-accent/15 text-accent'
                    }`}
                  >
                    {isNext ? <FiArrowRight size={11} /> : <FiCheck size={12} />}
                  </span>
                  <span className={isNext ? 'font-medium text-ink' : 'text-muted'}>
                    {isNext ? h.replace(/^next\s*:\s*/i, 'Up next — ') : h}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </article>
  );
};

// `wide` lays the card out horizontally when it spans the full grid row.
export const ProjectCard = ({ project, wide = false }) => (
  <article
    className={`group card flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-lift ${
      wide ? 'md:flex-row' : ''
    }`}
  >
    {project.image && (
      <div
        className={`aspect-[16/9] overflow-hidden border-b border-line bg-bg ${
          wide ? 'md:aspect-auto md:w-1/2 md:shrink-0 md:border-b-0 md:border-r' : ''
        }`}
      >
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
        />
      </div>
    )}
    <div className="flex flex-1 flex-col p-6">
      <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>

      <ul className="mt-4 space-y-1.5">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-2 text-sm text-muted">
            <FiCheck className="mt-1 shrink-0 text-accent" size={13} />
            {h}
          </li>
        ))}
      </ul>

      <div className="mt-5">
        <Tags items={project.technologies} />
      </div>

      <div className="mt-auto pt-6">
        <ProjectLinks project={project} size="sm" />
      </div>
    </div>
  </article>
);

export const ProjectRow = ({ project, index }) => {
  const link = project.repoLink || project.demoLink;
  const Wrapper = link ? 'a' : 'div';

  return (
    <Wrapper
      {...(link ? { href: link, target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group grid gap-3 py-6 transition sm:grid-cols-[3rem_1fr_auto] sm:items-start"
    >
      <span className="font-mono text-xs text-muted">{String(index + 1).padStart(2, '0')}</span>
      <div>
        <h3 className="font-semibold tracking-tight transition group-hover:text-accent">{project.title}</h3>
        <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted">{project.description}</p>
        <div className="mt-3">
          <Tags items={project.technologies} />
        </div>
      </div>
      {link && (
        <span className="hidden items-center gap-1 text-sm text-muted transition group-hover:text-accent sm:flex">
          <FaGithub />
          <FiArrowUpRight className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      )}
    </Wrapper>
  );
};

export default ProjectCard;
