import { ArrowLeft, ArrowRight, Book, Check, CheckCircle, GraduationCap, User } from "lucide-react";
import React, {useState, useEffect} from "react";
import { motion } from "framer-motion";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import facileeduc from '../assets/images/facileduc.png'
import { useChoixContext } from "../contexts/useChoixContext";

export default function Primaire(){

    // const [choix, setChoix] = useState(null)
    const [choixClasse, setChoixClasse] = useState(null)
    const [cp, setCp] = useState(false)
    const [ce, setCe] = useState(false)
    const [cm, setCm] = useState(false)

    const navigate = useNavigate()
    const [params, setParams] = useSearchParams()
    const statut = params.get('choix')
    const ecoleUrl = params.get('ecole')

    const {choix, setChoix, ecoleP, setEcole, primaire, setPrimaire} = useChoixContext()
console.log('classe', primaire)
    useEffect(()=>{
        if(!choix || !ecoleP){
            navigate('/', {replace : true})
        }
    }, [])

    function choisirClasse(primaire){
        if(!statut) return
        if(!ecoleUrl) return

        if(primaire === 'cp'){
            setPrimaire('cp')
            navigate(`/login?choix=${statut}&ecole=${ecoleP}&classe=${primaire}`)
            return
        }
        if(primaire === 'ce'){
            setPrimaire('ce')
            navigate(`/login?choix=${statut}&ecole=${ecoleP}&classe=${primaire}`)
            return
        }
        if(primaire === 'cm'){
            setPrimaire('cm')
            navigate(`/login?choix=${statut}&ecole=${ecoleP}&classe=${primaire}`)
            return
        }
    }


    return(
        <div className="flex flex-col gap-15 px-150 items-center justify-center h-screen bg-[#21261F]/90">
            <div className="absolute bottom-0 -left-40  z-10 opacity-30 w-250 h-screen ">
                <img src={facileeduc} alt="illustration-education" className="object-cover w-full h-full"/>
            </div>

            <div className="flex flex-col z-20 text-center gap-2">
                <h1 className="font-bold text-white text-4xl">Bienvenue sur <span className="uppercase">Facil'Educ</span></h1>
                <p className="text-gray-300">Sélectionnez votre niveau académique actuel <br />pour voir les cours pertinents adaptés à vos besoins.</p>
            </div>

            <div className="grid grid-cols-3 z-20 items-center gap-8">
                <motion.button 
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.95}}
                    onClick={()=>{setCp(!cp), setCm(false),
                        setCe(false); 
                        {!cp ? setPrimaire('cp') : setPrimaire(null)}}}
                    className={`relative  ${cp ? 'shadow-[0_0_20px] border-green-500 shadow-green-500' : 'shadow-lg border border-green-500/20'} hover:shadow hover:shadow-green-500 hover:shadow-[0_0_20px] p-8 rounded-xl bg-green-500/5`}
                >
                    
                    <div className="flex items-center justify-center rounded-full p-8 bg-green-500/20 ">
                        <p className="text-green-500 font-bold text-4xl uppercase ">cp</p>
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
                        {!ce ? setPrimaire('ce') : setPrimaire(null)}}}
                    className={`relative  ${ce ? 'shadow-[0_0_20px] border-green-500 shadow-green-500' : 'shadow-lg border border-green-500/20'} hover:shadow hover:shadow-green-500 hover:shadow-[0_0_20px] p-8 rounded-xl bg-green-500/5`}
                >
                    
                    <div className="flex items-center justify-center rounded-full p-8 bg-green-500/20 ">
                        <p className="text-green-500  font-bold text-4xl uppercase ">ce</p>
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
                        {!cm ? setPrimaire('cm') : setPrimaire(null)}}}
                    className={`relative  ${cm ? 'shadow-[0_0_20px] border-green-500 shadow-green-500' : 'shadow-lg border border-green-500/20'} hover:shadow hover:shadow-green-500 hover:shadow-[0_0_20px] p-8 rounded-xl bg-green-500/5`}
                >
                    
                    <div className="flex items-center justify-center rounded-full p-8 bg-green-500/20 ">
                        <p className="text-green-500  font-bold text-4xl uppercase ">cm</p>
                    </div>
                    
                    
                     {cm && (
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
                    onClick={()=>{choisirClasse(primaire)}}
                    disabled={primaire===null}
                    className={`flex items-center shadow transition-colors duration-200 ${primaire === null ? 'bg-green-300 text-black/50 border-green-300' : 'border-green-500 hover:bg-transparent text-white bg-green-500 '}  border  py-1 px-4 rounded-lg font-bold justify-center  gap-2`}
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