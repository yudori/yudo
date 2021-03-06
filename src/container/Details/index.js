import React from 'react';
import './index.css';
import { About, Portfolio, Contact, Footer } from '../../components';
import Scroll from 'react-scroll';

var Link = Scroll.Link;


class Details extends React.Component{

    render(){
        return (
            <div>
                <span className="main-nav">
                    <Link to="about" spy={true} smooth={true} duration={500}> About </Link>//
                    <Link to="portfolio" spy={true} smooth={true} duration={500}> Portfolio </Link>//
                    <Link to="contact" spy={true} smooth={true} duration={500}> Contact </Link>
                </span>
                <About pageHeight={this.props.pageHeight} colours={{'bg':'#fff5cc','fg':'#000','accent':'#999'}}/>
                <Portfolio pageHeight={this.props.pageHeight} colours={{'bg':'#9ebcc1','fg':'#fff','accent':'#000'}}/>
                <Contact pageHeight={this.props.pageHeight} colours={{'bg':'#fff5cc','fg':'#000','accent':'#999'}}/>
                <Footer pageHeight='100px' colours={{'bg':'#9ebcc1','fg':'#fff','accent':'#000'}}/>
            </div>
        )
    }
}

export default Details;