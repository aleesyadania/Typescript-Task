/**
 * A social media platform stores posts.
 * Tasks:
 * 1. Find post that containing "typescript"!
 * 2. Find post that containing "nestjs"!
 * 3. Find the post with highest number of likes!
 * 4. Calculate the total of likes!
 */

const posts = [
  {
    author: "Andi",
    content: "Learning TypeScript #typescript #programming",
    hashtags: ["typescript", "programming"],
    likes: 120,
  },
  {
    author: "Budi",
    content: "My first NestJS project #nestjs #typescript",
    hashtags: ["nestjs", "typescript"],
    likes: 250,
  },
  {
    author: "Citra",
    content: "Frontend development #nextjs #react",
    hashtags: ["nextjs", "react"],
    likes: 180,
  },
  {
    author: "Deni",
    content: "Backend with NestJS #nestjs #backend",
    hashtags: ["nestjs", "backend"],
    likes: 300,
  },
];

const typescript = posts.filter((post) => post.hashtags.includes("typescript"));

console.log("=== Task 1: Posts containing 'typescript' ===");
console.log(typescript);

const nestjs = posts.filter((post) => post.hashtags.includes("nestjs"));

console.log("\n=== Task 2: Posts containing 'nestjs' ===");
console.log(nestjs);

const highestLiked = posts.reduce((maxPost, currentPost) => {
    return currentPost.likes > maxPost.likes ? currentPost : maxPost;
});

console.log("\n=== Task 3: Post with the highest likes ===");
console.log(highestLiked);

const totalLikes = posts.reduce((total, post) => total + post.likes, 0);

console.log("\n=== Task 4: Total Likes ===");
console.log(`Total Likes: ${totalLikes}`);