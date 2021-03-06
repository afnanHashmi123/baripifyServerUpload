import {BsFillPauseFill, BsFillPlayFill} from "react-icons/bs"
import {playingTrackState, playState} from "../atoms/playerAtom"
import { useRecoilState } from "recoil";

function Poster({track, chooseTrack}) {
const [play, setPlay]=useRecoilState(playState);
const [playingTrack, setPlayingTrack]=useRecoilState(playingTrackState);


const handlePlay = () => {
    chooseTrack(track);

    if (track.uri === playingTrack.uri) {
      setPlay(!play);
    }
  };

    return (
        //this will show the album covers
        //if you click on the play button, it will start showing a pause sign 
        //if you click on the pause button, it will start showing a play sign 
        //the h4 h6 div will display the artist name and the track name on the posters 
        //truncate helps add the ... in the end of the name of something that is too long to fit into the box 
        //or is taking too much space 
        //long song names will have ... at the end of them 
        
        <div className="w-[260px] h-[360px] rounded-[50px] overflow-hidden relative text-white/80 cursor-pointer hover:scale-105 hover:text-white/100 transition duration-200 ease-out group mx-auto" onClick={handlePlay}>
            <img src={track.albumUrl} alt="" className="h-full w-full absolute inset-0 object-cover rounded-[50px] opacity-80 group-hover:opacity-100"/>
            <div className="absolute bottom-10 inset-x-0 ml-4 flex items-center space-x-3.5">
                <div className="h-10 w-10 bg-[#15883e] rounded-full flex items-center justify-center group-hover:bg-[#1db954] flex-shrink-0">
                
                    {track.uri===playingTrack.uri && play ? (
                        <BsFillPauseFill className="text-x1"/>
                    ) : (
                        <BsFillPlayFill className="text-x1 ml-[1px]"/>
                    )}
                    
            
                    
                </div>
                
                <div className="text-[15px]">
                    <h4 className="font-extrabold truncate w-44">{track.title}</h4>
                    <h6>{track.artist}</h6>
                </div>

            </div>
        </div>
    )
}

export default Poster
