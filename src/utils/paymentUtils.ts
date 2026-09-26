import { PAYEE_NAME, PAYEE_UPI_ID, PAYMENT_PHONE, CURRENCY, WHATSAPP_NUMBER } from '../config/brand';
import { Order } from '../types';

/**
 * Constructs the standard NPCI UPI URI dynamically based on the total
 * upi://pay?pa=aqsalakdawala15@okhdfcbank&pn=aqsa%20lakdawala&am=${totalAmount}&cu=INR&tn=AqsaCakesOnSkates%20Order
 */
export function generateUpiUri(totalAmount: number): string {
  const encodedPayeeName = encodeURIComponent(PAYEE_NAME);
  const transactionNote = encodeURIComponent("AqsaCakesOnSkates Order");
  return `upi://pay?pa=${PAYEE_UPI_ID}&pn=${encodedPayeeName}&am=${totalAmount}&cu=${CURRENCY}&tn=${transactionNote}`;
}

/**
 * Generates the WhatsApp direct verification link with pre-formatted order summary
 * opening https://wa.me/918277463778?text=${encodedMessage}
 */
export function generateWhatsAppConfirmationUrl(order: Order): string {
  const itemizedList = order.items
    .map(
      (item) =>
        `• ${item.product.name}${
          item.selectedSize ? ` (${item.selectedSize.label})` : ''
        } x${item.quantity} = ₹${item.unitPrice * item.quantity}`
    )
    .join('\n');

  const notes = order.customer.chefNotes
    ? `\nMessage on Cake / Notes: "${order.customer.chefNotes}"`
    : '';

  const messageText = `Hi Chef Aqsa! I have placed an order on Aqsa's Cakes on Skates:

Customer: ${order.customer.fullName} (${order.customer.mobileNumber})
Address: ${order.customer.deliveryAddress}
Delivery Date & Slot: ${order.customer.deliveryDate} at ${order.customer.timeSlot}
Order Items:
${itemizedList}${notes}

Total Paid: ₹${order.totalAmount}
UTR / Ref No: ${order.utrNumber}

"I have transferred the amount to ${PAYEE_UPI_ID} (Payment Number: ${PAYMENT_PHONE}). Sharing the payment screenshot below."`;

  const encodedMessage = encodeURIComponent(messageText);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

export function generateWhatsAppUrl(order: Order): string {
  return generateWhatsAppConfirmationUrl(order);
}

/**
 * Copies text to user's clipboard safely
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  if (navigator?.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // fallback
    }
  }

  try {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);
    return successful;
  } catch {
    return false;
  }
}
