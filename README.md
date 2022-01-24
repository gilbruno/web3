# web3

React project to communicate with the blockchain

# Steps to create the project

1) Install Npm and install React with the scaffholder _Vite_ in the _client_ directory

```
npm init vite@latest
```

(Project name : ./, package name : whatuwant, framework: react; variant: react)

2) Install Nm dependencies with the command 

```
npm install
```

3) Run the local server 

```
npm run dev
```

4) Install _Tailwind_ (C.f. https://tailwindcss.com/docs/guides/create-react-app)

```
npm install -D tailwindcss postcss autoprefixer
```

Then : 

```
content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
```

5) Edit the _tailwind.config.js_ file like this (in the tailwindcss doc above) :

```js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
6) Add Tailwind directive to your _index.css_ file (Empty it if needed) : 

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```