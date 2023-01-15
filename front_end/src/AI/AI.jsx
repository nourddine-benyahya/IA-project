import React, { useEffect, useState } from 'react'


export default function AI() {

    //configuration OpenAI 
    const { Configuration, OpenAIApi } = require("openai");
    //data for stock dat AI
    const [data,setdata]=useState()
    //key API
    const configuration = new Configuration({
        apiKey: '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',
    });

    const openai = new OpenAIApi(configuration);

    useEffect(()=>{
        openai.createCompletion({
            model: "text-davinci-003",
            prompt: "whats your name",
            temperature: 0.8,
            max_tokens: 200,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        }).then((response)=>{
            setdata(response.data.choices[0].text)
        })

    },[])

    try {


        return(
        data==""?
         (
            <div>loading...</div>
        ):
        (
            <div>{data}</div>
        )
        )


    } catch (error) {
        return (
            <div>error</div>
        )
        
    }
    
}
