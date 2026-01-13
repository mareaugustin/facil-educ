import React, {useState, useEffect} from "react";
import hero from '../../assets/images/hero.jpg'
import { Book, Eye, EyeOff, Lock, Mail } from "lucide-react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import {motion} from 'framer-motion'
import { useChoixContext } from "../../contexts/useChoixContext";


export default function Login(){

    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPasswword] = useState(false)

    const [login, setLogin] = useState('sign')
    const [params, setParams] = useSearchParams()
    const statut = params.get('choix')
    const ecoleUrl = params.get('ecole')
    const classeUrl = params.get('classe')
    console.log("urlclasse ", classeUrl)

    const navigate = useNavigate()

    const {choix, setChoix, ecoleP, ecoleL, ecoleC, setEcole, primaire, setPrimaire, lycee, college} = useChoixContext()
    console.log('choix: ', choix)
    console.log('cecole: ', ecoleP)
    console.log('cecoleC: ', ecoleC)
    console.log('cecoleL: ', ecoleL)
    console.log('classe: ', primaire)
    console.log('lycee: ', lycee)
    console.log('college: ', college)
    useEffect(()=>{
        if(!choix || !ecoleP || !ecoleL || !ecoleC || !primaire){
            navigate('/', {replace : true})
        }
    }, [])
    


    useEffect(()=>{
        {login === 'login' ? setLogin('login') : setLogin('sign')}
    }, [login])


    return(
        <div className="h-screen grid grid-cols-2 items-center justify-center bg-[#21261F]/90">
            <div className=" relative h-screen">
                <div className="absolute inset-0 bg-gradient-to-tr from-black to-transparent"></div>
                <div className="absolute top-10 left-15 flex items-center gap-2">
                    <Book className="h-8 w-8 text-black p-2 rounded-full bg-green-500"/>
                    <p className="uppercase text-white font-bold">facil'educ</p>
                </div>
                <div className="absolute  bottom-15 left-15 flex flex-col gap-5">
                    <div>
                        <p className="text-white text-5xl font-bold">L'apprentissage</p>
                        <p className="text-green-500 typing text-5xl font-bold">rendu accessible partout.</p>
                    </div>
                    <p className="text-gray-300 text-xl">Rejoignez des milliers d'apprenants qui améliorent leurs compétences <br />même avec une connexion limitée. Accédez à vos cours à tout moment <br />et où que vous soyez</p>
                </div>
                <img src={hero} alt="ecolier" className="object-cover h-full w-full" />
            </div>
            <div className=" h-screen px-25 flex flex-col justify-center gap-8">
                <div className="rounded-full bg-green-500/5 flex items-center gap-2 w-70 justify-between ">
                    <motion.button
                        whileTap={{scale : 0.95}} 
                        onClick={()=>{setLogin('login')}}
                        className={`${login === 'login' ? 'bg-gray-500/60 text-white font-semibold' : 'text-gray-400 cursor-pointer'} transition-colors duration-200 py-2 rounded-full  w-full`}
                    >
                        Connexion
                    </motion.button>
                    <motion.button
                        whileTap={{scale : 0.95}}  
                        onClick={()=>{setLogin('sign')}}
                        className={`${login === 'sign' ? 'bg-gray-500/60 text-white font-semibold' : 'text-gray-400 cursor-pointer'} transition-colors duration-200 py-2 rounded-full  w-full`}
                    >
                        Inscription
                    </motion.button>
                </div>


                <div className="flex flex-col gap-2">
                    <h1 className="text-4xl text-white font-semibold">
                        {login === 'login' ? 'Se connecter à mon compte' : 'Creer un compte'}
                    </h1>
                    <p className="text-sm text-gray-300">Entrez vos informations pour commencer.</p>
                </div>

                <hr className="text-green-500/20 w-full"/>

                {login === 'login' ? (
                    <form className="flex flex-col gap-5">
                        <div className="flex flex-col gap-1">
                            <label className="text-[18px] text-white">Email</label>
                            <div className="relative">
                                <input type="email" 
                                    placeholder="monmail@example.com"
                                    value={email}
                                    onChange={(e)=>{setEmail(e.target.value)}}
                                    className=" w-full pl-10 border px-3 text-gray-100 bg-green-500/5 border-green-500/20 focus:outline-none py-2 rounded-full"
                                />
                                <div className="absolute inset-y-0 flex items-center ml-3 text-gray-400">
                                    <Mail className="h-5 w-5"/>
                                </div>
                            </div>
                            
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-[18px] text-white">Mot de passe</label>
                            <div className="relative">

                                <div className="absolute inset-y-0 flex items-center ml-3 text-gray-400">
                                    <Lock className="h-5 w-5"/>
                                </div>
                                <input type={`${showPassword ? 'text' : 'password'}`}
                                    value={password}
                                    onChange={(e)=>{setPassword(e.target.value)}}
                                    placeholder="Créer un mot de passe"
                                    className="block w-full pl-10 border px-3 text-gray-100 bg-green-500/5 border-green-500/20 focus:outline-none py-2 rounded-full"
                                />
                                <div className="absolute top-3 right-0 flex items-center mr-3 text-gray-400">
                                    <button
                                    type="button"
                                    className=""
                                        onClick={()=>{setShowPasswword(!showPassword)}}
                                    >
                                        {showPassword ? <Eye className="h-5 w-5 transition-alls duration-200"/> : <EyeOff className="h-5 w-5 transition-alls duration-200"/>}
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center text-sm my-1 justify-between">
                                <p className="text-gray-500">Minimum 8 caractères</p>
                                <Link to='/forget-password' className="text-green-500">Mot de passe oublié ?</Link>
                            </div>
                            
                        </div>
                        

                        <div className="">
                            <motion.button
                                whileTap={{scale : 0.95}} 
                                className="w-full py-2 hover:bg-green-600 transition-colors duration-200 bg-green-500 rounded-full font-semibold"
                            >
                                Se connecter
                            </motion.button>
                        </div>
                    </form>
                ):(
                    <form className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <div className="flex flex-col gap-1  w-full">
                                <label className="text-[18px] text-white">Nom</label>
                                <input type="text"
                                    value={nom} 
                                    placeholder="Jane"
                                    onChange={(e)=>{setNom(e.target.value)}}
                                    className="border px-3 text-gray-100 bg-green-500/5 border-green-500/20 focus:outline-none py-2 rounded-full"
                                />
                            </div>
                            <div className="flex flex-col gap-1  w-full">
                                <label className="text-[18px] text-white">Prénom</label>
                                <input type="text" 
                                    placeholder="Doe"
                                    value={prenom}
                                    onChange={(e)=>{setPrenom(e.target.value)}}
                                    className="border px-3 text-gray-100 bg-green-500/5 border-green-500/20 focus:outline-none py-2 rounded-full"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-[18px] text-white">Email</label>
                            <div className="relative">
                                <input type="email" 
                                    placeholder="monmail@example.com"
                                    value={email}
                                    onChange={(e)=>{setEmail(e.target.value)}}
                                    className=" w-full pl-10 border px-3 text-gray-100 bg-green-500/5 border-green-500/20 focus:outline-none py-2 rounded-full"
                                />
                                <div className="absolute inset-y-0 flex items-center ml-3 text-gray-400">
                                    <Mail className="h-5 w-5"/>
                                </div>
                            </div>
                            
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-[18px] text-white">Mot de passe</label>
                            <div className="relative">

                                <div className="absolute inset-y-0 flex items-center ml-3 text-gray-400">
                                    <Lock className="h-5 w-5"/>
                                </div>
                                <input type={`${showPassword ? 'text' : 'password'}`}
                                    value={password}
                                    onChange={(e)=>{setPassword(e.target.value)}}
                                    placeholder="Créer un mot de passe"
                                    className="block w-full pl-10 border px-3 text-gray-100 bg-green-500/5 border-green-500/20 focus:outline-none py-2 rounded-full"
                                />
                                <div className="absolute top-3 right-0 flex items-center mr-3 text-gray-400">
                                    <button
                                    type="button"
                                    className=""
                                        onClick={()=>{setShowPasswword(!showPassword)}}
                                    >
                                        {showPassword ? <Eye className="h-5 w-5 transition-alls duration-200"/> : <EyeOff className="h-5 w-5 transition-alls duration-200"/>}
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center text-sm my-1 justify-between">
                                <p className="text-gray-500">Minimum 8 caractères</p>
                                <Link to='/forget-password' className="text-green-500">Mot de passe oublié ?</Link>
                            </div>
                            
                        </div>
                        

                        <div className="">
                            <motion.button
                                whileTap={{scale : 0.95}} 
                                className="w-full py-2 hover:bg-green-600 transition-colors duration-200 bg-green-500 rounded-full font-semibold"
                            >
                                Creer un compte
                            </motion.button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    )
}