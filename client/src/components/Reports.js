import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { use } from 'react-redux';
import { getSpeech } from '../actions/speech';
import { useSelector } from 'react-redux';
import React, {useEffect, useState} from 'react';
import { getEvaluation } from '../actions/evaluation';
import { FormControlLabel } from '@mui/material';

const Reports = (props) => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    const currentDate = mm + '/' + dd + '/' + yyyy;
    
    const speech = useSelector((state)=>state.speech)
    const [items, setItems] = useState([])
    const [date, setDate] = useState(currentDate)

    const updateReports = async (data) => {
        const speeches = await (getSpeech({speechDate: data}))
        const evaluations = await (getEvaluation({speechDate: data}))
        let words = []
        let iChange = 0
        for(let i =0; i < speeches.length; i++){
            if(speeches[i].speechType === 'Table Topics Master' || speeches[i].speechType === 'Ah Counter' || speeches[i].speechType === 'Timer'){
                speeches.splice(i, 1)
                iChange++;
                i--
                continue
            }
            if(speeches[i].speechType === "Table Topics"){
                console.log('test')
            }
            speeches[i].number = i
            let topWords = 'None'
            let max = 0
            for(let j in speeches[i].fillerWords){
                if(speeches[i].fillerWords[j] > max){
                    max = speeches[i].fillerWords[j]
                }
            }
            for(let j in speeches[i].fillerWords){
                if(speeches[i].fillerWords[j] === max && max > 0){
                    if(topWords === 'None'){
                        console.log(j)
                        topWords = j
                    } else {
                        topWords += ', ' + j
                    }
                }
            }
            words.push(topWords)
        }
        for(let i =0; i < evaluations.length; i++){
            evaluations[i].number = speeches.length
            evaluations[i].speechType = 'Evaluator'
            console.log(evaluations[i].number)
            let topWords = 'None'
            let max = 0
            console.log(evaluations[i].fillerWords)
            for(let j in evaluations[i].fillerWords){
                if(evaluations[i].fillerWords[j] > max){
                    max = evaluations[i].fillerWords[j]
                }
            }
            for(let j in evaluations[i].fillerWords){
                if(evaluations[i].fillerWords[j] === max && max > 0){
                    if(topWords === 'None'){
                        topWords = j
                    } else {
                        topWords += ', ' + j
                    }
                }
            }
            words.push(topWords)
            speeches.push(evaluations[i])
        }
        console.log(words)
        console.log(speeches)
        const listItems = speeches.map(({speechType, speechGiver, speechEvaluator, time, number}) =>
            <tr>
                <td scope="row">{speechType}</td>
                <td>{speechType === 'Evaluator' ? speechEvaluator : speechGiver}</td>
                <td>{time}</td>
                <td>{words[number]}</td>
            </tr>
        );
        console.log(listItems)
        setItems(listItems)

        for(let i =0; i < speeches.length; i++){
             const { speechType, speechGiver, time, fillerWords } = speeches[i]
             //console.log(speechType)
             //console.log(speechGiver)
             //console.log(time)
             //console.log(fillerWords)
        }
    }
    useEffect(async ()=>{
        updateReports(today)
    }, [])
    useEffect(async ()=>{
        updateReports(date)
    }, date)

    const selected = () => {
        let newDate = document.getElementById("datePicker").value;
        if(!newDate){
            console.log('hello')
            return
        }
        const x = newDate.split('-')
        console.log(x)
        setDate(x[1] + '/' + x[2] + '/'+x[0])
        updateReports(x[1] + '/' + x[2] + '/'+x[0])
    }
            

    return (
        <div className='container'>
            <h4 style={{marginTop: '3%'}}>Report for {date}</h4>

            <div className ='row text-center' style={{marginTop:'3.75%', paddingLeft: '25%', paddingRight:'25%'}} >
                <label>Select Another Date's Report:</label><input id = 'datePicker' onSelect={selected}  type='date' text='Select'></input>
            </div>

            <table style={{marginTop: '3%'}} className="table table-dark table-bordered">
                <thead className = 'thead-dark'>
                  <tr>
                    <th scope="col">Speech Type</th>
                    <th scope="col">Name</th>
                    <th scope="col">Time</th>
                    <th scope='col'>Top Filler Words</th>
                  </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>
            </table>
        
        </div>
    )

} 

export default Reports