import { ArrowLeft, ArrowRight, Book, Check, CheckCircle, GraduationCap, User } from "lucide-react";
import React, {useState} from "react";
import { motion } from "framer-motion";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Primaire(){

    // const [choix, setChoix] = useState(null)
    const [choixClasse, setChoixClasse] = useState(null)
    const [cp, setCp] = useState(false)
    const [ce, setCe] = useState(false)
    const [cm, setCm] = useState(false)

    const navigate = useNavigate()
    const [params, setParams] = useSearchParams()
    const statut = params.get('choix')
    const ecole = params.get('ecole')
    // console.log('statut', statut)

    function choisirClasse(choixClasse){
        if(!statut) return
        if(!ecole) return

        if(choixClasse){
            navigate(`/login?choix=${statut}&ecole=${ecole}&classe=${choixClasse}`)
            return
        }
    }


    return(
        <div className="flex flex-col gap-15 px-150 items-center justify-center h-screen bg-[#21261F]/90">
            <div className="flex flex-col text-center gap-2">
                <h1 className="font-bold text-white text-4xl">Bienvenue sur <span className="uppercase">Facil'Educ</span></h1>
                <p className="text-gray-300">Choisissez votre profil pour commencer. Nous avons <br />personnalisé l'expérience pour vous aider à atteindre <br />vos objectifs.</p>
            </div>

            <div className="grid grid-cols-3 items-center gap-8">
                <motion.button 
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.95}}
                    onClick={()=>{setCp(!cp), setCm(false),
                        setCe(false); 
                        {!cp ? setChoixClasse('cp') : setChoixClasse(null)}}}
                    className={`relative  ${cp ? 'shadow-[0_0_20px] border-green-500 shadow-green-500' : 'shadow-lg border border-green-500/20'} hover:shadow hover:shadow-green-500 hover:shadow-[0_0_20px] p-8 rounded-xl bg-green-500/5`}
                >
                    
                    <div className="flex items-center justify-center rounded-full p-8 bg-green-500/20 ">
                        <p className="text-green-500 text-4xl uppercase ">cp</p>
                    </div>
                    
                    
                     {cp && (
                        <div className="absolute shadow bg-green-500 rounded-full p-1 top-3 right-3">
                            <Check className=" h-5 w-5" />
                        </div>
                     )}
                    
                </motion.button>

                <motion.button 
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.95}}
                    onClick={()=>{setCe(!ce), setCm(false),
                        setCp(false); 
                        {!ce ? setChoixClasse('ce') : setChoixClasse(null)}}}
                    className={`relative  ${ce ? 'shadow-[0_0_20px] border-green-500 shadow-green-500' : 'shadow-lg border border-green-500/20'} hover:shadow hover:shadow-green-500 hover:shadow-[0_0_20px] p-8 rounded-xl bg-green-500/5`}
                >
                    
                    <div className="flex items-center justify-center rounded-full p-8 bg-green-500/20 ">
                        <p className="text-green-500 text-4xl uppercase ">ce</p>
                    </div>
                    
                    
                     {ce && (
                        <div className="absolute shadow bg-green-500 rounded-full p-1 top-3 right-3">
                            <Check className=" h-5 w-5" />
                        </div>
                     )}
                    
                </motion.button>

                <motion.button 
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.95}}
                    onClick={()=>{setCm(!cm), setCp(false),
                        setCe(false); 
                        {!cm ? setChoixClasse('cm') : setChoixClasse(null)}}}
                    className={`relative  ${cm ? 'shadow-[0_0_20px] border-green-500 shadow-green-500' : 'shadow-lg border border-green-500/20'} hover:shadow hover:shadow-green-500 hover:shadow-[0_0_20px] p-8 rounded-xl bg-green-500/5`}
                >
                    
                    <div className="flex items-center justify-center rounded-full p-8 bg-green-500/20 ">
                        <p className="text-green-500 text-4xl uppercase ">cm</p>
                    </div>
                    
                    
                     {cm && (
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
                    onClick={()=>{choisirClasse(choixClasse)}}
                    disabled={choixClasse===null}
                    className={`flex items-center shadow transition-colors duration-200 ${choixClasse === null ? 'bg-green-300 text-black/50 border-green-300' : 'border-green-500 hover:bg-transparent text-white bg-green-500 '}  border  py-1 px-4 rounded-lg font-bold justify-center  gap-2`}
                >
                    Continuer
                    <ArrowRight className="h-5 w-5" />
                
                </motion.button>
            </div>
        </div>
    )
}