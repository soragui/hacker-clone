# Hacker News Clone

This project is a Hacker News clone built with Next.js 14 and Tailwind CSS. It provides a modern, responsive interface for browsing Hacker News stories, comments, and user submissions.

## Project Brief

This Hacker News clone aims to replicate the core functionality of the original Hacker News website while providing a more modern and responsive user interface. It uses the official Hacker News API to fetch real-time data and display it in a user-friendly manner.

## Features

- Browse top, new, ask, and show stories
- View individual story details and comments
- Infinite scrolling for loading more stories
- Responsive design for mobile and desktop

## Setup

To run this project locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/your-username/hacker-news-clone.git
   cd hacker-news-clone
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Project Structure

```
hacker-news-clone/
├── app/
│   ├── ask/
│   ├── comments/
│   ├── item/
│   ├── new/
│   ├── show/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   ├── Comment.tsx
│   ├── CommentsContent.tsx
│   ├── Header.tsx
│   ├── ItemContent.tsx
│   ├── StoryItem.tsx
│   └── StoryList.tsx
├── lib/
├── public/
├── .gitignore
├── next.config.js
├── package.json
├── README.md
├── tailwind.config.js
└── tsconfig.json
```

## How the Project Works

1. **Fetching Data**: The application uses the official Hacker News API to fetch story and comment data. This is primarily done in the `StoryList`, `ItemContent`, and `CommentsContent` components.

2. **Routing**: Next.js 14 App Router is used for handling different pages and routes. The `app` directory contains the main pages and layouts.

3. **Components**: Reusable components like `StoryItem` and `Comment` are used to display individual stories and comments.

4. **State Management**: React's built-in `useState` and `useEffect` hooks are used for local state management and side effects.

5. **Styling**: Tailwind CSS is used for styling, providing a responsive and customizable design.

6. **Performance**: The application implements infinite scrolling and lazy loading of comments to improve performance and user experience.

7. **Server-Side Rendering**: Next.js provides server-side rendering capabilities, improving initial load times and SEO.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).