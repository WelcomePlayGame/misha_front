import React from "react";
const sendOrderToTelegram = (order: any) => {
  const botToken = "6402218191:AAGCpNuSsQzHs4wSF2SdRT5I4TeHQUxrmVE";
  const chatId = `5259740914`;

  const message = `Нове замовлення:\n\n
  Імя: ${order.name}\n
  Призвіще: ${order.surname}\n
  По-Батькові ${order.father_name}\n
  Телефон: ${order.phone}\n
  Місто для Відправки: ${order.city}\n
  Загальна вартість: ${order.sum}\n
  Товари : ${order.products
    .map((product: any) => {
      return `
         ${product.title}
        `;
    })
    .join("\n")}\n`;

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
    }),
  };

  fetch(url, options)
    .then((response) => {
      if (response.ok) {
        console.log("Заказ успешно отправлен в Telegram!");
      } else {
        throw new Error("Ошибка при отправке заказа в Telegram");
      }
    })
    .catch((error) => {
      console.error("Ошибка при отправке заказа в Telegram:", error);
    });
};

export default sendOrderToTelegram;
