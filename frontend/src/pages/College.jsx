import { ArrowLeft, ArrowRight, Book, Check, CheckCircle, GraduationCap, User } from "lucide-react";
import React, {useState, useEffect} from "react";
import { motion } from "framer-motion";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import facileeduc from '../assets/images/facileduc.png'
import { useChoixContext } from "../contexts/useChoixContext";

export default function College(){

    // const [choix, setChoix] = useState(null)
    const [choixClasse, setChoixClasse] = useState(null)
    const [sixieme, setSixieme] = useState(false)
    const [cinquieme, setCinquieme] = useState(false)
    const [quatrieme, setQuatrieme] = useState(false)
    const [troisieme, setTroisieme] = useState(false)

    const navigate = useNavigate()
    const [params, setParams] = useSearchParams()
    const statut = params.get('choix')
    const ecoleUrl = params.get('ecole')
    // console.log('statut', statut)

     const {choix, setChoix, ecoleC, setEcole, college, setCollege} = useChoixContext()
    
        useEffect(()=>{
            if(!choix || !ecoleC){
                navigate('/', {replace : true})
            }
        }, [])


    function choisirClasse(college){
        if(!statut) return
        if(!ecoleUrl) return

        if(choixClasse){
            setCollege(choixClasse)
            navigate(`/login?choix=${statut}&ecole=${ecoleC}&classe=${college}`)
            return
        }
    }


    return(
        <div className="flex flex-col gap-15 px-130 items-center justify-center h-screen bg-[#21261F]/90">
            
            <div className="absolute bottom-0 -left-40  z-10 opacity-30 w-250 h-screen ">
                <img src={facileeduc} alt="illustration-education" className="object-cover w-full h-full"/>
            </div>
            <div className="flex flex-col z-20 text-center gap-2">
                <h1 className="font-bold text-white text-4xl">Bienvenue sur <span className="uppercase">Facil'Educ</span></h1>
                <p className="text-gray-300">Sélectionnez votre niveau académique actuel <br />pour voir les cours pertinents adaptés à vos besoins.</p>
            </div>

            <div className="grid grid-cols-4 z-20  items-center gap-8">
                <motion.button 
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.95}}
                    onClick={()=>{setSixieme(!sixieme), setCinquieme(false),
                        setQuatrieme(false), setTroisieme(false); 
                        {!sixieme ? setChoixClasse('sixieme') : setChoixClasse(null)}}}
                    className={`relative  ${sixieme ? 'shadow-[0_0_20px] border-green-500 shadow-green-500' : 'shadow-lg border border-green-500/20'} hover:shadow hover:shadow-green-500 hover:shadow-[0_0_20px] p-8 rounded-xl bg-green-500/5`}
                >
                    
                    <div className="flex items-center justify-center rounded-full p-8 bg-green-500/20 ">
                        <p className="text-green-500 text-4xl font-bold uppercase ">6<sup className="text-2xl">ème</sup></p>
                    </div>
                    
                    
                     {sixieme && (
                        <div className="absolute shadow bg-green-500 rounded-full p-1 top-3 right-3">
                            <Check className=" h-5 w-5" />
                        </div>
                     )}
                    
                </motion.button>

                <motion.button 
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.95}}
                    onClick={()=>{setCinquieme(!cinquieme), setQuatrieme(false),
                        setSixieme(false), setTroisieme(false); 
                        {!cinquieme ? setChoixClasse('cinquieme') : setChoixClasse(null)}}}
                    className={`relative  ${cinquieme ? 'shadow-[0_0_20px] border-green-500 shadow-green-500' : 'shadow-lg border border-green-500/20'} hover:shadow hover:shadow-green-500 hover:shadow-[0_0_20px] p-8 rounded-xl bg-green-500/5`}
                >
                    
                    <div className="flex items-center justify-center rounded-full p-8 bg-green-500/20 ">
                        <p className="text-green-500 text-4xl font-bold uppercase ">5<sup className="text-2xl">ème</sup></p>
                    </div>
                    
                    
                     {cinquieme && (
                        <div className="absolute shadow bg-green-500 rounded-full p-1 top-3 right-3">
                            <Check className=" h-5 w-5" />
                        </div>
                     )}
                    
                </motion.button>

                <motion.button 
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.95}}
                    onClick={()=>{setQuatrieme(!quatrieme), setSixieme(false),
                        setCinquieme(false), setTroisieme(false); 
                        {!quatrieme ? setChoixClasse('quatrieme') : setChoixClasse(null)}}}
                    className={`relative  ${quatrieme ? 'shadow-[0_0_20px] border-green-500 shadow-green-500' : 'shadow-lg border border-green-500/20'} hover:shadow hover:shadow-green-500 hover:shadow-[0_0_20px] p-8 rounded-xl bg-green-500/5`}
                >
                    
                    <div className="flex items-center justify-center rounded-full p-8 bg-green-500/20 ">
                        <p className="text-green-500 text-4xl font-bold uppercase ">4<sup className="text-2xl">ème</sup></p>
                    </div>
                    
                    
                     {quatrieme && (
                        <div className="absolute shadow bg-green-500 rounded-full p-1 top-3 right-3">
                            <Check className=" h-5 w-5" />
                        </div>
                     )}
                    
                </motion.button>

                <motion.button 
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.95}}
                    onClick={()=>{setTroisieme(!troisieme), setSixieme(false),
                        setCinquieme(false), setQuatrieme(false); 
                        {!troisieme ? setChoixClasse('troisieme') : setChoixClasse(null)}}}
                    className={`relative  ${troisieme ? 'shadow-[0_0_20px] border-green-500 shadow-green-500' : 'shadow-lg border border-green-500/20'} hover:shadow hover:shadow-green-500 hover:shadow-[0_0_20px] p-8 rounded-xl bg-green-500/5`}
                >
                    
                    <div className="flex items-center justify-center rounded-full p-8 bg-green-500/20 ">
                        <p className="text-green-500 text-4xl  font-bold uppercase ">3<sup className="text-2xl">ème</sup></p>
                    </div>
                    
                    
                     {troisieme && (
                        <div className="absolute shadow bg-green-500 rounded-full p-1 top-3 right-3">
                            <Check className=" h-5 w-5" />
                        </div>
                     )}
                    
                </motion.button>

                

                
            </div>

            <div className="w-full justify-between z-20  flex items-center">
                <motion.button 
                    whileTap={{scale: 0.95}}
                    onClick={()=>navigate(-1)}
                    className=" flex items-center rounded-full shadow transition-colors duration-200 border-green-500 border hover:bg-transparent text-white p-2 font-bold justify-center bg-green-500  gap-2 "
                >
                    <ArrowLeft className="h-5 w-5" />
                
                </motion.button>
                <motion.button 
                    whileTap={{scale: 0.95}}
                    onClick={()=>{choisirClasse(college)}}
                    disabled={choixClasse===null}
                    className={`flex items-center shadow transition-colors duration-200 ${choixClasse === null ? 'bg-green-300 text-black/50 border-green-300' : 'border-green-500 hover:bg-transparent text-white bg-green-500 '}  border  py-1 px-4 rounded-lg font-bold justify-center  gap-2`}
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