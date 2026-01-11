import { ArrowLeft, ArrowRight, Check, CheckCircle, GraduationCap, User } from "lucide-react";
import React, {useState} from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function UserStatut(){

    const [choix, setChoix] = useState(null)
    const [eleve, setEleve] = useState(false)
    const [etudiant, setEtudiant] = useState(false)

    const navigate = useNavigate()

    function choisirStatut(choix){
        if(choix === 'eleve'){
            navigate(`/ecole?choix=${choix}`)
            return
        } else{
            navigate('/login')
        }
    }


    return(
        <div className="flex flex-col gap-15 px-150 items-center justify-center h-screen bg-[#21261F]/90">
            <div className="flex flex-col text-center gap-2">
                <h1 className="font-bold text-white text-4xl">Bienvenue sur <span className="uppercase">Facil'Educ</span></h1>
                <p className="text-gray-300">Choisissez votre profil pour commencer. Nous avons <br />personnalisé l'expérience pour vous aider à atteindre <br />vos objectifs.</p>
            </div>

            <div className="grid grid-cols-2 gap-8">
                <motion.button 
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.95}}
                    onClick={()=>{setEleve(!eleve), setEtudiant(false); {!eleve ? setChoix('eleve') : setChoix(null)}}}
                    className={`flex relative flex-col text-left gap-2   ${eleve ? 'shadow-[0_0_20px] border-green-500 shadow-green-500' : 'shadow-lg border border-green-500/20'} hover:shadow hover:shadow-green-500 hover:shadow-[0_0_20px] px-4 py-4 rounded-4xl bg-green-500/5`}
                >
                    
                    <User className="text-green-500 rounded-full p-2 bg-green-500/20 h-10 w-10" />
                    
                    <h3 className="text-white font-semibold">Elève</h3>
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
                    onClick={()=>{setEtudiant(!etudiant), setEleve(false); {!etudiant ? setChoix('etudiant') : setChoix(null)}}}
                    className={`flex relative flex-col text-left gap-2   ${etudiant ? 'shadow-[0_0_20px] border-green-500 shadow-green-500' : 'shadow-lg border border-green-500/20'} hover:shadow hover:shadow-green-500 hover:shadow-[0_0_20px] px-4 py-4 rounded-4xl bg-green-500/5`}
                >
                    
                    <GraduationCap className="text-green-500 rounded-full p-2 bg-green-500/20 h-10 w-10" />
                    
                    <h3 className="text-white font-semibold">Etudiant</h3>
                    <p className="text-sm text-gray-300">Apprenez à votre rythme et accédez aux cours partout, même hors ligne</p>
                    <div className="w-10 h-1 bg-green-500/20 mt-5"></div>
                    
                    {etudiant && (
                        <div className="absolute shadow bg-green-500 rounded-full p-1 top-3 right-3">
                            <Check className=" h-5 w-5" />
                        </div>
                     )}
                </motion.button>
            </div>

            <div className="w-full justify-between flex items-center">
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
        </div>
    )
}