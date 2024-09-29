import ben from "./images/Benoudi.jpg"
function Image({key}) {
  

    return(<div> 
        <figure className="md:flex bg-slate-900 rounded-xl p-6 md:p-0 text-size-adjust:auto">
        <img  id="image" className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={ben} alt="" width="384" height="512" />
      
      <div className="pt-4 md:p-6 text-center md:text-left space-y-2">

        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">
            Nasser Benoudi 
          </div>
          <div className="text-slate-300 dark:text-slate-50">
            <p>Informatiker</p>
          Java-Spring-boot and Javascript-React . <p> Salzgitter Germany.</p>
         
         
          
          </div>
        </figcaption>
      </div>
    </figure></div>)
}

export default Image;