import React, { useState } from 'react'

function Question4ParaGenerator() {
    const [wordCount,setWordCount] = useState()

    const wordList = ["happy", "sun", "dog", "green", "jump", "laugh", "sweet", "cloud", "play", "friend", "blue", "song", "warm", "smile", "walk", "flower", "joy", "soft", "kind", "simple"]
    const [paragraph,setParagraph]=useState("")
    let para = ""

    const generatePara = () =>{
        for (let i=0;i<wordCount;i++){
            para+=(wordList[Math.floor(Math.random()*wordList.length)]+" ")
        }
        console.log("paraghraph generated")
        para=para.trim()
        setParagraph(para)
        console.log(paragraph)
    }
  return (
    <div className='min-h-screen flex flex-col items-center justify-center h-1/2 w-1/2 mx-auto'>
        <h1 className='text-xl font-bold m-5'>Para Generator</h1>
        <div className='flex gap-4 items-center justify-center'>

        <input type="number" placeholder='Enter the number of words you want in your paragraph' value={wordCount} onChange={(e)=>setWordCount(e.target.value)} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
        <button onClick={()=>generatePara(wordCount)} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Generate Paragraph</button>
        </div>

        <p className='m-5'>{paragraph}</p>
    </div>
  )
}

export default Question4ParaGenerator