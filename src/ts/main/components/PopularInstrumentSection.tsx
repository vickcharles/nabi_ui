import * as React from 'react';
import PopularInstrumetCard from './card';

export interface MyProps {
  id: string;
  title: string;
  text: string;
  url: string;
  data: String;
}
const data = [
  {
    id: '1',
    title: 'html',
    text: 'I used to work at SapientNitro.',
    url: '',
   
  },
  {
    id: '2',
    title: 'css',
    text: 'https://i1.wp.com/informaticacoslada.com/wp-content/uploads/2015/07/css3.png?resize=365%2C512&ssl=1',
   
  },
  {
    id: '3',
    title: 'Wordpress',
    text: 'Now I work at SapientRazorfish.',
    url: 'https://s.w.org/style/images/about/WordPress-logotype-wmark.png',
  },
];

class PopularInstrumentSection extends React.Component {

    render() {
        const Cards = data.map((data, idx, arr) =>

          <PopularInstrumetCard  

          title={data.title}
          url={data.url}
          />,
         );  

        return (
          <div>
          {Card}
          </div>
      );
    }
  }

export default PopularInstrumentSection;