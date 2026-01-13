import { ArrowLeft, ArrowRight, Check, CheckCircle, GraduationCap, User } from "lucide-react";
import React, {useState} from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import facileeduc from '../assets/images/facileduc.png'
import { useChoixContext } from "../contexts/useChoixContext";

export default function UserStatut(){

    // const [choix, setChoix] = useState(null)
    const [eleve, setEleve] = useState(false)
    const [particulier, setParticulier] = useState(false)

    const {choix, setChoix} = useChoixContext()

    const navigate = useNavigate()

    function choisirStatut(choix){
        if(choix === 'eleve'){
            setChoix(choix)
            navigate(`/ecole?choix=${choix}`)
            return
        } else{
            setChoix('pariculier')
            navigate('/login')
        }
    }


    return(
        <div className="flex relative flex-col gap-15 px-150 items-center justify-center h-screen bg-[#21261F]/90">
            <div className="absolute bottom-0 -left-40  z-10 opacity-30 w-250 h-screen ">
                <img src={facileeduc} alt="illustration-education" className="object-cover w-full h-full"/>
            </div>
            <div className="flex flex-col z-20 text-center gap-2">
                <h1 className="font-bold text-white text-4xl">Bienvenue sur <span className="uppercase">Facil'Educ</span></h1>
                <p className="text-gray-300">Choisissez votre profil pour commencer. Nous avons <br />personnalisé l'expérience pour vous aider à atteindre <br />vos objectifs.</p>
            </div>

            <div className="grid grid-cols-2 gap-8 z-20">
                <motion.button 
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.95}}
                    onClick={()=>{setEleve(!eleve), setParticulier(false); {!eleve ? setChoix('eleve') : setChoix(null)}}}
                    className={`flex relative flex-col text-left gap-2   ${eleve ? 'shadow-[0_0_20px] border-green-500 shadow-green-500' : 'shadow-lg border border-green-500/20'} hover:shadow hover:shadow-green-500 hover:shadow-[0_0_20px] px-4 py-4 rounded-4xl bg-green-500/5`}
                >
                    
                    <User className="text-green-500 rounded-full p-2 bg-green-500/20 h-10 w-10" />
                    
                    <h3 className="text-white font-bold">Elève</h3>
                    <p className="text-sm text-gray-300">Apprenez à votre rythme et accédez aux cours partout, même hors ligne</p>
                    <div className="w-10 h-1 bg-green-500/20 mt-5"></div>
                     {eleve && (
                        <div className="absolute shadow bg-green-500 rounded-full p-1 top-3 right-3">
                            <Check className=" h-5 w-5" />
                        </div>
                     )}
                    
                </motion.button>

                <motion.button 
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.95}}
                    onClick={()=>{setParticulier(!particulier), setEleve(false); {!particulier ? setChoix('particulier') : setChoix(null)}}}
                    className={`flex relative flex-col text-left gap-2   ${particulier ? 'shadow-[0_0_20px] border-green-500 shadow-green-500' : 'shadow-lg border border-green-500/20'} hover:shadow hover:shadow-green-500 hover:shadow-[0_0_20px] px-4 py-4 rounded-4xl bg-green-500/5`}
                >
                    
                    <GraduationCap className="text-green-500 rounded-full p-2 bg-green-500/20 h-10 w-10" />
                    
                    <h3 className="text-white font-bold">Particulier</h3>
                    <p className="text-sm text-gray-300">Proposez votre service, votre expertise pour être approché.</p>
                    <div className="w-10 h-1 bg-green-500/20 mt-5"></div>
                    
                    {particulier && (
                        <div className="absolute shadow bg-green-500 rounded-full p-1 top-3 right-3">
                            <Check className=" h-5 w-5" />
                        </div>
                     )}
                </motion.button>
            </div>

            <div className="w-full justify-between flex items-center z-20">
                <motion.button 
                    whileTap={{scale: 0.95}}
                    onClick={()=>navigate(-1)}
                    className=" flex items-center rounded-full shadow transition-colors duration-200 border-green-500 border hover:bg-transparent text-white p-2 font-bold justify-center bg-green-500  gap-2 "
                >
                    <ArrowLeft className="h-5 w-5" />
                
                </motion.button>
                <motion.button 
                    whileTap={{scale: 0.95}}
                    onClick={()=>{choisirStatut(choix)}}
                    disabled={choix===null}
                    className={`flex items-center shadow transition-colors duration-200 ${choix === null ? 'bg-green-300 text-black/50 border-green-300' : 'border-green-500 hover:bg-transparent text-white bg-green-500 '}  border  py-1 px-4 rounded-lg font-bold justify-center  gap-2`}
                >
                    Continuer
                    <ArrowRight className="h-5 w-5" />
                
                </motion.button>
            </div>
            <hr className="text-green-500/50 w-full"/>
            <div className="flex items-center justify-center">
                <p className="text-white">Déjà un compte ? 
                    <Link to='/login' className="text-green-500 underline ml-2">Se connecter</Link>
                </p>
               
            </div>
        </div>
    )
}