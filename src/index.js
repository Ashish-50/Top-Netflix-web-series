import React from 'react';
import ReactDOM from 'react-dom';
import Heading from "./components/Heading"
import Card from "./components/Card"
import Sdata from "./Sdata"

//here for more simplicity we use map method
//the map() method creates a new array with results of calling a function fir every array element
// the map method call the provided function once for each element in an array in oder
// syntax 
// array.mao(function(currentValue,index,arr),this value)

//Argument = Description 
//currentValue = required, the vlaue of the current element
//index = the array index of the current value - optional
//arr optional = the array object the current element belongs to


function ncard(val){
    return (
        <Card imgsrc={val.imgsrc}
        title={val.title}
        link={val.link}
        des={val.des}
        />
    )
}

ReactDOM.render(
    <>
    <Heading /> 
    {Sdata.map(ncard)}
    

    </>,document.getElementById('root'));



//this is also a method to show data in the cards  this methods also used props
    //<Card  imgsrc="https://wallpapercave.com/wp/wp5145863.jpg"
    // link="https://www.netflix.com/in/title/80057281"
    // title="Stranger things"
    // des="A Netflix Original Series"
    // />

    // <Card  imgsrc="https://wallpapercave.com/wp/wp3577513.jpg"
    // link="https://www.netflix.com/in/title/70301870"
    // title="Vikings"
    // des="A Netflix Original Series"
    // />

    // <Card  imgsrc="https://wallpapercave.com/wp/wp9153803.jpg"
    // link="https://www.netflix.com/in/title/80104198"
    // title="Lost in Space"
    // des="A Netflix Original Series"
    // />
    
    // <Card  imgsrc="https://wallpapercave.com/wp/wp5752146.png"
    // link="https://www.netflix.com/in/title/80014749"
    // title="Ricky and Monty"
    // des="A Netflix Original Series"
    // />
    // <Card imgsrc="https://occ-0-5202-3647.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABehJl2k8IHqRQJ5yn_2eG9MDSK5C3A47FYbri4YS6_yyRSGvSQtEui30vT4q2lgtlb1pB0TD65Z2XJeZh2DAoPZtUzmGOuG4rN_59UVgj77b21lA.jpg?r=97a"
    // link="https://www.netflix.com/in/title/70143836"
    // title="Breaking Bad"
    // des="A Netflix Original Series"
    // 


    //here is another method

    // <Card  imgsrc={Sdata[0].imgsrc}
    // link={Sdata[0].link}
    // title={Sdata[0].title}
    // des={Sdata[0].des}
    // />
    // <Card  imgsrc={Sdata[1].imgsrc}
    // link={Sdata[1].link}
    // title={Sdata[1].title}
    // des={Sdata[1].des}
    // />
    // <Card  imgsrc={Sdata[2].imgsrc}
    // link={Sdata[2].link}
    // title={Sdata[2].title}
    // des={Sdata[2].des}
    // />
    // <Card  imgsrc={Sdata[3].imgsrc}
    // link={Sdata[3].link}
    // title={Sdata[3].title}
    // des={Sdata[3].des}
    // />
    // <Card  imgsrc={Sdata[4].imgsrc}
    // link={Sdata[4].link}
    // title={Sdata[4].title}
    // des={Sdata[4].des}
    // />
    // <Card  imgsrc={Sdata[5].imgsrc}
    // link={Sdata[5].link}
    // title={Sdata[5].title}
    // des={Sdata[5].des}
    // />
    // <Card  imgsrc={Sdata[6].imgsrc}
    // link={Sdata[6].link}
    // title={Sdata[6].title}
    // des={Sdata[6].des}
    // />
    // <Card  imgsrc={Sdata[7].imgsrc}
    // link={Sdata[7].link}
    // title={Sdata[7].title}
    // des={Sdata[7].des}
    // />
    // <Card  imgsrc={Sdata[8].imgsrc}
    // link={Sdata[8].link}
    // title={Sdata[8].title}
    // des={Sdata[8].des}
    // />
    // <Card  imgsrc={Sdata[9].imgsrc}
    // link={Sdata[9].link}
    // title={Sdata[9].title}
    // des={Sdata[9].des}
    // />
    // <Card  imgsrc={Sdata[10].imgsrc}
    // link={Sdata[10].link}
    // title={Sdata[10].title}
    // des={Sdata[10].des}
    // />
    // <Card  imgsrc={Sdata[11].imgsrc}
    // link={Sdata[11].link}
    // title={Sdata[11].title}
    // des={Sdata[11].des}
    // />