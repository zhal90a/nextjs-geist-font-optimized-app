```markdown
# Detailed Implementation Plan for Single Post Pages (Berita, dll)

## 1. Overview  
Enhance the Faculty of Law portal by adding dynamic, single post pages for news (“berita”) and related content. These pages will display a complete article view with full content, detailed images, publication date, and navigation links. The implementation uses Next.js dynamic routing in the app directory and shares sample data from a central data file.

## 2. Files to be Created/Modified  
- **New File:** `src/lib/newsData.ts`  
  - Contains an exported array of news items with complete fields (id, title, slug, date, summary, content, image, and category).  
  - **Error Handling:** Validate news data and use graceful image loading with onerror fallback.  

- **New File:** `src/app/news/[slug]/page.tsx`  
  - A dynamic route file that renders a detailed single post view based on the news slug from the URL.  
  - **Functionality:**  
    - Retrieve the route parameter (`slug`) and search the news array from `newsData.ts`.  
    - If a matching news item is found, render its details (title, image, date, full content).  
    - If not found, render a friendly “Not Found” message with a navigation link back to the news list.  
  - **UI/UX:**  
    - Use a clean, modern layout with responsive typography and proper spacing.  
    - Display a hero image with a placeholder URL such as:  
      `src="https://placehold.co/1200x800?text=Detailed+news+article+banner+for+[NEWS_TITLE]"`  
    - Ensure `alt` text is highly descriptive (e.g., "Detailed image for [news title] showing academic event in a modern setting").  
    - Include a “Back to News List” button to improve navigation.
  
- **Modification:** `src/components/NewsGrid.tsx`  
  - Update the “Baca Selengkapnya” button on each news card to wrap a Next.js `<Link>` component that navigates to `/news/[slug]`.  
  - Ensure each news item has a `slug` property matching the URL in `newsData.ts`.

## 3. Step-by-Step Outline of Changes

1. **Create `src/lib/newsData.ts`:**  
   - Define a TypeScript interface `NewsItem` with fields: `id`, `title`, `slug`, `summary`, `content`, `date`, `image`, and `category`.  
   - Populate an array with at least 6 sample news items.  
   - For each news item, generate a unique `slug` (e.g., "seminar-nasional-hukum-pidana-ham").  
   - Use detailed placeholder image URL:  
     ```typescript
     const sampleImage = "https://placehold.co/1200x800?text=Detailed+news+article+banner+for+[NEWS_TITLE]";
     ```  
   - Export the array for reuse.

2. **Create `src/app/news/[slug]/page.tsx`:**  
   - Import React and Next.js types along with the `newsData` array.  
   - Use Next.js App Router’s dynamic routing to extract the `slug` from route parameters.  
   - Use a TypeScript interface to ensure type safety when finding the news item.  
   - Render the single post view:
     - A header section with the news title and publication date.
     - The hero image using an `<img>` tag with:
       - `src` set to the news item’s image.
       - Highly detailed `alt` text.
       - An `onerror` handler that replaces the source with an SVG fallback.
     - A content section wrapped in `<article>` with the full text of the article.
     - A “Back to News List” link at the bottom.
   - Implement error handling: if no news item is found, render a simple error message and a link back to `/`.

3. **Update `src/components/NewsGrid.tsx`:**  
   - Modify the “Baca Selengkapnya” button:
     - Wrap the button with Next.js `<Link href={`/news/${news.slug}`}>` so that clicking it navigates to the single post page.
     - Verify that each card now passes the proper `slug` obtained from `newsData.ts`.

4. **Error Handling & Best Practices:**  
   - In all new image elements, include `onError` handlers that set a graceful fallback image (e.g., light SVG constructed with inline data URI).
   - Use proper semantic HTML elements (`<article>`, `<header>`, `<section>`) for accessibility.
   - Ensure all TypeScript types and interfaces are properly defined.
   - Verify responsive design using Tailwind CSS classes (e.g., container widths, spacing, and font sizes).

5. **UI/UX Considerations:**  
   - The single post page should have a modern, minimalist design with a focus on readability.
   - Use a deep red (#dc2626) accent for headings and links in the context of the white background.
   - Use detailed and descriptive placeholder images that reflect the article’s context.
   - Include navigation aids like a “Back to News List” link for better user flow.
   - Ensure consistent spacing, container widths, and responsive breakpoints to accommodate various device sizes.

## 4. Integration and Testing  
- Test navigation by clicking “Baca Selengkapnya” in the `NewsGrid` to ensure it routes to `/news/[slug]`.  
- Manually verify that if an invalid slug is entered, the page displays a friendly error message.  
- Use browser developer tools to inspect image loading and verify fallback in case of error.  
- Perform responsive design testing across common screen sizes.

## Summary  
- A new shared data file (`src/lib/newsData.ts`) will centralize sample news items with complete details and slugs.  
- A dynamic Next.js route (`src/app/news/[slug]/page.tsx`) is created to render full news articles with semantic, responsive UI.  
- The `NewsGrid.tsx` component is updated to link each news card to its corresponding single post page.  
- The design prioritizes modern typography, clear images with descriptive alt text, and responsive layout using Tailwind CSS.  
- Comprehensive error handling and accessibility best practices are integrated throughout the implementation.
