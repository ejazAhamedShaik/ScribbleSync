import NavBar from "./components/NavBar";
import RichTextEditor from "./components/RichTextEditor";

export default function Home() {
  return (
    <div className="grid grid-cols-12 min-h-screen">
      <NavBar />
      <div className="col-span-3 px-3 py-6 bg-grayLight">Hello</div>
      <div className="col-span-7 px-3 py-6 bg-grayLightX">
        <RichTextEditor />
      </div>
    </div>
  );
}
