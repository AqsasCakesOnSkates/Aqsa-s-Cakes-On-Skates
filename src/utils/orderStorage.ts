import { Order } from '../types';

const STORAGE_KEY = 'aqsa_cakes_on_skates_orders_v2';

export function getStoredOrders(): Order[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getSampleSeedOrders();
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : getSampleSeedOrders();
  } catch {
    return getSampleSeedOrders();
  }
}

export function saveOrder(order: Order): void {
  try {
    const existing = getStoredOrders();
    const updated = [order, ...existing.filter((o) => o.orderId !== order.orderId)];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save order to localStorage', e);
  }
}

export function saveOrderToStorage(order: Order): void {
  saveOrder(order);
}

export function clearStoredOrders(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error('Failed to clear stored orders', e);
  }
}

function getSampleSeedOrders(): Order[] {
  return [
    {
      orderId: "AQS-9812",
      timestamp: new Date(Date.now() - 86400000 * 2).toISOString(),
      customer: {
        fullName: "Simran Gounder",
        mobileNumber: "9823014589",
        deliveryAddress: "Flat 402, Miramar Sea Breeze Apts, Miramar Beach Road, Panaji, Goa",
        deliveryDate: "Tomorrow",
        timeSlot: "4:00 PM - 7:00 PM (Evening Express)",
        chefNotes: "Please write 'Happy Anniversary Kabir' in gold chocolate script.",
      },
      items: [
        {
          product: {
            id: "lotus-biscoff-cheesecake-slice",
            name: "Lotus Biscoff Chilled Cheesecake",
            category: "cheesecakes",
            dietary: "eggless",
            price: 180,
            description: "Velvety slow-set cream cheese infused with spiced speculoos biscuit crust.",
            image: "/assets/biscoff_cheesecake.jpg",
          },
          quantity: 1,
          unitPrice: 950,
          selectedSize: { label: "Whole 500g Gateau", price: 950 },
        },
        {
          product: {
            id: "creme-brulee-bombolone",
            name: "Crème Brûlée Italian Bombolone",
            category: "bombolone",
            dietary: "egg",
            price: 150,
            description: "Cloud-soft 24-hour slow fermented brioche doughnut piped with Madagascar vanilla bean diplomat cream.",
            image: "/assets/creme_brulee_bombolone.jpg",
          },
          quantity: 2,
          unitPrice: 150,
        },
      ],
      totalAmount: 1250,
      utrNumber: "428910923847",
      status: "confirmed",
      paymentMethod: "UPI_DIRECT",
    },
  ];
}
