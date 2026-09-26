/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Product, CartItem, Order, ToastMessage } from './types';
import { getStoredOrders, saveOrder, clearStoredOrders } from './utils/orderStorage';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ChefStory } from './components/ChefStory';
import { AchievementsSection } from './components/AchievementsSection';
import { SisterBrands } from './components/SisterBrands';
import { MenuSection } from './components/MenuSection';
import { BakeryRecipesSection } from './components/BakeryRecipesSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FAQSection } from './components/FAQSection';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { OrderSuccessModal } from './components/OrderSuccessModal';
import { OrderHistoryModal } from './components/OrderHistoryModal';
import { Footer } from './components/Footer';
import { ToastContainer } from './components/Toast';

export default function App() {
  // Cart State
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Modals State
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isOrderSuccessOpen, setIsOrderSuccessOpen] = useState(false);
  const [isOrderHistoryOpen, setIsOrderHistoryOpen] = useState(false);
  const [latestOrder, setLatestOrder] = useState<Order | null>(null);

  // Orders State (Persisted in localStorage)
  const [orders, setOrders] = useState<Order[]>([]);

  // Toasts
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Load orders on mount
  useEffect(() => {
    setOrders(getStoredOrders());
  }, []);

  const showToast = (title: string, message: string, type: 'success' | 'error' | 'info' = 'info') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 6);
    setToasts((prev) => [...prev, { id, title, message, type }]);
  };

  const handleDismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Cart operations
  const handleAddToCart = (product: Product, selectedSize?: { label: string; price: number }) => {
    const unitPrice = selectedSize ? selectedSize.price : product.price;

    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          (item.selectedSize?.label || '') === (selectedSize?.label || '')
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      } else {
        return [...prev, { product, quantity: 1, selectedSize, unitPrice }];
      }
    });

    showToast(
      'Added to Pastry Box',
      `${product.name} ${selectedSize ? `(${selectedSize.label})` : ''} added!`,
      'success'
    );
  };

  const handleUpdateQuantity = (productId: string, quantity: number, sizeLabel?: string) => {
    if (quantity <= 0) {
      handleRemoveItem(productId, sizeLabel);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => {
        if (
          item.product.id === productId &&
          (item.selectedSize?.label || '') === (sizeLabel || '')
        ) {
          return { ...item, quantity };
        }
        return item;
      })
    );
  };

  const handleRemoveItem = (productId: string, sizeLabel?: string) => {
    setCartItems((prev) =>
      prev.filter(
        (item) =>
          !(
            item.product.id === productId &&
            (item.selectedSize?.label || '') === (sizeLabel || '')
          )
      )
    );
  };

  // Grand Total Calculation
  const grandTotal = cartItems.reduce(
    (acc, item) => acc + item.unitPrice * item.quantity,
    0
  );

  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // When order is confirmed via UPI & UTR
  const handleOrderSuccess = (order: Order) => {
    saveOrder(order);
    setOrders((prev) => [order, ...prev]);
    setLatestOrder(order);
    setCartItems([]);
    setIsCheckoutOpen(false);
    setIsOrderSuccessOpen(true);
  };

  const handleClearHistory = () => {
    if (window.confirm('Are you sure you want to clear your local order history?')) {
      clearStoredOrders();
      setOrders([]);
      showToast('History Cleared', 'Your order records have been reset.', 'info');
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C1810] flex flex-col selection:bg-[#E8A598]/30">
      {/* Toast Notification Stack */}
      <ToastContainer toasts={toasts} onDismiss={handleDismissToast} />

      {/* Sticky Boutique Navigation Bar */}
      <Navbar
        cartCount={cartItemCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenOrderHistory={() => setIsOrderHistoryOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreMenu={() => {
            const el = document.getElementById('menu');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onLearnChef={() => {
            const el = document.getElementById('about');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Chef Aqsa Story & Media Archive */}
        <ChefStory />

        {/* Accreditations & Honors */}
        <AchievementsSection />

        {/* Sister Brands: The Crave Co. & The Cream Room */}
        <SisterBrands />

        {/* Boutique Patisserie Menu & Direct Add-to-Cart */}
        <MenuSection
          onAddToCart={handleAddToCart}
          cartItemCount={cartItemCount}
          onOpenCart={() => setIsCartOpen(true)}
        />

        {/* Professional Bakery Recipe Collection & Pricing Guide */}
        <BakeryRecipesSection
          onAddToCart={handleAddToCart}
          onOpenCart={() => setIsCartOpen(true)}
        />

        {/* Client Love & Testimonials */}
        <ReviewsSection />

        {/* Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={() => setIsCheckoutOpen(true)}
        grandTotal={grandTotal}
      />

      {/* Checkout & Direct UPI Payment Gateway Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        grandTotal={grandTotal}
        onOrderSuccess={handleOrderSuccess}
        showToast={showToast}
      />

      {/* Order Success & WhatsApp Confirmation Modal */}
      <OrderSuccessModal
        isOpen={isOrderSuccessOpen}
        onClose={() => setIsOrderSuccessOpen(false)}
        order={latestOrder}
        onViewOrderHistory={() => {
          setIsOrderSuccessOpen(false);
          setIsOrderHistoryOpen(true);
        }}
      />

      {/* Order History Modal */}
      <OrderHistoryModal
        isOpen={isOrderHistoryOpen}
        onClose={() => setIsOrderHistoryOpen(false)}
        orders={orders}
        onClearHistory={handleClearHistory}
        onStartNewOrder={() => {
          const el = document.getElementById('menu');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Footer */}
      <Footer onOpenOrderHistory={() => setIsOrderHistoryOpen(true)} />
    </div>
  );
}
