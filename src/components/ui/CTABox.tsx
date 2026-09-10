import React from 'react';
import { Eyebrow } from './Eyebrow';
import { Button } from './Button';
import { AnimatedSection } from './AnimatedSection';

interface CTABoxProps {
  eyebrow?: string;
  headline: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CTABox({
  eyebrow = 'ADVISORY BRIEFINGS',
  headline,
  description,
  buttonText = 'Connect with Partners',
  buttonHref = '/contact',
}: CTABoxProps) {
  return (
    <AnimatedSection className="my-16 md:my-24">
      <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-surface-card border border-borderLine-subtle p-8 sm:p-12 md:p-16 text-center max-w-4xl mx-auto shadow-card">
        {/* Subtle decorative grid/glow behind */}
        <div
          className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-accent/5 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-accent/5 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col items-center">
          <Eyebrow className="mb-4">{eyebrow}</Eyebrow>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-ink-primary tracking-tight max-w-2xl mx-auto mb-4 leading-[1.2]">
            {headline}
          </h2>

          <p className="text-base sm:text-lg text-ink-secondary max-w-xl mx-auto mb-8 leading-relaxed">
            {description}
          </p>

          <Button href={buttonHref} size="lg">
            {buttonText}
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
