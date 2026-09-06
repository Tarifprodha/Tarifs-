# GitHub Pages Deployment Guide

## কেন আপনার স্ক্রিন সাদা (Blank White Screen) হয়েছিল?

১. **Base Path সমস্যা (প্রধান কারণ)**:
   - আপনার রিপোজিটরি লিংক ছিল: `https://tarifprodha.github.io/Tarifs-/`
   - কিন্তু Vite ডিফল্টভাবে সব CSS ও JavaScript ফাইল লোড করার চেষ্টা করছিল রুট ডোমেন থেকে: `https://tarifprodha.github.io/assets/...` (যা 404 Not Found ইরোর দিচ্ছিল)।
   - **সমাধান**: `vite.config.ts`-এ `base: './'` যুক্ত করা হয়েছে, যার ফলে এখন সমস্ত এসেট রিলেটিভ পাথে সঠিকভাবে লোড হবে।

২. **সরাসরি Source Code / TSX ফাইল ব্রাউজারে না চলা**:
   - যদি আপনি `npm run build` না দিয়ে সরাসরি পুরো প্রোজেক্ট বা `/src/main.tsx` পুশ করে GitHub Pages অন করেন, তবে ব্রাউজার সরাসরি `.tsx` বা React কোড পড়তে পারে না।
   - **সমাধান**: কোড বিল্ড করে `dist/` ফোল্ডার ডেপ্লয় করতে হয়, অথবা সবচেয়ে সহজ উপায় নিচে দেওয়া **GitHub Actions** ব্যবহার করা।

---

## ১ মিনিটে সমাধান (GitHub Settings থেকে):

আমরা প্রজেক্টে অটোমেটিক **GitHub Actions Workflow** (`.github/workflows/deploy.yml`) যুক্ত করে দিয়েছি।

এখন আপনি শুধু নিচের ৩টি কাজ করুন:

1. **কোডটি গিটহাবে পুশ করুন** (Push or Upload to your repository `Tarifs-`).
2. GitHub-এ আপনার রিপোজিটরির **Settings** ট্যাবে যান।
3. বাম পাশের মেন্যু থেকে **Pages**-এ ক্লিক করুন।
4. **Build and deployment** এর নিচে **Source** অপশনে:
   - **"Deploy from a branch"** এর বদলে **"GitHub Actions"** সিলেক্ট করুন।
5. ব্যাস! GitHub নিজে নিজেই ১ মিনিটের মধ্যে আপনার প্রজেক্ট বিল্ড করে `https://tarifprodha.github.io/Tarifs-/` ঠিকানায় লাইভ করে দিবে। কোনো সাদা স্ক্রিন আসবে না!

---

## বিকল্প পদ্ধতি (Manual dist Upload):

যদি আপনি ফাইল ড্র্যাগ অ্যান্ড ড্রপ করে আপলোড করতে চান:
1. আপনার কম্পিউটারে টার্মিনালে চালান: `npm run build`
2. বিল্ড শেষ হলে প্রজেক্টের ভেতর `dist` নামের একটি ফোল্ডার তৈরি হবে।
3. সেই `dist` ফোল্ডারের ভেতরের সব ফাইল (`index.html`, `assets/`, `404.html` ইত্যাদি) আপনার GitHub রিপোজিটরিতে আপলোড করুন।
