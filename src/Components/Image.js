import ben from "./images/Benoudi.jpg"
function Image({key}) {
  

    return(<div> 
        <figure className="md:flex bg-slate-900 rounded-xl p-8 md:p-0 text-size-adjust:auto">
        <img  id="image" className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={ben} alt="" width="384" height="512" />
      
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-medium  text-size-adjust:auto">
          Robust backend: Spring Boot is ideal for developing enterprise-level applications as it offers a powerful and scalable backend for building APIs and microservices.
         </p> <p className="text-lg font-medium  text-size-adjust:auto">React JS is the most widely used front-end framework for web applications. It is an open-source JavaScript library for creating user interfaces.
          Reusable UI components are used as the basis for Single Page Applications.</p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">
            Nasser Benoudi
          </div>
          <div className="text-slate-700 dark:text-slate-50">
          Spring-boot and React Developer, Salzgitter Germany.
          
          </div>
        </figcaption>
      </div>
    </figure></div>)
}

export default Image;