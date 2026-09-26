import React, { useEffect } from 'react';
import { Order } from '../types';
import { BRAND_NAME, BRAND_LOGO_URL, PAYEE_UPI_ID, WHATSAPP_NUMBER } from '../config/brand';
import { generateWhatsAppConfirmationUrl } from '../utils/paymentUtils';
import confetti from 'canvas-confetti';
import {
  CheckCircle2,
  MessageCircle,
  Calendar,
  Clock,
  MapPin,
  X,
  Sparkles,
  Receipt,
  Download,
  Share2,
} from 'lucide-react';

interface OrderSuccessModalProps {
  order: Order | null;
  isOpen: boolean;
  onClose: () => void;
  onViewOrderHistory: () => void;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({
  order,
  isOpen,
  onClose,
  onViewOrderHistory,
}) => {
  useEffect(() => {
    if (isOpen) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#E8A598', '#FCEFEF', '#2C1810', '#10B981'],
        });
      } catch {
        // Confetti optional
      }
    }
  }, [isOpen]);

  if (!isOpen || !order) return null;

  const whatsappUrl = generateWhatsAppConfirmationUrl(order);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div className="bg-[#FDFBF7] w-full max-w-2xl rounded-3xl shadow-2xl border border-[#E8A598]/40 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header with Mascot Logo & Close Button */}
        <div className="bg-white px-6 py-4 border-b border-[#E8A598]/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={BRAND_LOGO_URL}
              alt={BRAND_NAME}
              className="w-10 h-10 object-contain rounded-full border border-[#E8A598]/30 p-0.5 bg-[#FDFBF7]"
            />
            <div>
              <h2 className="font-serif font-bold text-lg text-[#2C1810]">
                Order Confirmed!
              </h2>
              <p className="text-xs text-[#2C1810]/60 font-sans">
                Order #{order.orderId}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#2C1810]/60 hover:text-[#2C1810] hover:bg-[#FCEFEF] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 text-center sm:text-left">
          {/* Congratulatory Hero with Mascot Logo & Success Badge */}
          <div className="p-6 rounded-3xl bg-white border border-[#E8A598]/30 shadow-xs flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <div className="relative">
              <img
                src={BRAND_LOGO_URL}
                alt="Aqsa's Cakes on Skates Mascot"
                className="w-20 h-20 object-contain rounded-full border-2 border-[#E8A598]/60 p-1 bg-[#FDFBF7] shadow-sm"
              />
              <span className="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full p-1 shadow-sm">
                <CheckCircle2 className="w-4 h-4" />
              </span>
            </div>

            <div className="flex-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-2 border border-emerald-200">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                Payment Received & Logged
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#2C1810]">
                Thank you, {order.customer.fullName.split(' ')[0]}!
              </h3>
              <p className="text-xs sm:text-sm text-[#2C1810]/70 font-sans mt-1 leading-relaxed">
                Chef Aqsa Lakdawala has received your order reservation. We are preparing the freshest ingredients for your celebration!
              </p>
            </div>
          </div>

          {/* 1-Click WhatsApp Direct Notification Button */}
          <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-left space-y-3">
            <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm font-serif">
              <MessageCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              Fast-Track WhatsApp Verification
            </div>
            <p className="text-xs text-emerald-800/80 font-sans leading-relaxed">
              Tap the button below to share your order details and payment screenshot directly with Chef Aqsa on WhatsApp (+91 8277463778):
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-3 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-serif font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Send Payment Confirmation to Chef Aqsa on WhatsApp
            </a>
          </div>

          {/* Itemized Order Receipt */}
          <div className="p-5 rounded-2xl bg-white border border-[#E8A598]/30 text-left space-y-4">
            <div className="flex items-center justify-between border-b border-[#E8A598]/20 pb-3">
              <div className="flex items-center gap-2 font-serif font-bold text-sm text-[#2C1810]">
                <Receipt className="w-4 h-4 text-[#E8A598]" />
                Order Receipt
              </div>
              <span className="text-xs font-mono font-semibold text-[#2C1810]/60">
                UTR: {order.utrNumber}
              </span>
            </div>

            <div className="divide-y divide-[#E8A598]/10 text-xs font-sans space-y-2">
              {order.items.map((item, idx) => (
                <div key={idx} className="pt-2 flex justify-between items-center">
                  <span className="text-[#2C1810] font-medium">
                    {item.quantity} × {item.product.name}{' '}
                    {item.selectedSize && `(${item.selectedSize.label})`}
                  </span>
                  <span className="font-serif font-bold text-[#2C1810]">
                    ₹{item.unitPrice * item.quantity}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-[#E8A598]/20 flex justify-between items-center font-serif font-bold text-base text-[#2C1810]">
              <span>Grand Total Transferred</span>
              <span>₹{order.totalAmount}</span>
            </div>

            {/* Delivery Schedule Recap */}
            <div className="p-3 rounded-xl bg-[#FDFBF7] border border-[#E8A598]/20 space-y-2 text-xs font-sans text-[#2C1810]/80">
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-[#E8A598]" />
                <span>Delivery Date: {order.customer.deliveryDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#E8A598]" />
                <span>Time Slot: {order.customer.timeSlot}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#E8A598] flex-shrink-0 mt-0.5" />
                <span className="truncate">Address: {order.customer.deliveryAddress}</span>
              </div>
              {order.customer.chefNotes && (
                <div className="pt-1 text-[11px] italic text-[#2C1810]/70 border-t border-[#E8A598]/20">
                  Note: "{order.customer.chefNotes}"
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => {
                onClose();
                onViewOrderHistory();
              }}
              className="flex-1 py-3 px-4 bg-[#FCEFEF] hover:bg-[#E8A598]/30 text-[#2C1810] rounded-xl font-serif font-bold text-sm transition-all border border-[#E8A598]/40"
            >
              View in Order History
            </button>
            <button
              onClick={onClose}
              className="flex-1 py-3 px-4 bg-[#2C1810] hover:bg-[#3D2318] text-[#FDFBF7] rounded-xl font-serif font-bold text-sm transition-all shadow-md"
            >
              Continue Exploring Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
