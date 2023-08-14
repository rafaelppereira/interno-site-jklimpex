import { useRef } from "react";

export function useScroll() {
  const refAbout: any = useRef();
  const refServices: any = useRef();
  const refTerceirization: any = useRef();
  const refMissionAndVision: any = useRef();

  //refAbout.current.offsetTop
  function handleScroll(refOffsetTop: any) {
    console.log(refOffsetTop.refAbout.current.offsetTop);
    // window.scroll({
    //   top: refOffsetTop - 182,
    //   behavior: "smooth",
    // });
  }

  return {
    refAbout,
    refServices,
    handleScroll,
    refTerceirization,
    refMissionAndVision,
  };
}
