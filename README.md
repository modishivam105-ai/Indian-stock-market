# Live Stock Market & AI Direction Predictor (सस्ता या महंगा)

एक हाई-स्पीड, मोबाइल-फ्रेंडली वेब ऐप्लिकेशन जो वर्ल्ड स्टॉक मार्केट (US, Global) और NSE India के स्टॉक्स को लाइव स्कैन करता है, तुरंत बताता है कि स्टॉक **"सस्ता"** है या **"महंगा"**, और क्वांट अल्गोरिद्म से **"ऊपर जाएगा या नीचे"** की भविष्यवाणी (Probability & Targets के साथ) करता है।

---

## 📱 मुख्य फीचर्स (Features)

1. **100% Mobile & Desktop Responsive:**
   - स्मार्टफोन (Android/iPhone) पर एक क्लीन ट्रेडिंग टर्मिनल की तरह खुलता है।
   - टच-फ्रेंडली पिल्स, स्मूथ स्क्रॉलिंग, और लाइव चार्ट्स।

2. **सस्ता या महंगा (Valuation Status):**
   - **RSI (14) & 200 EMA Deviation:** जब RSI < 35 और प्राइस 200 EMA के पास हो, तो **"सस्ता (Value Buying)"**।
   - जब RSI > 70 और प्राइस 200 EMA से बहुत ऊपर भाग चुका हो, तो **"महंगा (Overbought / Caution)"**।
   - 0-100 का विजुअल मीटर स्कोर।

3. **ऊपर जाएगा या नीचे (AI Direction Prediction Engine):**
   - **Trend Confluence:** EMA 20/50/200 क्रॉसओवर + SuperTrend + MACD मोमेंटम + वॉल्यूम।
   - **दिशा (Direction):** ऊपर (UP - BUY) या नीचे (DOWN - SELL)।
   - **संभावना (Probability %):** अल्गोरिद्म का एक्यूरेसी कॉन्फिडेंस (उदा. 78% UP)।
   - **ATR-बेस्ड लेवल्स:** एंट्री, स्टॉप-लॉस (SL), टारगेट 1 और टारगेट 2।

4. **लाइव मार्केट फीड (No Stale Data):**
   - हर 2.5 सेकंड में ऑटो-अपडेट होने वाला रियल-टाइम डेटा।

---

## 🚀 GitHub पर Live कैसे करें (GitHub Pages 1-Click Guide)

आप इस पूरी वेबसाइट को GitHub Pages पर बिल्कुल **मुफ़्त** में लाइव कर सकते हैं:

### तरीका (Steps):
1. **GitHub पर नया रिपॉजिटरी बनाएँ:**
   - [GitHub.com](https://github.com) पर जाएँ और **"New Repository"** पर क्लिक करें।
   - नाम रखें: `live-stock-predictor` और इसे **Public** रखें।

2. **फाइलें अपलोड करें:**
   - इस फोल्डर (`live-stock-predictor`) की तीनों फाइलें अपलोड करें:
     - `index.html`
     - `app.js`
     - `styles.css`
     - `README.md`
   - Commit changes पर क्लिक करें।

3. **GitHub Pages चालू करें:**
   - अपने GitHub Repo की **Settings** में जाएँ।
   - बाएँ मेन्यू में **Pages** पर क्लिक करें।
   - **Branch** में `main` चुनें और `/ (root)` सेलेक्ट करके **Save** पर क्लिक करें।

4. **आपकी वेबसाइट लाइव है!**
   - 1-2 मिनट में GitHub आपको एक लाइव लिंक दे देगा:  
     `https://<your-username>.github.io/live-stock-predictor/`
   - यह लिंक आप अपने मोबाइल, दोस्तों या सोशल मीडिया पर कहीं भी खोल सकते हैं!
