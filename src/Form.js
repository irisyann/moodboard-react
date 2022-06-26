import React from 'react';
import headerGif from './media/galaxybottle.gif';


class Form extends React.Component {
    state = { 
        keyword: '',
        surprise: false
    };

    handleChange = (e) => {
        this.setState({ keyword: e.target.value});
    }

    handleSubmit = (e) => {

        // check number of keywords by counting number of ; in the input
        // max 10 keywords
        // so there should only be max 9 ;
        const numKeywords = this.state.keyword.split(";").length - 1;

        if (this.state.keyword === "" && !this.state.surprise) {
            alert('Please enter some keywords!');
        }
        else if (numKeywords <= 9) {
            this.props.onSubmit(this.state.keyword);
        } else {
            alert('You can only put up to 10 keywords!');
        }

        e.preventDefault();
    }

    handleSurprise = (e) => {
        this.setState({ surprise: true});
        this.props.onSurprise(true);

    }

    render () {
        return (
            <div>
                <img src={headerGif} className="Media-headerGif" alt="fat llama" />
                <h1>Build your own mood board.</h1>
                <h4>Specially curated images for an aesthetically-pleasing journey.</h4>
                <h5>For journalling, art inspiration, vision board - anything.</h5>
                <form id="form">
                    <div className="field">
                        <input type="text" value={this.state.keyword} onChange={this.handleChange}/> 
                        <input type="submit" value="Find" id="submitButton" className="Button" onClick={this.handleSubmit}/>
                        <input type="button" value="🎉" id="surpriseButton" className="Button" onClick={this.handleSurprise}/>
                        <p className="Instruction"><i>Enter up to 10 words separated by ;</i></p>
                    </div>
                    {/* <div className="Loader"></div> */}
                </form>
            </div>

        );
    }
}

export default Form;