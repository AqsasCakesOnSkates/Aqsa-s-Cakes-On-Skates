import React from 'react';
import { Order } from '../types';
import { BRAND_NAME, BRAND_LOGO_URL, WHATSAPP_NUMBER } from '../config/brand';
import { generateWhatsAppConfirmationUrl } from '../utils/paymentUtils';
import {
  History,
  X,
  Package,
  Calendar,
  Clock,
  MapPin,
  MessageCircle,
  CheckCircle2,
  Trash2,
  ShoppingBag,
} from 'lucide-react';

interface OrderHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  orders: Order[];
  onClearHistory: () => void;
  onStartNewOrder: () => void;
}

export const OrderHistoryModal: React.FC<OrderHistoryModalProps> = ({
  isOpen,
  onClose,
  orders,
  onClearHistory,
  onStartNewOrder,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div className="bg-[#FDFBF7] w-full max-w-3xl rounded-3xl shadow-2xl border border-[#E8A598]/40 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="bg-white px-6 py-4 border-b border-[#E8A598]/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FCEFEF] flex items-center justify-center border border-[#E8A598]/40 text-[#2C1810]">
              <History className="w-5 h-5 text-[#E8A598]" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-lg text-[#2C1810]">
                Your Order History
              </h2>
              <p className="text-xs text-[#2C1810]/60 font-sans">
                {orders.length} {orders.length === 1 ? 'order' : 'orders'} recorded on this device
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {orders.length > 0 && (
              <button
                onClick={onClearHistory}
                className="text-xs text-red-500 hover:text-red-700 font-sans flex items-center gap-1 p-2 rounded-lg hover:bg-red-50 transition-colors mr-2"
                title="Clear History"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Clear
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

        {/* Orders List Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-5">
          {orders.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-[#E8A598]/20 p-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#FCEFEF] flex items-center justify-center text-[#2C1810]">
                <Package className="w-8 h-8 text-[#E8A598]" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#2C1810]">
                No orders yet
              </h3>
              <p className="text-xs text-[#2C1810]/60 mt-1 font-sans">
                When you place an order via Direct UPI, your receipt and verification details will appear here.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onStartNewOrder();
                }}
                className="mt-6 px-6 py-2.5 bg-[#2C1810] text-[#FDFBF7] rounded-xl text-xs font-semibold hover:bg-[#3D2318] transition-colors"
              >
                Explore Menu & Order
              </button>
            </div>
          ) : (
            orders.map((order) => {
              const whatsappUrl = generateWhatsAppConfirmationUrl(order);
              return (
                <div
                  key={order.orderId}
                  className="bg-white rounded-3xl p-5 sm:p-6 border border-[#E8A598]/30 shadow-xs space-y-4 hover:border-[#2C1810]/40 transition-colors"
                >
                  {/* Order Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#E8A598]/20">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-serif font-bold text-base text-[#2C1810]">
                          Order #{order.orderId}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-sans font-semibold bg-emerald-100 text-emerald-800 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          Confirmed & Verified
                        </span>
                      </div>
                      <p className="text-[11px] text-[#2C1810]/60 font-sans mt-0.5">
                        Placed on {new Date(order.timestamp).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="font-serif font-bold text-lg text-[#2C1810]">
                        ₹{order.totalAmount}
                      </span>
                      <span className="text-[11px] block font-mono text-[#2C1810]/60">
                        UTR: {order.utrNumber}
                      </span>
                    </div>
                  </div>

                  {/* Items List */}
                  <div className="space-y-1.5 text-xs font-sans">
                    <h4 className="font-bold text-[#2C1810]/70 uppercase tracking-wider text-[10px]">
                      Items Ordered:
                    </h4>
                    <div className="divide-y divide-[#E8A598]/10 bg-[#FDFBF7] p-3 rounded-xl border border-[#E8A598]/20">
                      {order.items.map((item, i) => (
                        <div key={i} className="py-1 flex justify-between items-center text-xs">
                          <span className="text-[#2C1810]">
                            {item.quantity} × {item.product.name}{' '}
                            {item.selectedSize && `(${item.selectedSize.label})`}
                          </span>
                          <span className="font-semibold text-[#2C1810]">
                            ₹{item.unitPrice * item.quantity}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Delivery Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-[#2C1810]/80">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#E8A598]" />
                      <span>Delivery: {order.customer.deliveryDate} ({order.customer.timeSlot})</span>
                    </div>
                    <div className="flex items-center gap-1.5 truncate">
                      <MapPin className="w-3.5 h-3.5 text-[#E8A598] flex-shrink-0" />
                      <span className="truncate">{order.customer.deliveryAddress}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex flex-wrap gap-3">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold shadow-xs transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      Message Chef Aqsa on WhatsApp
                    </a>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
