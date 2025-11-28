// import videoBg from '../../public/video/dandadanbackground.mp4';
import videoBg from '../../public/video/dandadanbackground.webm'; 
import thumbnail from '../../public/video/momo.jpg'; 

export default function Video(){

    return (
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          poster={thumbnail}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: 'scale(1.5)' }}
        >
          {/* <source src={videoBg} type="video/mp4" /> */}
          <source src={videoBg} type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
      </div>
    )
}