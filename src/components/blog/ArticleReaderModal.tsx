'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { BlogArticle } from '@/types';
import { Eyebrow } from '@/components/ui/Eyebrow';

interface ArticleReaderModalProps {
  article: BlogArticle | null;
  onClose: () => void;
}

export function ArticleReaderModal({ article, onClose }: ArticleReaderModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (article) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [article, onClose]);

  if (!article) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[3000] flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
      />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl p-8 sm:p-12 md:p-14 shadow-darkGlow flex flex-col justify-between">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Article"
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-surface-subtle hover:bg-surface-primary text-ink-primary flex items-center justify-center transition-colors cursor-pointer"
        >
          ✕
        </button>

        <div>
          <Eyebrow className="mb-4">{article.tag}</Eyebrow>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-ink-primary tracking-tight leading-snug mb-6">
            {article.title}
          </h2>

          <div className="flex items-center gap-4 text-xs font-mono text-ink-muted mb-8 pb-4 border-b border-black/25">
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>

          <div className="space-y-4 text-base sm:text-lg text-ink-secondary leading-relaxed">
            {article.content.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 pt-6 border-t border-black/25 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-xs text-ink-muted">
            Published by Indiabridge Industrial Practice
          </span>
          <Link
            href="/contact"
            onClick={onClose}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent hover:bg-accent-hover text-white text-sm font-medium transition-colors"
          >
            <span>Discuss with us</span>
            <span>↳</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
