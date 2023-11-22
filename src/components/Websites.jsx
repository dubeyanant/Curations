import Card from "./tiles/Card";

const Websites = () => {
  return (
    <>
      <p className="text-lg">
        These are some coool websites that I like. This presents several fun and
        useful sites which you might want to check out.
      </p>
      <div className="mt-12 grid grid-cols-3">
        <Card
          url="https://learnuiux.in/"
          name="Learn UI/UX"
          urlImg="https://images.unsplash.com/photo-1690228254548-31ef53e40cd1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          category="Website"
        />
        <Card
          url="https://lucide.dev/icons/"
          name="Lucide Icons"
          urlImg="https://images.unsplash.com/photo-1506729623306-b5a934d88b53?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          category="Website"
        />
        <Card
          url="https://tailwindcss.com/"
          name="TailwindCSS"
          urlImg="https://images.unsplash.com/photo-1529661197280-63dc545366c8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          category="Website"
        />
      </div>
    </>
  );
};

export default Websites;
