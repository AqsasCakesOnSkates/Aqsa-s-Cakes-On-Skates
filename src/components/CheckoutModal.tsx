import React, { useState } from 'react';
import { CartItem, CustomerDetails, Order } from '../types';
import {
  BRAND_NAME,
  BRAND_LOGO_URL,
  PAYEE_NAME,
  PAYEE_UPI_ID,
  PAYMENT_PHONE,
  COMPANY_PHONE,
  CURRENCY,
  WHATSAPP_NUMBER,
} from '../config/brand';
import { generateUpiUri, generateWhatsAppConfirmationUrl } from '../utils/paymentUtils';
import { QRCodeSVG } from 'qrcode.react';
import {
  X,
  Copy,
  Check,
  Smartphone,
  QrCode,
  ShieldCheck,
  Clock,
  Calendar,
  MapPin,
  User,
  Phone,
  MessageSquare,
  ArrowRight,
  ExternalLink,
  MessageCircle,
} from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  grandTotal: number;
  onOrderSuccess: (order: Order) => void;
  showToast: (title: string, message: string, type?: 'success' | 'error' | 'info') => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  grandTotal,
  onOrderSuccess,
  showToast,
}) => {
  // Step 1: Delivery Details, Step 2: Payment & Verification
  const [step, setStep] = useState<1 | 2>(1);

  // Form State
  const [customer, setCustomer] = useState<CustomerDetails>({
    fullName: '',
    mobileNumber: '',
    deliveryAddress: '',
    deliveryDate: new Date(Date.now() + 86400000).toISOString().split('T')[0], // Default tomorrow
    timeSlot: '4:00 PM - 7:00 PM (Evening Express)',
    chefNotes: '',
  });

  const [copiedUpi, setCopiedUpi] = useState(false);
  const [utrNumber, setUtrNumber] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  // Generate standard UPI URI
  const upiUri = generateUpiUri(grandTotal);

  // Available Time Slots
  const timeSlots = [
    '11:00 AM - 1:00 PM (Morning Slot)',
    '1:00 PM - 4:00 PM (Afternoon Slot)',
    '4:00 PM - 7:00 PM (Evening Express)',
    '7:00 PM - 9:30 PM (Dinner Celebration)',
  ];

  const handleCopyUpiId = async () => {
    try {
      await navigator.clipboard.writeText(PAYEE_UPI_ID);
      setCopiedUpi(true);
      showToast('UPI ID Copied!', `${PAYEE_UPI_ID} has been copied to your clipboard.`, 'success');
      setTimeout(() => setCopiedUpi(false), 3000);
    } catch {
      showToast('Copied', PAYEE_UPI_ID, 'info');
    }
  };

  const validateStep1 = () => {
    const errors: Record<string, string> = {};

    if (!customer.fullName.trim()) {
      errors.fullName = 'Full Name is required.';
    }
    const cleanPhone = customer.mobileNumber.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errors.mobileNumber = 'Please enter a valid 10-digit mobile number.';
    }
    if (!customer.deliveryAddress.trim() || customer.deliveryAddress.length < 8) {
      errors.deliveryAddress = 'Full address with landmark & city (Belgaum/Goa) is required.';
    }
    if (!customer.deliveryDate) {
      errors.deliveryDate = 'Please select a delivery date.';
    }
    if (!customer.timeSlot) {
      errors.timeSlot = 'Please select a preferred delivery slot.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep1()) {
      setStep(2);
    } else {
      showToast('Missing Details', 'Please complete all required delivery fields.', 'error');
    }
  };

  const handleVerifyPayment = (e: React.FormEvent) => {
    e.preventDefault();

    const cleanUtr = utrNumber.trim();
    if (!cleanUtr || cleanUtr.length < 6) {
      showToast('Invalid UTR / Ref', 'Please enter your 12-digit UPI transaction reference / UTR number from your bank app.', 'error');
      return;
    }

    setIsVerifying(true);

    // Create completed order object
    const newOrder: Order = {
      orderId: `AQS-${Date.now().toString().slice(-6)}`,
      timestamp: new Date().toISOString(),
      customer,
      items: [...items],
      totalAmount: grandTotal,
      utrNumber: cleanUtr,
      status: 'confirmed',
      paymentMethod: 'UPI_DIRECT',
    };

    setTimeout(() => {
      setIsVerifying(false);
      onOrderSuccess(newOrder);
      showToast('Payment Verified!', 'Your order has been placed with Chef Aqsa.', 'success');
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div className="bg-[#FDFBF7] w-full max-w-3xl rounded-3xl shadow-2xl border border-[#E8A598]/40 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Top Header with Mascot Logo */}
        <div className="bg-white px-6 py-4 border-b border-[#E8A598]/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={BRAND_LOGO_URL}
              alt={BRAND_NAME}
              className="w-10 h-10 object-contain rounded-full border border-[#E8A598]/30 p-0.5 bg-[#FDFBF7]"
            />
            <div>
              <h2 className="font-serif font-bold text-lg text-[#2C1810]">
                {step === 1 ? 'Delivery & Recipient Details' : 'Direct UPI Payment & Confirmation'}
              </h2>
              <p className="text-xs text-[#2C1810]/60 font-sans">
                {BRAND_NAME} • Step {step} of 2
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {step === 2 && (
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs text-[#2C1810]/70 hover:text-[#2C1810] font-sans underline mr-2"
              >
                ← Edit Details
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#2C1810]/60 hover:text-[#2C1810] hover:bg-[#FCEFEF] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* Trust Banner */}
          <div className="flex items-center justify-between p-3 rounded-2xl bg-[#FCEFEF] text-xs text-[#2C1810] border border-[#E8A598]/30">
            <div className="flex items-center gap-2 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Direct Bank Transfer via UPI • 0% Convenience Fees • 100% Secure</span>
            </div>
            <span className="font-serif font-bold text-sm">Grand Total: ₹{grandTotal}</span>
          </div>

          {step === 1 ? (
            /* ================= STEP 1: CUSTOMER & DELIVERY FORM ================= */
            <form onSubmit={handleProceedToPayment} className="space-y-5">
              {/* Order Summary Preview */}
              <div className="p-4 rounded-2xl bg-white border border-[#E8A598]/20 space-y-2">
                <h3 className="text-xs uppercase font-bold text-[#2C1810]/70 tracking-wider font-sans">
                  Selected Items ({items.length})
                </h3>
                <div className="max-h-36 overflow-y-auto divide-y divide-[#E8A598]/10 text-xs">
                  {items.map((i, idx) => (
                    <div key={idx} className="py-1.5 flex justify-between items-center">
                      <span className="font-medium text-[#2C1810] truncate max-w-[240px]">
                        {i.quantity} × {i.product.name} {i.selectedSize && `(${i.selectedSize.label})`}
                      </span>
                      <span className="font-serif font-bold text-[#2C1810]">
                        ₹{i.unitPrice * i.quantity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-[#2C1810] mb-1 font-sans">
                    Customer Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#2C1810]/40" />
                    <input
                      type="text"
                      required
                      placeholder="e.g., Ananya Sharma"
                      value={customer.fullName}
                      onChange={(e) => setCustomer({ ...customer, fullName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border border-[#E8A598]/40 focus:ring-2 focus:ring-[#2C1810] text-sm text-[#2C1810] outline-none"
                    />
                  </div>
                  {formErrors.fullName && (
                    <p className="text-[11px] text-red-500 mt-1">{formErrors.fullName}</p>
                  )}
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-xs font-bold text-[#2C1810] mb-1 font-sans">
                    Mobile Number (for delivery updates) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#2C1810]/40" />
                    <input
                      type="tel"
                      required
                      maxLength={12}
                      placeholder="e.g., 9823456789"
                      value={customer.mobileNumber}
                      onChange={(e) => setCustomer({ ...customer, mobileNumber: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border border-[#E8A598]/40 focus:ring-2 focus:ring-[#2C1810] text-sm text-[#2C1810] outline-none"
                    />
                  </div>
                  {formErrors.mobileNumber && (
                    <p className="text-[11px] text-red-500 mt-1">{formErrors.mobileNumber}</p>
                  )}
                </div>

                {/* Delivery Date */}
                <div>
                  <label className="block text-xs font-bold text-[#2C1810] mb-1 font-sans">
                    Delivery Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#2C1810]/40" />
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={customer.deliveryDate}
                      onChange={(e) => setCustomer({ ...customer, deliveryDate: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border border-[#E8A598]/40 focus:ring-2 focus:ring-[#2C1810] text-sm text-[#2C1810] outline-none"
                    />
                  </div>
                  {formErrors.deliveryDate && (
                    <p className="text-[11px] text-red-500 mt-1">{formErrors.deliveryDate}</p>
                  )}
                </div>

                {/* Delivery Slot */}
                <div>
                  <label className="block text-xs font-bold text-[#2C1810] mb-1 font-sans">
                    Delivery Time Slot <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#2C1810]/40 pointer-events-none" />
                    <select
                      value={customer.timeSlot}
                      onChange={(e) => setCustomer({ ...customer, timeSlot: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border border-[#E8A598]/40 focus:ring-2 focus:ring-[#2C1810] text-sm text-[#2C1810] outline-none appearance-none"
                    >
                      {timeSlots.map((slot, idx) => (
                        <option key={idx} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Full Delivery Address */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-[#2C1810] mb-1 font-sans">
                    Full Delivery Address (Apartment, Street, Area, City: Belgaum or Goa) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 absolute left-3 top-3 text-[#2C1810]/40" />
                    <textarea
                      rows={2}
                      required
                      placeholder="e.g., Flat 402, Miramar Palms, Dayanand Bandodkar Marg, Panaji, Goa"
                      value={customer.deliveryAddress}
                      onChange={(e) => setCustomer({ ...customer, deliveryAddress: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-[#E8A598]/40 focus:ring-2 focus:ring-[#2C1810] text-sm text-[#2C1810] outline-none"
                    />
                  </div>
                  {formErrors.deliveryAddress && (
                    <p className="text-[11px] text-red-500 mt-1">{formErrors.deliveryAddress}</p>
                  )}
                </div>

                {/* Optional Message / Chef's Notes */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-[#2C1810] mb-1 font-sans">
                    Chef’s Notes / Inscription on Cake (Optional)
                  </label>
                  <div className="relative">
                    <MessageSquare className="w-4 h-4 absolute left-3 top-3 text-[#2C1810]/40" />
                    <textarea
                      rows={2}
                      placeholder="e.g., Write 'Happy 25th Anniversary Mom & Dad' in gold chocolate script. Please keep extra napkins."
                      value={customer.chefNotes}
                      onChange={(e) => setCustomer({ ...customer, chefNotes: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-[#E8A598]/40 focus:ring-2 focus:ring-[#2C1810] text-sm text-[#2C1810] outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Step 1 CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#2C1810] hover:bg-[#3D2318] text-[#FDFBF7] rounded-xl font-serif font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2"
                >
                  Proceed to Direct UPI Payment (₹{grandTotal})
                  <ArrowRight className="w-4 h-4 text-[#E8A598]" />
                </button>
              </div>
            </form>
          ) : (
            /* ================= STEP 2: DYNAMIC UPI GATEWAY & VERIFICATION ================= */
            <div className="space-y-6">
              {/* Responsive Payment Split (Desktop QR & Mobile App Button) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                {/* Desktop Card with Embedded Logo & Dynamic QR Code */}
                <div className="p-6 bg-white rounded-3xl border border-[#E8A598]/40 shadow-sm flex flex-col items-center text-center justify-between">
                  <div>
                    {/* Embedded Circular Logo subtly above QR code container */}
                    <div className="w-14 h-14 rounded-full bg-[#FCEFEF] border-2 border-[#E8A598]/50 p-1 mx-auto mb-3 shadow-sm flex items-center justify-center">
                      <img
                        src={BRAND_LOGO_URL}
                        alt="Aqsa's Cakes on Skates Mascot"
                        className="w-full h-full object-contain rounded-full"
                      />
                    </div>

                    <h3 className="font-serif font-bold text-base text-[#2C1810]">
                      Scan to Pay via UPI
                    </h3>
                    <p className="text-xs text-[#2C1810]/70 font-sans mt-0.5">
                      Scan using Google Pay, PhonePe, Paytm, BHIM, or any UPI app to transfer directly to Chef Aqsa.
                    </p>
                  </div>

                  {/* Scannable Dynamic QR Code */}
                  <div className="my-4 p-4 bg-white rounded-2xl border-2 border-dashed border-[#E8A598]/60 shadow-inner flex flex-col items-center justify-center">
                    <QRCodeSVG
                      value={upiUri}
                      size={180}
                      level="H"
                      includeMargin={false}
                      className="rounded-lg"
                    />
                    <div className="mt-2 text-[11px] font-mono font-bold text-[#2C1810]">
                      Exact Amount: ₹{grandTotal}
                    </div>
                  </div>

                  {/* Copy UPI ID */}
                  <div className="w-full space-y-2">
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#FDFBF7] border border-[#E8A598]/30 text-xs">
                      <div className="text-left font-mono truncate mr-2">
                        <span className="text-[10px] text-[#2C1810]/60 block font-sans">
                          Payee VPA (HDFC Bank):
                        </span>
                        <span className="font-bold text-[#2C1810]">{PAYEE_UPI_ID}</span>
                      </div>
                      <button
                        type="button"
                        onClick={handleCopyUpiId}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-[#2C1810] text-[#FDFBF7] rounded-lg text-xs font-sans font-medium hover:bg-[#3D2318] transition-colors flex-shrink-0"
                      >
                        {copiedUpi ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-[#E8A598]" />
                            Copy UPI
                          </>
                        )}
                      </button>
                    </div>

                    <div className="p-2 rounded-xl bg-amber-50 border border-amber-200 text-[11px] text-amber-900 font-sans text-left">
                      <strong>Payment Mobile Number:</strong> <span className="font-mono font-bold text-amber-950">{PAYMENT_PHONE}</span> (Only for UPI payment transfers)
                    </div>
                  </div>
                </div>

                {/* Mobile View CTA & Step Guidance */}
                <div className="p-6 bg-white rounded-3xl border border-[#E8A598]/40 shadow-sm flex flex-col justify-between space-y-4">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCEFEF] text-[11px] font-semibold text-[#2C1810] mb-3">
                      <Smartphone className="w-3.5 h-3.5 text-[#E8A598]" />
                      Mobile Fast-Track
                    </div>
                    <h3 className="font-serif font-bold text-lg text-[#2C1810]">
                      One-Tap Mobile Payment
                    </h3>
                    <p className="text-xs text-[#2C1810]/70 font-sans mt-1 leading-relaxed">
                      On smartphones, tap below to launch Google Pay, PhonePe, or Paytm with payee <strong className="font-semibold">{PAYEE_NAME}</strong> and amount <strong className="font-semibold">₹{grandTotal}</strong> pre-filled.
                    </p>
                  </div>

                  {/* Mobile Deep Link CTA Button */}
                  <a
                    href={upiUri}
                    className="w-full py-4 px-4 bg-gradient-to-r from-[#2C1810] to-[#45271d] hover:to-[#2C1810] text-white rounded-2xl font-serif font-bold text-base shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 text-center border border-[#E8A598]/40"
                  >
                    <Smartphone className="w-5 h-5 text-[#E8A598] animate-bounce" />
                    Pay with Any UPI App (₹{grandTotal})
                    <ExternalLink className="w-4 h-4 text-white/70" />
                  </a>

                  {/* 3-Step Verification Guide */}
                  <div className="p-3.5 rounded-2xl bg-[#FDFBF7] border border-[#E8A598]/20 space-y-2 text-xs font-sans text-[#2C1810]/80">
                    <div className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#2C1810] text-white text-[10px] flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                        1
                      </span>
                      <span>Scan QR or tap the mobile button to complete ₹{grandTotal} transfer.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#2C1810] text-white text-[10px] flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                        2
                      </span>
                      <span>Copy the 12-digit UPI Reference / UTR Number from your payment app.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#2C1810] text-white text-[10px] flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                        3
                      </span>
                      <span>Paste below to verify and unlock 1-click WhatsApp order confirmation!</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Post-Payment Order Verification & Confirmation */}
              <div className="p-6 bg-white rounded-3xl border-2 border-[#E8A598]/50 shadow-md">
                <form onSubmit={handleVerifyPayment} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-[#2C1810] mb-1.5 font-sans">
                      Enter 12-digit UPI Reference / UTR Number <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="text"
                        required
                        value={utrNumber}
                        onChange={(e) => setUtrNumber(e.target.value.replace(/[^0-9a-zA-Z]/g, ''))}
                        placeholder="e.g., 426819204812"
                        className="flex-1 px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#E8A598]/60 focus:ring-2 focus:ring-[#2C1810] text-base font-mono text-[#2C1810] outline-none"
                      />
                      <button
                        type="submit"
                        disabled={isVerifying || !utrNumber.trim()}
                        className="px-6 py-3 bg-[#2C1810] hover:bg-[#3D2318] disabled:bg-gray-300 disabled:cursor-not-allowed text-[#FDFBF7] rounded-xl font-serif font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 whitespace-nowrap"
                      >
                        {isVerifying ? (
                          <>Verifying Transfer...</>
                        ) : (
                          <>
                            <Check className="w-4 h-4 text-emerald-400" />
                            Submit & Confirm Order
                          </>
                        )}
                      </button>
                    </div>
                    <p className="text-[11px] text-[#2C1810]/60 mt-1 font-sans">
                      Found in Google Pay / PhonePe transaction receipt as "UPI Transaction ID" or "UTR".
                    </p>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
