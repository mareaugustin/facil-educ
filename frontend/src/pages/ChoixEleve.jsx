import { ArrowLeft, ArrowRight, Book, Check, CheckCircle, GraduationCap, School, User } from "lucide-react";
import React, {useState, useEffect} from "react";
import { motion } from "framer-motion";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import facileeduc from '../assets/images/facileduc.png'
import { useChoixContext } from "../contexts/useChoixContext";


export default function ChoixEleve(){

    // const [choix, setChoix] = useState(null)
    const [choixEcole, setChoixEcole] = useState(null)
    const [primaire, setPrimaire] = useState(false)
    const [lycee, setLycee] = useState(false)
    const [college, setCollege] = useState(false)

    const {choix, setChoix, ecoleL, setEcoleL, ecoleP, setEcoleP, ecoleC, setEcoleC} = useChoixContext()
console.log('ecole', ecoleP)
console.log('ecoleL', ecoleL)
console.log('ecoleC', ecoleC)
    const navigate = useNavigate()
    const [params, setParams] = useSearchParams()
    const statut = params.get('choix')
    // console.log('statut', statut)

    useEffect(()=>{
        if(!choix){
            navigate('/', {replace : true})
        }
    }, [])

    function choisirEcole( ecoleP, ecoleC, ecoleL){
        if(!statut || !choix) return

        if(ecoleP === 'primaire'){
            setEcoleP('primaire')
            navigate(`/primaire?choix=${statut}&ecole=${ecoleP}`)
            return
        }
        if(ecoleL === 'lycee'){
            setEcoleL('lycee')
            navigate(`/lycee?choix=${statut}&ecole=${ecoleL}`)
            return
        } 
        if(ecoleC === 'college'){
            setEcoleC('college')
            navigate(`/college?choix=${statut}&ecole=${ecoleC}`)
            return
        }
    }
    


    return(
        <div className="flex flex-col gap-15 px-150 items-center justify-center h-screen bg-[#21261F]/90">
            <div className="absolute bottom-0 -left-40  z-10 opacity-30 w-250 h-screen ">
                <img src={facileeduc} alt="illustration-education" className="object-cover w-full h-full"/>
            </div>
            <div className="flex flex-col text-center z-20 gap-2">
                <h1 className="font-bold text-white text-4xl">Bienvenue sur <span className="uppercase">Facil'Educ</span></h1>
                <p className="text-gray-300">Sélectionnez votre niveau académique actuel <br />pour voir les cours pertinents adaptés à vos besoins.</p>
            </div>

            <div className="grid grid-cols-3 items-center z-20 gap-8">
                <motion.button 
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.95}}
                    onClick={()=>{setPrimaire(!primaire), setCollege(false),
                        setLycee(false); 
                        {!primaire ? setEcoleP('primaire') : setEcoleP(null),setEcoleL(null),setEcoleC(null)}}}
                    className={`flex relative flex-col gap-2 items-center  ${primaire ? 'shadow-[0_0_20px] border-green-500 shadow-green-500' : 'shadow-lg border border-green-500/20'} hover:shadow hover:shadow-green-500 hover:shadow-[0_0_20px] px-4 py-8 rounded-4xl bg-green-500/5`}
                >
                    
                    <Book className="text-green-500 rounded-full p-2 bg-green-500/20 h-10 w-10" />
                    
                    <h3 className="text-white font-bold">Primaire</h3>
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
                        {!college ? setEcoleC('college') : setEcoleC(null),setEcoleL(null),setEcoleP(null)}}}
                    className={`flex relative flex-col gap-2 items-center  ${college ? 'shadow-[0_0_20px] border-green-500 shadow-green-500' : 'shadow-lg border border-green-500/20'} hover:shadow hover:shadow-green-500 hover:shadow-[0_0_20px] px-4 py-8 rounded-4xl bg-green-500/5`}
                >
                    
                    <GraduationCap className="text-green-500 rounded-full p-2 bg-green-500/20 h-10 w-10" />
                    
                    <h3 className="text-white font-bold">Collège</h3>
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
                        {!lycee ? setEcoleL('lycee') : setEcoleL(null),setEcoleC(null),setEcoleP(null)}}}
                    className={`flex relative flex-col gap-2 items-center  ${lycee ? 'shadow-[0_0_20px] border-green-500 shadow-green-500' : 'shadow-lg border border-green-500/20'} hover:shadow hover:shadow-green-500 hover:shadow-[0_0_20px] px-4 py-8 rounded-4xl bg-green-500/5`}
                >
                    
                    <School className="text-green-500 rounded-full p-2 bg-green-500/20 h-10 w-10" />
                    
                    <h3 className="text-white font-bold">Lycée</h3>
                    <p className="text-sm text-gray-300">Concepts clés</p>
                    
                     {lycee && (
                        <div className="absolute shadow bg-green-500 rounded-full p-1 top-3 right-3">
                            <Check className=" h-5 w-5" />
                        </div>
                     )}
                    
                </motion.button>

                
            </div>

            <div className="w-full justify-between z-20 flex items-center">
                <motion.button 
                    whileTap={{scale: 0.95}}
                    onClick={()=>navigate(-1)}
                    className=" flex items-center rounded-full shadow transition-colors duration-200 border-green-500 border hover:bg-transparent text-white p-2 font-bold justify-center bg-green-500  gap-2 "
                >
                    <ArrowLeft className="h-5 w-5" />
                
                </motion.button>
                <motion.button 
                    whileTap={{scale: 0.95}}
                    onClick={()=>{choisirEcole(ecoleP, ecoleC, ecoleL)}}
                    disabled={(ecoleL===null) && (ecoleP === null) && (ecoleC === null)}
                    className={`flex items-center shadow transition-colors duration-200 ${ (ecoleP === null) &&  (ecoleC === null) &&  (ecoleL === null) ? 'bg-green-300 text-black/50 border-green-300' : 'border-green-500 hover:bg-transparent text-white bg-green-500 '}  border  py-1 px-4 rounded-lg font-bold justify-center  gap-2`}
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