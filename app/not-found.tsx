import { ArrowLeft } from "@phosphor-icons/react/ssr";
import { Logo } from "./components/Logo";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-3xl flex-col justify-center gap-8 px-5 py-24 md:px-10">
      <Logo />
      <h1 className="text-[3rem] leading-[1.05] md:text-[5.5rem]">העמוד הזה לא נמצא</h1>
      <p className="max-w-[34ch] text-xl text-muted">הקישור שגוי או שהעמוד הוסר. אפשר לחזור לדף הבית ולהמשיך משם.</p>
      <div>
        <a href="./" className="btn btn-sun">
          לדף הבית
          <ArrowLeft size={20} weight="bold" aria-hidden />
        </a>
      </div>
    </main>
  );
}
