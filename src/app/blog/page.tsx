'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Footer } from '@/components/layout/Footer';
import { BLOG_ARTICLES } from '@/lib/data';
import { BlogArticle } from '@/types';

export default function BlogPage() {
  const [activeArticle, setActiveArticle] = useState<BlogArticle | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveArticle(null);
    };

    if (activeArticle) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeArticle]);

  return (
    <>
      <main>
        {/* BLOG HERO */}
        <section className="relative min-h-[55vh] flex items-end pb-16 pt-36 bg-[#111112] text-white overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-30 mix-blend-multiply overflow-hidden">
            <img
              src="/images/marquee-heavy-manufacturing.webp"
              alt="Industrial Architecture Background"
              loading="eager"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full max-w-[1700px] mx-auto px-6 md:px-12 relative z-10">
            <div className="reveal-on-scroll max-w-4xl">
              <div className="inline-flex items-center text-xs font-mono uppercase tracking-[0.16em] text-white/80 mb-6">
                <span className="indicator-dot"></span> ARTICLES / FIELD PERSPECTIVES
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-[1.05] mb-6">
                Insights from real-world India execution.
              </h1>
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl">
                Perspectives on India manufacturing, industrial execution, and operational risk, written for
                boards, investors, and global leadership teams navigating India entry and scale.
              </p>
            </div>
          </div>
        </section>

        {/* ARTICLES GRID */}
        <section className="py-20 md:py-32 bg-surface-primary">
          <div className="w-full max-w-[1700px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BLOG_ARTICLES.map((article) => (
                <article
                  key={article.id}
                  className="flex flex-col justify-between h-full bg-white rounded-2xl border border-borderLine-subtle p-6 shadow-card hover:shadow-elevated transition-all group reveal-on-scroll"
                >
                  <div>
                    <div className="relative aspect-[16/10.5] rounded-xl overflow-hidden bg-surface-subtle mb-6">
                      <img
                        src={article.image}
                        alt={article.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      />
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono text-accent uppercase tracking-wider mb-3">
                      <span>{article.tag}</span>
                      <span className="text-ink-muted">{article.readTime}</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-medium text-ink-primary tracking-tight leading-snug mb-3 group-hover:text-accent transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-sm sm:text-base text-ink-secondary leading-relaxed mb-6">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-black/25">
                    <button
                      className="inline-flex items-center gap-2 text-sm font-medium text-ink-primary hover:text-accent transition-colors cursor-pointer group/btn"
                      onClick={() => setActiveArticle(article)}
                    >
                      <span>Read full perspective</span>
                      <span className="transition-transform duration-200 group-hover/btn:translate-x-1">↳</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM ADVISORY BRIEFING CTA */}
        <section className="py-20 md:py-32 bg-surface-subtle border-t border-black/25">
          <div className="w-full max-w-[1700px] mx-auto px-6 md:px-12">
            <div className="bg-white rounded-3xl border border-borderLine-subtle p-8 sm:p-14 md:p-16 text-center max-w-4xl mx-auto shadow-card reveal-on-scroll">
              <div className="inline-flex items-center text-xs font-mono uppercase tracking-[0.16em] text-accent mb-6">
                <span className="indicator-dot"></span> ADVISORY BRIEFINGS
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-ink-primary leading-[1.15] mb-6">
                Request a private board briefing on India manufacturing execution.
              </h2>
              <p className="text-base sm:text-lg text-ink-secondary leading-relaxed max-w-xl mx-auto mb-10">
                Our senior industrial partners present unbiased analysis on state corridors, incentives, and
                operational timelines for your sector.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-accent hover:bg-accent-hover text-white text-base font-medium shadow-[0_4px_14px_rgba(249,69,44,0.28)] hover:shadow-[0_6px_20px_rgba(249,69,44,0.4)] transition-all cursor-pointer group"
              >
                <span>Connect with Partners</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">↳</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ARTICLE READER MODAL */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
            onClick={() => setActiveArticle(null)}
          />

          <div className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl p-8 sm:p-12 md:p-14 shadow-2xl flex flex-col justify-between">
            <button
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-surface-subtle hover:bg-surface-primary text-ink-primary flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close Article"
              onClick={() => setActiveArticle(null)}
            >
              ✕
            </button>

            <div>
              <div className="inline-flex items-center text-xs font-mono uppercase tracking-[0.16em] text-accent mb-4">
                <span className="indicator-dot"></span> {activeArticle.tag}
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-ink-primary tracking-tight leading-snug mb-6">
                {activeArticle.title}
              </h2>

              <div className="flex items-center gap-4 text-xs font-mono text-ink-muted mb-8 pb-4 border-b border-black/25">
                <span>{activeArticle.date}</span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
              </div>

              <div className="space-y-4 text-base sm:text-lg text-ink-secondary leading-relaxed">
                {activeArticle.content.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-black/25 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="font-mono text-xs text-ink-muted">
                Published by Indiabridge Industrial Practice
              </span>
              <Link
                href="/contact"
                onClick={() => setActiveArticle(null)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent hover:bg-accent-hover text-white text-sm font-medium transition-colors"
              >
                <span>Discuss with us</span>
                <span>↳</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
