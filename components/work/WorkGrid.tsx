"use client";

import { useState } from "react";

import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import type { CaseStudyFrontmatter } from "@/lib/mdx";

interface WorkGridProps {
  caseStudies: { slug: string; frontmatter: CaseStudyFrontmatter }[];
  filters: string[];
}

export function WorkGrid({ caseStudies, filters }: WorkGridProps) {
  const [active, setActive] = useState(filters[0] ?? "All");

  const visible =
    active === "All"
      ? caseStudies
      : caseStudies.filter((study) =>
          study.frontmatter.serviceType.toLowerCase().includes(active.toLowerCase()),
        );

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by service">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            aria-pressed={active === filter}
            className={[
              "rounded-sm border px-3 py-1.5 font-mono text-label uppercase tracking-[0.06em] transition-colors duration-150",
              active === filter ? "border-accent bg-accent text-on-accent" : "border-line bg-paper text-ink",
            ].join(" ")}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {visible.map((study, index) => (
          <a key={study.slug} href={`/work/${study.slug}`} className="block">
            <Card variant="paper" hover>
              <div className="mb-4 flex h-[160px] items-center justify-center rounded-sm bg-accent-tint text-small text-ink-muted">
                [PROJECT SCREENSHOT]
              </div>
              <p className="font-mono text-label uppercase text-ink-muted">
                Case study {String(index + 1).padStart(2, "0")} · {study.frontmatter.serviceType}
              </p>
              <h3 className="mt-2 font-display text-h3">{study.frontmatter.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                <Chip>Time to first release · {study.frontmatter.timeToFirstRelease}</Chip>
                <Chip>Outcome · {study.frontmatter.outcome}</Chip>
              </div>
              <span className="mt-4 inline-block text-body font-medium text-ink">Read the case study →</span>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
}
