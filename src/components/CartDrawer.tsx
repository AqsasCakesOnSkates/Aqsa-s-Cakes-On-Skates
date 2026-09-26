import React from 'react';
import { CartItem } from '../types';
import { BRAND_LOGO_URL, BRAND_NAME } from '../config/brand';
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number, sizeLabel?: string) => void;
  onRemoveItem: (productId: string, sizeLabel?: string) => void;
  onProceedToCheckout: () => void;
  grandTotal: number;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  grandTotal,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FDFBF7] shadow-2xl flex flex-col border-l border-[#E8A598]/30">
          {/* Header with Mascot Logo */}
          <div className="p-6 bg-white border-b border-[#E8A598]/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={BRAND_LOGO_URL}
                alt={BRAND_NAME}
                className="w-10 h-10 object-contain rounded-full border border-[#E8A598]/30 p-0.5 bg-[#FDFBF7]"
              />
              <div>
                <h2 className="font-serif font-bold text-lg text-[#2C1810]">
                  Your Pastry Box
                </h2>
                <p className="text-xs text-[#2C1810]/60 font-sans">
                  {items.length} {items.length === 1 ? 'item' : 'items'} selected
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

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#FCEFEF] flex items-center justify-center text-[#2C1810]">
                  <ShoppingBag className="w-8 h-8 text-[#E8A598]" />
                </div>
                <h3 className="font-serif font-bold text-lg text-[#2C1810]">
                  Your box is empty
                </h3>
                <p className="text-xs text-[#2C1810]/60 mt-1 font-sans">
                  Explore Chef Aqsa's artisanal cheesecakes, bomboloni, and cake slices!
                </p>
                <button
                  onClick={onClose}
                  className="mt-6 px-6 py-2.5 bg-[#2C1810] text-[#FDFBF7] rounded-xl text-xs font-semibold hover:bg-[#3D2318] transition-colors"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              items.map((item, idx) => {
                const itemTotal = item.unitPrice * item.quantity;
                return (
                  <div
                    key={`${item.product.id}-${item.selectedSize?.label || 'default'}-${idx}`}
                    className="p-4 bg-white rounded-2xl border border-[#E8A598]/30 flex gap-4 items-center shadow-xs"
                  >
                    {/* Thumbnail */}
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 rounded-xl object-cover border border-[#E8A598]/20 flex-shrink-0"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=200&q=80';
                      }}
                    />

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif font-bold text-sm text-[#2C1810] truncate">
                        {item.product.name}
                      </h4>
                      {item.product.category === 'recipes' && (
                        <span className="text-[10px] text-pink-700 bg-pink-100/80 px-2 py-0.5 rounded-full font-medium inline-block my-0.5">
                          📖 Instant PDF + WhatsApp Mentorship
                        </span>
                      )}
                      {item.selectedSize && (
                        <span className="text-[11px] text-[#2C1810]/60 font-sans block">
                          Size: {item.selectedSize.label}
                        </span>
                      )}
                      <p className="text-xs font-bold text-[#2C1810] mt-1 font-serif">
                        ₹{item.unitPrice} × {item.quantity} = ₹{itemTotal}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center border border-[#E8A598]/40 rounded-lg overflow-hidden bg-[#FDFBF7]">
                          <button
                            type="button"
                            onClick={() =>
                              onUpdateQuantity(
                                item.product.id,
                                item.quantity - 1,
                                item.selectedSize?.label
                              )
                            }
                            className="px-2 py-1 text-[#2C1810] hover:bg-[#FCEFEF] transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-bold text-[#2C1810]">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              onUpdateQuantity(
                                item.product.id,
                                item.quantity + 1,
                                item.selectedSize?.label
                              )
                            }
                            className="px-2 py-1 text-[#2C1810] hover:bg-[#FCEFEF] transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            onRemoveItem(item.product.id, item.selectedSize?.label)
                          }
                          className="text-red-400 hover:text-red-600 p-1 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer & Checkout Action */}
          {items.length > 0 && (
            <div className="p-6 bg-white border-t border-[#E8A598]/20 space-y-4">
              <div className="space-y-1.5 text-xs text-[#2C1810]/70 font-sans">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#2C1810]">₹{grandTotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Direct UPI Transfer Fee</span>
                  <span className="text-emerald-600 font-semibold">₹0 (Zero Charges)</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#E8A598]/20 text-base font-serif font-bold text-[#2C1810]">
                  <span>Grand Total</span>
                  <span>₹{grandTotal}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FCEFEF] text-[11px] text-[#2C1810] border border-[#E8A598]/30">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Direct Bank Transfer via UPI • 0% Convenience Fees • 100% Secure</span>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onProceedToCheckout();
                }}
                className="w-full py-3.5 px-4 bg-[#2C1810] hover:bg-[#3D2318] text-[#FDFBF7] rounded-xl font-serif font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2"
              >
                Proceed to Checkout (₹{grandTotal})
                <ArrowRight className="w-4 h-4 text-[#E8A598]" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
