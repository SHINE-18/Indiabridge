'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ENGAGEMENT_OPTIONS } from '@/lib/constants';

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your full name'),
  email: z.string().trim().email('Please enter a valid corporate email address'),
  company: z.string().trim().min(2, 'Please enter your company name'),
  phone: z.string().trim().optional(),
  engagementType: z.string().min(1, 'Please select an enquiry category'),
  otherScope: z.string().trim().optional(),
  message: z.string().trim().min(10, 'Please provide a brief outline of your enquiry or project scope'),
  honeypot: z.string().max(0, 'Spam detected').optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'You must consent to data processing under our Privacy Policy to proceed' }),
  }),
});

type ContactFormInputs = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      phone: '',
      engagementType: 'strategy',
      otherScope: '',
      message: '',
      honeypot: '',
      consent: false as unknown as true,
    },
  });

  const selectedEngagement = watch('engagementType');
  const currentOption =
    ENGAGEMENT_OPTIONS.find((opt) => opt.value === selectedEngagement) || ENGAGEMENT_OPTIONS[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDropdownOpen]);

  const onSubmit = async (data: ContactFormInputs) => {
    // Honeypot bot suppression check
    if (data.honeypot && data.honeypot.length > 0) {
      // Silently discard bot submission
      setIsSubmitted(true);
      reset();
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulated endpoint dispatch delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      setIsSubmitted(true);
      reset();
    } catch {
      // In production, handle network errors
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="bg-white rounded-3xl border border-black/[0.08] p-8 sm:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
        <p className="text-lg sm:text-xl font-medium text-[#111112] mb-8">
          Leave us an enquiry below, and a senior practice director will respond with personalised guidance.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
          {/* Honeypot field (hidden from legitimate users) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="form-honeypot">Leave this field blank</label>
            <input
              id="form-honeypot"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              {...register('honeypot')}
            />
          </div>

          {/* Row 1: Name & Business Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="form-name" className="text-xs font-mono uppercase tracking-wider text-[#111112] font-semibold">
                Full Name <span className="text-[#f9452c]">*</span>
              </label>
              <input
                id="form-name"
                type="text"
                placeholder="e.g. David Mueller"
                {...register('name')}
                className={`w-full bg-[#f6f6f8] border rounded-xl px-4 py-3.5 text-sm text-[#111112] placeholder:text-[#a1a1aa] focus:outline-none transition-colors ${
                  errors.name ? 'border-[#f9452c]' : 'border-black/[0.08] focus:border-black'
                }`}
                aria-invalid={errors.name ? 'true' : 'false'}
              />
              {errors.name && (
                <span className="text-xs text-[#f9452c] font-sans">{errors.name.message}</span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="form-email" className="text-xs font-mono uppercase tracking-wider text-[#111112] font-semibold">
                Business E-mail <span className="text-[#f9452c]">*</span>
              </label>
              <input
                id="form-email"
                type="email"
                placeholder="name@company.com"
                {...register('email')}
                className={`w-full bg-[#f6f6f8] border rounded-xl px-4 py-3.5 text-sm text-[#111112] placeholder:text-[#a1a1aa] focus:outline-none transition-colors ${
                  errors.email ? 'border-[#f9452c]' : 'border-black/[0.08] focus:border-black'
                }`}
                aria-invalid={errors.email ? 'true' : 'false'}
              />
              {errors.email && (
                <span className="text-xs text-[#f9452c] font-sans">{errors.email.message}</span>
              )}
            </div>
          </div>

          {/* Row 2: Company Name & Direct Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="form-company" className="text-xs font-mono uppercase tracking-wider text-[#111112] font-semibold">
                Company & Industry <span className="text-[#f9452c]">*</span>
              </label>
              <input
                id="form-company"
                type="text"
                placeholder="e.g. Apex Industrial Systems GmbH"
                {...register('company')}
                className={`w-full bg-[#f6f6f8] border rounded-xl px-4 py-3.5 text-sm text-[#111112] placeholder:text-[#a1a1aa] focus:outline-none transition-colors ${
                  errors.company ? 'border-[#f9452c]' : 'border-black/[0.08] focus:border-black'
                }`}
                aria-invalid={errors.company ? 'true' : 'false'}
              />
              {errors.company && (
                <span className="text-xs text-[#f9452c] font-sans">{errors.company.message}</span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="form-phone" className="text-xs font-mono uppercase tracking-wider text-[#111112] font-semibold">
                Direct Phone / WhatsApp <span className="text-xs text-[#71717a] font-normal normal-case tracking-normal">(Optional)</span>
              </label>
              <input
                id="form-phone"
                type="tel"
                placeholder="e.g. +49 89 1234 5678"
                {...register('phone')}
                className="w-full bg-[#f6f6f8] border border-black/[0.08] rounded-xl px-4 py-3.5 text-sm text-[#111112] placeholder:text-[#a1a1aa] focus:outline-none focus:border-black transition-colors"
              />
            </div>
          </div>

          {/* Row 3: Custom Luxury Engagement Scope Dropdown */}
          <div className="flex flex-col gap-2" ref={dropdownRef}>
            <label htmlFor="form-engagement-trigger" className="text-xs font-mono uppercase tracking-wider text-[#111112] font-semibold">
              Primary Engagement Scope <span className="text-[#f9452c]">*</span>
            </label>

            <div className="relative">
              {/* Hidden input for form registration */}
              <input type="hidden" {...register('engagementType')} />

              {/* Bespoke Trigger Button */}
              <button
                type="button"
                id="form-engagement-trigger"
                aria-haspopup="listbox"
                aria-expanded={isDropdownOpen}
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className={`w-full bg-[#f6f6f8] hover:bg-[#f0f0f3] border rounded-xl px-4 py-3.5 sm:py-4 text-left text-sm transition-all duration-150 flex items-center justify-between gap-3 cursor-pointer group ${
                  errors.engagementType
                    ? 'border-[#f9452c]'
                    : isDropdownOpen
                    ? 'border-black shadow-[0_0_0_1px_#000]'
                    : 'border-black/[0.08] hover:border-black/30'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="w-2 h-2 rounded-full bg-[#111112] shrink-0" />
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm font-medium text-[#111112] truncate">
                      {currentOption?.label}
                    </span>
                    {currentOption?.description && (
                      <span className="text-xs text-[#71717a] truncate hidden sm:inline">
                        {currentOption.description}
                      </span>
                    )}
                  </div>
                </div>

                <div className="shrink-0 flex items-center pl-2 text-[#71717a] group-hover:text-black transition-colors">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180 text-black' : ''}`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </button>

              {/* Custom Luxury Popover Menu */}
              {isDropdownOpen && (
                <div
                  role="listbox"
                  aria-labelledby="form-engagement-trigger"
                  className="absolute top-full left-0 right-0 mt-2 z-50 bg-white rounded-2xl border border-black/[0.09] shadow-[0_20px_50px_rgba(0,0,0,0.12),0_4px_16px_rgba(0,0,0,0.06)] overflow-hidden max-h-[360px] overflow-y-auto divide-y divide-black/[0.04]"
                >
                  {ENGAGEMENT_OPTIONS.map((opt) => {
                    const isSelected = opt.value === selectedEngagement;
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        role="option"
                        aria-selected={isSelected}
                        onClick={() => {
                          setValue('engagementType', opt.value, { shouldValidate: true });
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4.5 py-3 sm:px-5 sm:py-3.5 flex items-start justify-between gap-3 transition-colors cursor-pointer group ${
                          isSelected
                            ? 'bg-[#111112] text-white hover:bg-black'
                            : 'hover:bg-[#f6f6f8] text-[#111112]'
                        }`}
                      >
                        <div className="flex flex-col gap-0.5 min-w-0">
                          <div className="flex items-center gap-2">
                            <span
                              className={`text-sm font-medium tracking-tight ${
                                isSelected ? 'text-white' : 'text-[#111112] group-hover:text-black'
                              }`}
                            >
                              {opt.label}
                            </span>
                            {opt.value === 'other' && (
                              <span
                                className={`text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded ${
                                  isSelected
                                    ? 'bg-white/20 text-white'
                                    : 'bg-black/5 text-[#71717a]'
                                }`}
                              >
                                Bespoke
                              </span>
                            )}
                          </div>
                          {opt.description && (
                            <span
                              className={`text-xs leading-normal ${
                                isSelected ? 'text-white/70' : 'text-[#71717a]'
                              }`}
                            >
                              {opt.description}
                            </span>
                          )}
                        </div>

                        {isSelected ? (
                          <span className="shrink-0 text-xs font-mono w-5 h-5 rounded-full bg-white/20 text-white flex items-center justify-center mt-0.5">
                            ✓
                          </span>
                        ) : (
                          <span className="shrink-0 text-xs font-mono w-5 h-5 rounded-full border border-black/10 text-transparent group-hover:border-black/30 flex items-center justify-center mt-0.5">
                            ·
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Conditional "Other" Specification Input */}
            {selectedEngagement === 'other' && (
              <div className="pt-2 flex flex-col gap-2">
                <label htmlFor="form-other-scope" className="text-xs font-mono uppercase tracking-wider text-[#111112] font-semibold">
                  Specify Your Custom Mandate / Requirement <span className="text-xs text-[#71717a] font-normal normal-case tracking-normal">(Optional)</span>
                </label>
                <input
                  id="form-other-scope"
                  type="text"
                  placeholder="e.g. Technology transfer, joint R&D setup, vendor audit, specialised compliance..."
                  {...register('otherScope')}
                  className="w-full bg-[#f6f6f8] border border-black/[0.08] rounded-xl px-4 py-3.5 text-sm text-[#111112] placeholder:text-[#a1a1aa] focus:outline-none focus:border-black transition-colors"
                />
              </div>
            )}

            {errors.engagementType && (
              <span className="text-xs text-[#f9452c] font-sans">{errors.engagementType.message}</span>
            )}
          </div>

          {/* Row 4: Message Field */}
          <div className="flex flex-col gap-2">
            <label htmlFor="form-message" className="text-xs font-mono uppercase tracking-wider text-[#111112] font-semibold">
              Brief Project Scope or Enquiry Outline <span className="text-[#f9452c]">*</span>
            </label>
            <textarea
              id="form-message"
              rows={5}
              placeholder="Outline your prospective manufacturing lines, target timeframe, state preferences, or specific operational challenges..."
              {...register('message')}
              className={`w-full bg-[#f6f6f8] border rounded-xl px-4 py-3.5 text-sm text-[#111112] placeholder:text-[#a1a1aa] focus:outline-none transition-colors resize-y ${
                errors.message ? 'border-[#f9452c]' : 'border-black/[0.08] focus:border-black'
              }`}
              aria-invalid={errors.message ? 'true' : 'false'}
            />
            {errors.message && (
              <span className="text-xs text-[#f9452c] font-sans">{errors.message.message}</span>
            )}
          </div>

          {/* Row 5: Consent Checkbox */}
          <div className="flex flex-col gap-1.5 pt-1">
            <label className="flex items-start gap-3 cursor-pointer group select-none">
              <input
                type="checkbox"
                {...register('consent')}
                className="mt-1 h-4 w-4 rounded border-black/20 text-[#111112] focus:ring-black cursor-pointer accent-[#111112]"
              />
              <span className="text-xs text-[#55555e] leading-relaxed">
                I agree to the confidential processing of my submitted details in accordance with the{' '}
                <Link
                  href="/privacy"
                  target="_blank"
                  className="text-[#111112] underline underline-offset-2 hover:text-black font-medium"
                >
                  Privacy Policy
                </Link>
                .
              </span>
            </label>
            {errors.consent && (
              <span className="text-xs text-[#f9452c] font-sans">{errors.consent.message}</span>
            )}
          </div>

          {/* Full-width Black Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 rounded-full bg-[#111112] hover:bg-black text-white text-base font-medium transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>{isSubmitting ? 'Transmitting Enquiry...' : 'Send message'}</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">↳</span>
          </button>
        </form>
      </div>

      {/* Confirmation Feedback Modal */}
      {isSubmitted && (
        <div
          className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
            onClick={() => setIsSubmitted(false)}
          />

          <div className="relative z-10 w-full max-w-md bg-white rounded-3xl p-8 sm:p-10 shadow-2xl text-center">
            <div className="w-16 h-16 rounded-full bg-[#111112]/5 text-[#111112] flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
              ✓
            </div>
            <h3 className="text-2xl font-medium text-[#111112] mb-3">Enquiry Dispatched</h3>
            <p className="text-sm text-[#55555e] leading-relaxed mb-8">
              Thank you for reaching out. An Indiabridge industrial practice partner will review your project details and respond within one business day.
            </p>
            <button
              className="w-full py-3.5 rounded-full bg-[#111112] hover:bg-black text-white font-medium text-sm transition-colors cursor-pointer"
              onClick={() => setIsSubmitted(false)}
            >
              Return to Page
            </button>
          </div>
        </div>
      )}
    </>
  );
}
