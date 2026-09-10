'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ENGAGEMENT_OPTIONS } from '@/lib/constants';

const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid corporate email address'),
  company: z.string().optional(),
  engagementType: z.string().min(1, 'Please select an engagement scope'),
  message: z.string().min(10, 'Please provide a brief outline of your inquiry or project'),
});

type ContactFormInputs = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      engagementType: 'greenfield',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormInputs) => {
    setIsSubmitting(true);
    // TODO: Connect to backend API endpoint (e.g., /api/contact)
    console.log('Form submission payload:', data);

    // Simulate brief network delay
    await new Promise((res) => setTimeout(res, 800));

    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
  };

  return (
    <>
      <div className="bg-white rounded-3xl border border-borderLine-subtle p-8 sm:p-12 shadow-card">
        <div className="font-mono text-xs uppercase tracking-widest text-accent font-semibold mb-2">
          Project Intake
        </div>
        <h2 className="text-2xl sm:text-3xl font-medium text-ink-primary tracking-tight mb-8">
          Start a Confidential Dialogue
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Full Name */}
          <div>
            <label htmlFor="form-name" className="block font-mono text-xs uppercase tracking-wider text-ink-primary mb-2 font-semibold">
              Full Name *
            </label>
            <input
              id="form-name"
              type="text"
              placeholder="e.g. David Mueller"
              {...register('name')}
              className="w-full px-4 py-3.5 rounded-lg bg-surface-subtle border border-borderLine-subtle text-ink-primary placeholder:text-ink-muted focus:outline-none focus:border-ink-primary focus:bg-white transition-all"
            />
            {errors.name && (
              <span className="text-xs text-accent mt-1.5 block font-mono">{errors.name.message}</span>
            )}
          </div>

          {/* Business Email */}
          <div>
            <label htmlFor="form-email" className="block font-mono text-xs uppercase tracking-wider text-ink-primary mb-2 font-semibold">
              Business E-mail *
            </label>
            <input
              id="form-email"
              type="email"
              placeholder="e.g. david.mueller@globalprecision.com"
              {...register('email')}
              className="w-full px-4 py-3.5 rounded-lg bg-surface-subtle border border-borderLine-subtle text-ink-primary placeholder:text-ink-muted focus:outline-none focus:border-ink-primary focus:bg-white transition-all"
            />
            {errors.email && (
              <span className="text-xs text-accent mt-1.5 block font-mono">{errors.email.message}</span>
            )}
          </div>

          {/* Company & Industry */}
          <div>
            <label htmlFor="form-company" className="block font-mono text-xs uppercase tracking-wider text-ink-primary mb-2 font-semibold">
              Company & Industry
            </label>
            <input
              id="form-company"
              type="text"
              placeholder="e.g. Mueller Precision GmbH — Automotive Powertrains"
              {...register('company')}
              className="w-full px-4 py-3.5 rounded-lg bg-surface-subtle border border-borderLine-subtle text-ink-primary placeholder:text-ink-muted focus:outline-none focus:border-ink-primary focus:bg-white transition-all"
            />
          </div>

          {/* Primary Engagement Scope */}
          <div>
            <label htmlFor="form-engagement" className="block font-mono text-xs uppercase tracking-wider text-ink-primary mb-2 font-semibold">
              Primary Engagement Scope
            </label>
            <select
              id="form-engagement"
              {...register('engagementType')}
              className="w-full px-4 py-3.5 rounded-lg bg-surface-subtle border border-borderLine-subtle text-ink-primary focus:outline-none focus:border-ink-primary focus:bg-white transition-all"
            >
              {ENGAGEMENT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Project Scope or Inquiries */}
          <div>
            <label htmlFor="form-message" className="block font-mono text-xs uppercase tracking-wider text-ink-primary mb-2 font-semibold">
              Project Scope or Inquiries *
            </label>
            <textarea
              id="form-message"
              rows={4}
              placeholder="Briefly describe your proposed product lines, timeline, expected CAPEX range, or current execution roadblocks..."
              {...register('message')}
              className="w-full px-4 py-3.5 rounded-lg bg-surface-subtle border border-borderLine-subtle text-ink-primary placeholder:text-ink-muted focus:outline-none focus:border-ink-primary focus:bg-white transition-all resize-y"
            />
            {errors.message && (
              <span className="text-xs text-accent mt-1.5 block font-mono">{errors.message.message}</span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 px-6 rounded-full bg-accent hover:bg-accent-hover text-white font-outfit text-base font-medium flex items-center justify-center gap-3 transition-colors shadow-[0_2px_12px_rgba(249,69,44,0.25)] cursor-pointer disabled:opacity-50"
          >
            <span>{isSubmitting ? 'Dispatching...' : 'Send message'}</span>
            <span className="text-lg leading-none">↳</span>
          </button>

          <p className="text-xs text-ink-muted leading-relaxed pt-2">
            <strong>Statutory & Advisory Disclaimer:</strong> Site evaluations, capital expenditure projections,
            state industrial incentives (PLI/Capital Subsidies), and environmental clearances (EC/CTE/CTO) are
            determined project-by-project under applicable state industrial policies. Indiabridge Capital Partners acts
            as an independent execution advisor and client-side project governance partner.
          </p>
        </form>
      </div>

      {/* Success Modal */}
      {isSubmitted && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[3000] flex items-center justify-center p-4"
        >
          <div
            onClick={() => setIsSubmitted(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          />
          <div className="relative z-10 w-full max-w-md bg-white rounded-3xl p-8 sm:p-10 shadow-darkGlow text-center">
            <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
              ✓
            </div>
            <h3 className="text-2xl font-medium text-ink-primary mb-3">
              Enquiry Dispatched
            </h3>
            <p className="text-sm sm:text-base text-ink-secondary leading-relaxed mb-8">
              Thank you for submitting your India industrial project details. A senior Indiabridge practice partner
              will review your notes and respond within one business day.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="w-full py-3.5 px-6 rounded-full bg-ink-primary hover:bg-ink-secondary text-white font-outfit text-sm font-medium transition-colors cursor-pointer"
            >
              Return to Site
            </button>
          </div>
        </div>
      )}
    </>
  );
}
