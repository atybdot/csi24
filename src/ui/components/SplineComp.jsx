import Spline from "@splinetool/react-spline";

export default function SplineComp() {
  return (
    <>
      <section className="h-[100svh] max-w-[100svw]">
        <Spline scene="https://prod.spline.design/uodjXa3wgHek1QPa/scene.splinecode" />
        <button
          type="button"
          className="absolute bottom-[180px] z-40 left-1/2 -translate-x-1/2"
        >
          Register
        </button>
        <div className="absolute right-0 w-full sm:w-1/4 md:1/6 sm:mr-4 bg-black-russian-950 bottom-0 h-14  z-[999]" />
      </section>
    </>
  );
}
