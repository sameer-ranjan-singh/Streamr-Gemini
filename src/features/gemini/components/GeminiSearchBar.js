import { useSelector } from "react-redux"
import { lang } from "../../../utils/languageConstants"


const GeminiSearchBar =()=> {
    const storeLangKey = useSelector((store)=> store.appConfig?.lang)
    console.log(storeLangKey)
    return (
     <div className="pt-[10%] flex justify-center">
        <form className="w-1/2 rounded-xl bg-black bg-opacity-70 grid grid-cols-12">
            <input
              type="text"
              className="p-4 m-4 col-span-9 rounded-full outline-none"
              placeholder={lang[storeLangKey].geminiSearchPlaceholder}
            />
            
            <button
              className="col-span-3  m-4 py-2 px-4 text-2xl font-bold text-white bg-red-700  hover:bg-red-600">
                {lang[storeLangKey].search}
            </button>
        </form>
     </div>
    )
}

export default GeminiSearchBar