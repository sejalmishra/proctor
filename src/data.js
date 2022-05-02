import {ReactComponent as Pic1 } from './assets/pic1.svg';
import {ReactComponent as Pic2 } from './assets/pic2.svg';
import {ReactComponent as Pic3 } from './assets/pic3.svg';
import {ReactComponent as Pic4 } from './assets/pic4.svg';

const data =  [
    {
        id: 1,
        pic: <Pic1/>,
        desc: 'We ensure that honesty pays'
    },
    {
        id: 2,
        pic: <Pic2/>,
        desc: 'Customise your assessment and proctoring needs'
    },
    {
        id: 3,
        pic: <Pic3/>,
        desc: 'Say no to false reports'
    },
    {
        id: 4,
        pic: <Pic4/>,
        desc: 'Protecting rights, respecting privacy'
    },
];

const classes = [
    {
      id: 1,
      classname: 'Neural Networks and Fuzzy Control',
      classcode: 'CSE3013',
      exam1: {
                id: 11,
                name: 'CAT1',
                date: '22nd Dec 2020',
                time: '9:00 am - 12:00 pm',
                status: 'Completed'
            },
    exam2: {
                id: 12,
                name: 'CAT2',
                date: '12th Jan 2021',
                time: '9:00 am - 12:00 pm',
                status: 'Join Exam'
            },
    exam3: {
                id: 13,
                name: 'Lab FAT',
                date: '22nd Mar 2021',
                time: '9:00 am - 12:00 pm',
                status: 'Yet to start'
            }
    },
    {
      id: 2,
      classname: 'IOT System Architecture',
      classcode: 'ECE1029',
      exam1: {
                id: 21,
                name: 'CAT1',
                date: '22nd Dec 2020',
                time: '9:00 am - 12:00 pm',
                status: 'Completed'
            },
     exam2: {
                id: 22,
                name: 'CAT2',
                date: '12th Jan 2021',
                time: '9:00 am - 12:00 pm',
                status: 'Join Exam'
            },
    exam3: {
                id: 23,
                name: 'Lab FAT',
                date: '22nd Mar 2021',
                time: '9:00 am - 12:00 pm',
                status: 'Yet to start'
            }
    },
]

export {data, classes};