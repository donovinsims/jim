import React, { useState } from 'react';
import { Phone, Mail, MapPin, Calendar, Clock, CheckCircle2, AlertCircle, ArrowRight, X } from 'lucide-react';
import { validateContactForm, ContactFormData } from '../utils/inspection-logic.ts';
import { BUSINESS_INFO, SERVICES } from '../data/content.ts';

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
  initialNotes?: string;
  initialService?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  isOpen,
  onClose,
  initialNotes = '',
  initialService = 'pre-purchase'
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    address: '',
    serviceType: initialService,
    notes: initialNotes,
    preferredDate: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateContactForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      address: '',
      serviceType: 'pre-purchase',
      notes: '',
      preferredDate: ''
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-form-title"
    >
      <div className="bg-stone-900 border border-stone-800 rounded-2xl w-full max-w-2xl max-h-[92vh] flex flex-col shadow-2xl text-stone-100 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-stone-950 border-b border-stone-800 flex items-center justify-between gap-4">
          <div>
            <h2 id="booking-form-title" className="text-base sm:text-lg font-bold font-display text-white">
              Schedule with Jim Belanger
            </h2>
            <p className="text-xs text-stone-400">
              Wisconsin Home Inspection Associates, LLC · WI Lic #2200-106
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors cursor-pointer"
            aria-label="Close booking form"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="text-xl font-bold text-white font-display">
                Inspection Request Received!
              </h3>

              <p className="text-sm text-stone-300 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Jim has received your details for <strong>{formData.address}</strong>.
              </p>

              <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 text-left text-xs text-stone-300 max-w-md mx-auto space-y-2">
                <p className="font-semibold text-amber-400">
                  What Happens Next:
                </p>
                <p>1. Jim will review your property address and requested date.</p>
                <p>2. He will contact you directly via phone or email at <strong>{formData.phone}</strong> to confirm access details.</p>
                <p>3. If your contingency deadline is urgent, call or text Jim immediately:</p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Jim: {BUSINESS_INFO.phone}</span>
                </a>
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 text-sm font-semibold cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-sm" noValidate>
              
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-stone-300 flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Need immediate confirmation?</strong> For tight inspection contingency windows, call or text Jim directly at <strong>(608) 575-5680</strong>.
                </span>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Michael Miller"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-stone-950 border ${
                      errors.name ? 'border-rose-500' : 'border-stone-800'
                    } text-white placeholder:text-stone-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500`}
                  />
                  {errors.name && <p className="text-xs text-rose-400 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">
                    Phone Number (Calls &amp; Texts) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(608) 555-0123"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-stone-950 border ${
                      errors.phone ? 'border-rose-500' : 'border-stone-800'
                    } text-white placeholder:text-stone-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500`}
                  />
                  {errors.phone && <p className="text-xs text-rose-400 mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Email & Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-stone-950 border ${
                      errors.email ? 'border-rose-500' : 'border-stone-800'
                    } text-white placeholder:text-stone-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500`}
                  />
                  {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">
                    Property Address or Town *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={e => setFormData({ ...formData, address: e.target.value })}
                    placeholder="e.g. 123 Main St, Janesville, WI"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-stone-950 border ${
                      errors.address ? 'border-rose-500' : 'border-stone-800'
                    } text-white placeholder:text-stone-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500`}
                  />
                  {errors.address && <p className="text-xs text-rose-400 mt-1">{errors.address}</p>}
                </div>
              </div>

              {/* Service Type & Preferred Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">
                    Service Needed *
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={e => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-stone-950 border border-stone-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
                  >
                    <option value="pre-purchase">Pre-Purchase Home Inspection</option>
                    <option value="radon-testing">Continuous Radon Testing (48-hr)</option>
                    <option value="pre-purchase-and-radon">Inspection + Radon Combo</option>
                    <option value="pre-listing">Pre-Listing (Seller) Inspection</option>
                    <option value="new-construction">New Construction / Warranty</option>
                    <option value="annual-maintenance">Annual Home Maintenance Check</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">
                    Target Inspection Date (Approximate)
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={e => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-stone-950 border border-stone-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              {/* Property Details / Notes */}
              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1">
                  Property Notes (Square footage, age, MLS link, or contingency deadline)
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={e => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. 2,100 sq ft two-story built in 1995, contingency ends Friday."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-stone-950 border border-stone-800 text-white placeholder:text-stone-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-stone-400">
                  You work directly with Jim Belanger. Never passed off.
                </span>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-stone-950 font-bold text-sm transition-colors cursor-pointer inline-flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Submit Request to Jim</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
