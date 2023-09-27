import "@/app/3d/style.css";

export default function page() {
  return (
    <main className="w-screen h-screen [perspective:1000px] [transform-style:preserve-3d]">
      <div className="main w-[80vw] h-[80vh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 [perspective:1000px] bg-yellow-600">
        <div className="back side bg-green-400">back</div>
        <div className="left side bg-red-300">left</div>
        <div className="right side bg-blue-400">right</div>
        <div className="front side bg-yellow-400">front</div>
      </div>
    </main>
  );
}
