import TemplatePointers from "./components/TemplatePointers"



function LandingIntro() {

  return (
    <div className="hero min-h-full rounded-l-[12rem] bg-base-100">
      <div className="z-0 flex items-center justify-center max-w-[80%] gap-[1rem] p-[1rem] py-[48rem]">
        <div className="max-w-[448rem]">

          <h1 className='text-[30rem] text-center font-bold '>
            {/* <img src="/bg/SocialNoFriends.png" className="w-12 inline-block mr-2" alt="dashwind-logo" /> */}
            DNA報告書<br/>半自動生成システム </h1>

          <div className="text-center mt-[48rem]"><img src="./bg/SocialNoFriends.png" alt="Dashwind Admin Template" className="w-[192rem] inline-block"></img></div>

          {/* Importing pointers component */}
          <TemplatePointers />

        </div>

      </div>
    </div>
  )

}

export default LandingIntro