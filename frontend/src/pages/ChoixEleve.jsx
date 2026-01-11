import { ArrowLeft, ArrowRight, Book, Check, CheckCircle, GraduationCap, School, User } from "lucide-react";
import React, {useState} from "react";
import { motion } from "framer-motion";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function ChoixEleve(){

    // const [choix, setChoix] = useState(null)
    const [choixEcole, setChoixEcole] = useState(null)
    const [primaire, setPrimaire] = useState(false)
    const [lycee, setLycee] = useState(false)
    const [college, setCollege] = useState(false)

    const navigate = useNavigate()
    const [params, setParams] = useSearchParams()
    const statut = params.get('choix')
    // console.log('statut', statut)

    function choisirEcole(choixEcole){
        if(!statut) return

        if(choixEcole === 'primaire'){
            navigate(`/primaire?choix=${statut}&ecole=${choixEcole}`)
            return
        } else if(choixEcole === 'lycee'){
            navigate(`/lycee?choix=${statut}&ecole=${choixEcole}`)
            return
        } else{
            navigate(`/college?choix=${statut}&ecole=${choixEcole}`)
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
                    onClick={()=>{setPrimaire(!primaire), setCollege(false),
                        setLycee(false); 
                        {!primaire ? setChoixEcole('primaire') : setChoixEcole(null)}}}
                    className={`flex relative flex-col gap-2 items-center  ${primaire ? 'shadow-[0_0_20px] border-green-500 shadow-green-500' : 'shadow-lg border border-green-500/20'} hover:shadow hover:shadow-green-500 hover:shadow-[0_0_20px] px-4 py-8 rounded-4xl bg-green-500/5`}
                >
                    
                    <Book className="text-green-500 rounded-full p-2 bg-green-500/20 h-10 w-10" />
                    
                    <h3 className="text-white font-semibold">Primaire</h3>
                    <p className="text-sm text-gray-300">Apprentissage basique</p>
                    
                     {primaire && (
                        <div className="absolute shadow bg-green-500 rounded-full p-1 top-3 right-3">
                            <Check className=" h-5 w-5" />
                        </div>
                     )}
                    
                </motion.button>

                

                <motion.button 
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.95}}
                    onClick={()=>{setCollege(!college), setPrimaire(false),
                        setLycee(false); 
                        {!college ? setChoixEcole('college') : setChoixEcole(null)}}}
                    className={`flex relative flex-col gap-2 items-center  ${college ? 'shadow-[0_0_20px] border-green-500 shadow-green-500' : 'shadow-lg border border-green-500/20'} hover:shadow hover:shadow-green-500 hover:shadow-[0_0_20px] px-4 py-8 rounded-4xl bg-green-500/5`}
                >
                    
                    <GraduationCap className="text-green-500 rounded-full p-2 bg-green-500/20 h-10 w-10" />
                    
                    <h3 className="text-white font-semibold">Collège</h3>
                    <p className="text-sm text-gray-300">Apprentissage avancées</p>
                    
                     {college && (
                        <div className="absolute shadow bg-green-500 rounded-full p-1 top-3 right-3">
                            <Check className=" h-5 w-5" />
                        </div>
                     )}
                    
                </motion.button>

                <motion.button 
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.95}}
                    onClick={()=>{setLycee(!lycee), setCollege(false),
                        setPrimaire(false); 
                        {!lycee ? setChoixEcole('lycee') : setChoixEcole(null)}}}
                    className={`flex relative flex-col gap-2 items-center  ${lycee ? 'shadow-[0_0_20px] border-green-500 shadow-green-500' : 'shadow-lg border border-green-500/20'} hover:shadow hover:shadow-green-500 hover:shadow-[0_0_20px] px-4 py-8 rounded-4xl bg-green-500/5`}
                >
                    
                    <School className="text-green-500 rounded-full p-2 bg-green-500/20 h-10 w-10" />
                    
                    <h3 className="text-white font-semibold">Lycée</h3>
                    <p className="text-sm text-gray-300">Concepts clés</p>
                    
                     {lycee && (
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
                    onClick={()=>{choisirEcole(choixEcole)}}
                    disabled={choixEcole===null}
                    className={`flex items-center shadow transition-colors duration-200 ${choixEcole === null ? 'bg-green-300 text-black/50 border-green-300' : 'border-green-500 hover:bg-transparent text-white bg-green-500 '}  border  py-1 px-4 rounded-lg font-bold justify-center  gap-2`}
                >
                    Continuer
                    <ArrowRight className="h-5 w-5" />
                
                </motion.button>
            </div>
        </div>
    )
}