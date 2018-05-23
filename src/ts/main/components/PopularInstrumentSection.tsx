import * as React from 'react';
import PopularInstrumetCard from './card';

const data  = [
  {
    id: '1',
    title: 'html',
    text: 'I used to work at SapientNitro.',
    url: '',
   
  },
  {
    id: '2',
    title: 'css',
    text: 'I used to work at SapientNitro.',
    url: '',
  },
  {
    id: '3',
    title: 'css',
    text: 'I used to work at SapientNitro.',
    url: '',
  },
];

export interface MyCardProps {
  key: number;
  id: string;
  title: string;
  text: string;
  url: string;
  datas: string[];
  data: any;
 
}

export interface DataProps {
   datas: MyCardProps[];
}
class PopularInstrumentSection extends React.Component <DataProps, object>  {

    render() {
      const Cards = this.props.data.map((datas, i ) => {
        return (
          
          <PopularInstrumetCard 
           key={i}
           title={datas.title}
           url={datas.url}
           text={datas.text}
          />

        );
        });

      return (
          <div>
          {Cards}
          </div>
      );
    }
  }

export default PopularInstrumentSection;