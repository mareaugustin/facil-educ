import React from "react";
import {Book, CheckCircle, Sparkles, User, UserCheck, WifiOff} from 'lucide-react'
import hero from '../assets/images/hero.jpg'
import facileeduc from '../assets/images/facileduc.png'
import{ motion} from 'framer-motion'
import { useNavigate } from "react-router-dom";


export default function Accueil(){

    const navigate = useNavigate()

    function Login(){
        navigate('/user-statut')
    }

    return(
        <div className="bg-[#21261F]/90">
            <div className=" px-70">

                {/* Mon en tete */}
                <div className="flex items-center py-5 justify-between  z-50">
                    <div className="flex items-center gap-3">
                        <Book className="h-5 w-5 text-[#65D930] animate-bounce"/>
                        <span className="uppercase text-white font-semibold">Facil'Educ</span>
                    </div>

                    <div className="flex items-center justify-center gap-3">
                        <button 
                            onClick={Login}
                        className="flex items-center bg-gray-600 text-white font-semibold py-1 px-3 rounded-xl text-sm">Connexion</button>
                        <button 
                            onClick={Login}
                            className="flex items-center bg-[#65D930] font-semibold py-1 px-3 rounded-xl text-sm">Inscription</button>
                    </div>
                </div>
            
            </div>
            <hr className="text-gray-600 "/>


            <div className="flex relative h-screen px-70 items-center justify-center ">

                <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
                    <img src={hero} alt="Hero Background" className=" w-full  h-full object-cover"/>
                </div>
                <motion.div 
                    initial={{opacity:0, x:-30}}
                    animate={{opacity:1, x:0}}
                    transition={{duration:0.8}}
                className="flex flex-col gap-10">
                    <h1 className="text-5xl leading-18 font-bold text-white">L'Education pour <br /><span className="text-green-400">tout le monde</span>, <br />et partout.</h1>
                    <span className="text-2xl leading-10 text-gray-400"> Facilitez votre apprentissage et votre <br />suivi de cours à travers notre
                    espace FACIL'EDUC. <br />Construis pour formez, <br />et accroitre un réèl apprentissage dans<br /> le syteme scolaire.
                    </span>
                    <div className="flex items-center justify-center gap-2">
                        <button 
                            onClick={Login}
                            className="bg-[#65D930] py-3 px-8 rounded-full hover:border-gray-600 hover:bg-transparent border-2 border-[#65D930] transition-colors duration-200 hover:text-white cursor-pointer font-semibold">Commencer</button>
                        <button 
                            onClick={Login}
                            className="text-white py-3 px-8 border-2  hover:bg-[#65D930] hover:text-black transition-colors duration-200 hover:border-[#65D930] border-gray-600 rounded-full cursor-pointer font-semibold">Voir les cours</button>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <div className="flex items-center gap-1">
                            <CheckCircle className="h-4 w-4 text-[#65D930]" />
                            <span className="text-gray-400">Gratuit pour commencer</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <WifiOff className="h-4 w-4 text-[#65D930]" />
                            <span className="text-gray-400">Mode hors ligne</span>
                        </div>
                    </div>

                </motion.div>


                <motion.div 
                    initial={{opacity:0, x:30}}
                    animate={{opacity:1, x:0}}
                    transition={{duration:0.8}} 
                className=" flex items-center justify-center">
                    <img src={facileeduc} alt="Hero" className="h-auto rounded-[50px] w-280" />
                </motion.div>
            </div>

            <div className="py-25 flex flex-col gap-10">
            <div className="flex flex-col mb-10">
                <span className="text-[#39C200]  text-center mb-5 font-bold text-xl">Pourquoi choisir FACIL'EDUC ?</span>
                <span className=" text-white text-center font-bold text-4xl">Contruit pour surmonter les obstacles et responsabiliser <br />les apprenants</span>
            </div>
            <div className="grid grid-cols-3 px-70 gap-10">
                <motion.div
                
                        whileHover={{scale:1.05}}>
                     <motion.div
                        initial={{opacity: 0, x: -30}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 1.2}}
                        viewport={{once: true, amount: 0.3}}
                    
                    className="shadow-lg flex-col gap-5 hover:shadow-[#39C200] flex border py-8 px-10 border-gray-600 rounded-3xl bg-[#21261F]">
                        <div className="">
                            <WifiOff className="h-12 w-12 text-green-500 p-2 rounded-full bg-gray-600"/>
                        </div>
                        <span className="font-bold text-white">Toujours Accessible</span>
                        <p className="text-gray-500">Ne laissez pas la connectivité vous arrêter.

                            Téléchargez vos leçons une fois

                            et apprenez hors ligne à tout moment,

                            n’importe où, sur n’importe quel appareil.


                        </p>
                    </motion.div></motion.div>

                <motion.div
                
                        whileHover={{scale:1.05}}>
                <motion.div
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 1.2}}
                        viewport={{once: true, amount: 0.3}}
                    
                className="flex-col shadow-lg gap-5 hover:shadow-[#39C200] flex border py-8 px-10 border-gray-600 rounded-3xl bg-[#21261F]">
                        <div className="">
                            <User className="h-12 w-12 text-green-500 p-2 rounded-full bg-gray-600"/>
                        </div>
                        <span className="font-bold text-white">Une véritable compréhension</span>
                        <p className="text-gray-500">Nous décomposons des sujets complexes

                            en contenu simplifié conçu

                            spécialement pour la clarté, la rétention

                            et une compréhension approfondie.


                        </p>
                    </motion.div></motion.div>

                <motion.div
                
                        whileHover={{scale:1.05}}>
                <motion.div
                        initial={{opacity: 0, x: 30}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 1.2}}
                        viewport={{once: true, amount: 0.3}}
                    
                className="flex-col gap-5 shadow-lg hover:shadow-[#39C200] flex border py-8 px-10 border-gray-600 rounded-3xl bg-[#21261F]">
                        <div className="">
                            <UserCheck className="h-12 w-12 text-green-500 p-2 rounded-full bg-gray-600"/>
                        </div>
                        <span className="font-bold text-white">Autonomie totale</span>
                        <p className="text-gray-500">Prenez en main votre apprentissage
                            avec des outils à votre rythme qui vous aident
                            à suivre vos progrès et à gérer
                            votre propre parcours d'apprentissage.


                        </p>
                    </motion.div></motion.div>
            </div>
            </div>


            <div className=" py-25 px-70">
            <div className="flex-col flex items-center rounded-3xl py-15 bg-[#65D930]/5 gap-5">
                <span className="text-5xl text-white font-bold">Prêt pour l'apprentissage ?</span>
                <span className="text-gray-400">Joingne des milliers d'etudiants avec une bibliotèque d'education enrichissante sur notre plateforme pour vous.</span>
                <motion.button
                    whileHover={{scale:1.05}}
                    whileTap={{scale:0.95}}
                    onClick={Login}
                    className="font-bold flex items-center px-20 py-8 text-xl rounded-full bg-[#39C200] my-5 hover:border-gray-600 hover:bg-transparent border-2 border-[#39C200] transition-colors duration-200 hover:text-white cursor-pointer"
                ><Sparkles className="h-10 w-10 mr-2 animate-spin" />Commencez gratuitement
                    
                </motion.button>
                <span className="text-gray-500 text-xs my-5">Pas de carte de credit requis</span>
            </div>
            </div>

            <hr className="text-gray-600 h-5 mx-auto w-[70%]"/>

            <div className="px-70 ">
                <div className="flex items-center justify-between  ">
                    <div className="flex items-center gap-2 mb-10">
                        <Book className="h-5 w-5 text-green-500 animate-bounce"/>
                        <span className="text-white font-bold">FACIL'EDUC</span>
                    </div>

                    <div className="flex items-center gap-5 mb-10">
                        <button className="text-gray-400 text-sm">À propos</button>
                        <button className="text-gray-400 text-sm">Contact</button>
                    </div>

                    <div className="mb-10">
                        <span className="text-gray-500 text-sm">FACIL'EDUC, Tous droits réservés</span>
                    </div>
                </div>
            </div>
         </div>
    )
}