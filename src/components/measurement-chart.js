import React from 'react';

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { isNumber } from 'util';
const data = [{name: '2019-02-02', bp: 128, glucose: 7.9 , steps:3300 }, 
{name: '2019-Oct-01', bp: 138, glucose: 7.9 , steps:4300}, 
{name: '2019-Oct-02', bp: 145, glucose: 4.9 , steps:9000}, 
{name: '2019-Oct-03', bp: 127, glucose: 9.9 , steps:4500 , comments:'drank alcohol' }, 
{name: '2019-Oct-22', bp: 145, glucose: 4.9 , steps:9000}, 
{name: '2019-Oct-23', bp: 127, glucose: 9.9 , steps:4500 , comments:'drank alcohol' }, 
{name: '2019-Oct-24', bp: 145, glucose: 4.9 , steps:9000}, 
{name: '2019-Oct-27', bp: 117, glucose: 11.9 , steps:7500 , comments:'drank alcohol' }, 
];

export const ADD_MSMT = "ADD_MSMT"

export const Headline = ({ value }) => { return <h1>{value}</h1>; };

export  const btxt = props =>  { return (<h3>hi {props.name} </h3>) } ;

function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

export const LnChart = ({props}) =>  <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
<Line type="monotone" dataKey={props} stroke="#8884d8" />
<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
<XAxis dataKey="name" />
<YAxis />
<Tooltip />
</LineChart>

export  const RenderLineChart = ({ value }) => {    
    let keys = Object.keys(data[0]); //.keys.map
    let vals = keys.filter(x => isNumber(data[0][x]))

    return vals.map(x =><div> <h2> {toTitleCase(x)} </h2> <LnChart props={x}/>  </div> )
 
}
