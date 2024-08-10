function IphoneBanner() {
  return (
    <div className="flex justify-center">
        <div className="relative">
          <img src="bannerStore.png" className="w-[800px]" alt="Description" />
          <div className="absolute bottom-0 left-0 pb-4 pl-16 font-inter text-xs text-white">
            <button>
              <span className="border-b-2 pb-1">Shop Now</span> &rarr;
            </button>
          </div>
        </div>
      </div>
  )
}

export default IphoneBanner
