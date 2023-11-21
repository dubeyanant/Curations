const Home = () => {
  return (
    <div>
      <h1 className="text-7xl font-bold">Curations✨</h1>
      <p className="text-lg mt-6">
        Welcome to Curations! This website will be a curated space where I will{" "}
        <span className="font-bold">
          showcase my thoughts, ideas, and content
        </span>
        . My name is <span className="font-bold">Anant</span>, you can reach me
        out on{" "}
        <a
          href="https://twitter.com/_aanant"
          className="underline underline-offset-4"
        >
          Twitter
        </a>
        , or{" "}
        <a
          href="https://www.linkedin.com/in/anantdubey/"
          className="underline underline-offset-4"
        >
          LinkedIn
        </a>
        . This website is open-source hosted on{" "}
        <a
          href="https://github.com/dubeyanant/Curations"
          className="underline underline-offset-4"
        >
          GitHub
        </a>
        .
      </p>
      <h3 className="text-3xl font-bold mt-12">Goals</h3>
      <ul className="mt-4 flex flex-col gap-2">
        <li>Clean Look</li>
        <li>Minimalist Animations</li>
        <li>Dark Mode</li>
        <li>Read and Write Modes</li>
        <li>Content Modification & Tab Management</li>
      </ul>
    </div>
  );
};
export default Home;
