'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { BLOG_ARTICLES } from '@/lib/data';
import { BlogArticle } from '@/types';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ArticleReaderModal } from './ArticleReaderModal';

export function ArticleGrid() {
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_ARTICLES.map((article, idx) => (
          <AnimatedSection key={article.id} delay={0.1 * (idx + 1)}>
            <article className="flex flex-col justify-between h-full bg-white rounded-2xl overflow-hidden border border-borderLine-subtle shadow-card p-6 group">
              <div>
                <div className="relative aspect-[16/10.5] w-full rounded-xl overflow-hidden bg-surface-subtle mb-6">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-accent uppercase tracking-wider mb-3">
                  <span>{article.tag}</span>
                  <span className="text-ink-muted">{article.readTime}</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-medium text-ink-primary tracking-tight leading-snug mb-4 group-hover:text-accent transition-colors">
                  {article.title}
                </h2>

                <p className="text-sm sm:text-base text-ink-secondary leading-relaxed mb-6">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-black/25">
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="inline-flex items-center gap-2 text-sm font-medium text-ink-primary hover:text-accent transition-colors cursor-pointer group/btn"
                >
                  <span>Read full perspective</span>
                  <span className="transition-transform duration-200 group-hover/btn:translate-x-1">↳</span>
                </button>
              </div>
            </article>
          </AnimatedSection>
        ))}
      </div>

      <ArticleReaderModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </>
  );
}
