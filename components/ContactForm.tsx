'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';

type FormFields = 'name' | 'email' | 'interest' | 'message';
type Errors = Partial<Record<FormFields, string>>;

export default function ContactForm() {
  const t = useTranslations('contact');
  const searchParams = useSearchParams();
  const [form, setForm] = useState({ name: '', email: '', interest: 'web-app', message: '', honeypot: '' });

  useEffect(() => {
    const plan = searchParams.get('plan');
    if (!plan) return;
    const messageKey =
      plan === 'starter' ? 'planMessageStarter'
      : plan === 'pro' ? 'planMessagePro'
      : plan === 'premium' ? 'planMessagePremium'
      : null;
    if (messageKey) {
      setForm((prev) => ({ ...prev, interest: 'web-app', message: t(messageKey as Parameters<typeof t>[0]) }));
    }
  }, [searchParams, t]);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = t('errName');
    if (!form.email.trim()) {
      e.email = t('errEmail');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = t('errEmailInvalid');
    }
    if (!form.interest) e.interest = t('errInterest');
    if (!form.message.trim()) e.message = t('errMessage');
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.honeypot) return;

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          interest: form.interest,
          message: form.message,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', interest: '', message: '', honeypot: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputBase =
    'w-full px-4 py-3 rounded-xl border transition-colors bg-[#F5F2EE] text-[#1A1A1A] placeholder:text-[#aaa] focus:outline-none';

  const inputClass = (field: FormFields) =>
    `${inputBase} ${errors[field] ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-[#1A1A1A]'}`;

  const clearError = (field: FormFields) => {
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Honeypot */}
      <input
        type="text"
        tabIndex={-1}
        aria-hidden="true"
        className="hidden"
        value={form.honeypot}
        onChange={(e) => setForm({ ...form, honeypot: e.target.value })}
      />

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1.5 text-[#1A1A1A]">
          {t('name')}
        </label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={(e) => { setForm({ ...form, name: e.target.value }); clearError('name'); }}
          className={inputClass('name')}
        />
        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
      </div>

      {/* Email — required */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1.5 text-[#1A1A1A]">
          {t('email')}
          <span className="ml-1 text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => { setForm({ ...form, email: e.target.value }); clearError('email'); }}
          className={inputClass('email')}
        />
        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
      </div>

      {/* Interest */}
      <div>
        <label htmlFor="interest" className="block text-sm font-medium mb-1.5 text-[#1A1A1A]">
          {t('interest')}
        </label>
        <select
          id="interest"
          value={form.interest}
          onChange={(e) => { setForm({ ...form, interest: e.target.value }); clearError('interest'); }}
          className={inputClass('interest')}
        >
          <option value="">{t('interestPlaceholder')}</option>
          <option value="web-app">{t('interestWebApp')}</option>
          <option value="automation">{t('interestAutomation')}</option>
          <option value="bpmn">{t('interestBPMN')}</option>
          <option value="not-sure">{t('interestNotSure')}</option>
        </select>
        {errors.interest && <p className="mt-1 text-xs text-red-500">{errors.interest}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1.5 text-[#1A1A1A]">
          {t('message')}
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={(e) => { setForm({ ...form, message: e.target.value }); clearError('message'); }}
          className={`${inputClass('message')} resize-none`}
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-3 bg-[#1A1A1A] text-white rounded-full font-medium hover:bg-[#333] transition-all hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? '...' : t('send')}
      </button>

      {status === 'success' && (
        <p className="text-center text-sm font-medium text-green-700 bg-green-50 py-2 rounded-lg">
          {t('success')}
        </p>
      )}
      {status === 'error' && (
        <p className="text-center text-sm font-medium text-red-700 bg-red-50 py-2 rounded-lg">
          {t('error')}
        </p>
      )}
    </form>
  );
}
