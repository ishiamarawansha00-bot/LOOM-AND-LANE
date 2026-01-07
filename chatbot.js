// Chatbot Popup Logic
const chatbotToggle1 = document.getElementById("chatbotToggle1");
const chatbot1 = document.getElementById("chatbot1");
const closeChat1 = document.getElementById("closeChat1");

chatbotToggle1.addEventListener("click", () => {
  chatbot1.style.display = "flex";
});

closeChat1.addEventListener("click", () => {
  chatbot1.style.display = "none";
});

// 20 Common Q&A
// Existing Q&A
const qa1 = {
  "hello": "Hi there! 👋 How can I help you today?",
  "hi": "Hello! How are you doing?",

  "what kind of items do you have?": 
    "Here are our handcrafted items with prices:\n" +
    "- Handwoven Cotton Throw — $50.00\n" +
    "- Terracotta Artisan Vase — $65.00\n" +
    "- Linen Table Runner — $32.00\n" +
    "- Rattan Storage Basket — $28.00\n" +
    "- Artisanal Wall Hanging — $60.00\n" +
    "- Coconut Shell Bowl Set — $22.00\n" +
    "- Batik Throw Blanket — $54.00\n" +
    "- Teak Coasters (Set of 4) — $18.00\n" +
    "- Spice Storage Jars — $30.00\n" +
    "- Handloom Tote Bag — $38.00\n" +
    "- Coastal Shell Placemat Set — $48.00\n" +
    "- Traditional Raksha Mask — $65.00\n" +
    "- Coconut Shell Crafts — $25.00\n" +
    "- Buddha Framed Picture — $70.00\n" +
    "- Palm-Leaf Hand Fan — $15.00\n" +
    "- Brassware Decorative Box — $45.00"
};

// Add new items vertically
qa1["do you ship internationally?"] = 
  "Yes, we ship worldwide 🌍.\n" +
  "Shipping costs are calculated at checkout.";

qa1["how long does delivery take?"] = 
  "Standard shipping: 3–5 days.\n" +
  "Express shipping: 1–2 days.";

qa1["what payment methods do you accept?"] = 
  "We accept:\n" +
  "- Credit/Debit cards\n" +
  "- Cash on Delivery";

qa1["can i return a product?"] = 
  "Yes, returns are accepted within 14 days.\n" +
  "Items must be unused and in original packaging.";

qa1["do you have eco-friendly items?"] = 
  "Absolutely 🌱.\n" +
  "Many crafts use natural, sustainable materials:\n" +
  "- Coconut shell\n" +
  "- Palm leaf\n" +
  "- Handloom fabrics";

qa1["tell me about loom & lane"] = 
  "We are a Sri Lankan lifestyle brand.\n" +
  "We blend tradition with modern design.\n" +
  "Our focus: artisan crafts and sustainability.";

qa1["how can i contact you?"] = 
  "You can reach us via:\n" +
  "- Contact page\n" +
  "- Email: support@loomandlane.com";

qa1["do you offer discounts?"] = 
  "We run seasonal promotions 🎉.\n" +
  "Current offer: Free shipping on orders over $60.";

qa1["where are you located?"] = 
  "We are based in Colombo, Sri Lanka 🇱🇰.";

qa1["what is your best seller?"] = 
  "Customer favorites:\n" +
  "- Handwoven Cotton Throw\n" +
  "- Traditional Raksha Mask";

// Chat Logic
const sendBtn1 = document.getElementById("sendBtn1");
const userInput1 = document.getElementById("userInput1");
const chatBody1 = document.getElementById("chatBody1");

sendBtn1.addEventListener("click", sendMessage1);
userInput1.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage1();
});

function sendMessage1() {
  const text = userInput1.value.trim().toLowerCase();
  if (text === "") return;

  appendMessage1(text, "user");
  userInput1.value = "";

  // Show thinking first
  const thinkingMsg = document.createElement("div");
  thinkingMsg.classList.add("thinking1");
  thinkingMsg.textContent = "Thinking...";
  chatBody1.appendChild(thinkingMsg);
  chatBody1.scrollTop = chatBody1.scrollHeight;

  setTimeout(() => {
    thinkingMsg.remove();
    const reply = qa1[text] || "🤔 Sorry, I don't know that yet.";
    appendMessage1(reply, "bot");
  }, 1500); // 1.5 sec delay for realism
}

function appendMessage1(msg, sender) {
  const div = document.createElement("div");
  div.classList.add("chat-message1", sender === "user" ? "user-message1" : "bot-message1");
  div.textContent = msg;
  chatBody1.appendChild(div);
  chatBody1.scrollTop = chatBody1.scrollHeight;
}



