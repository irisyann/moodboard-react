import React from 'react';
import headerGif from './media/fatllama.gif';


class Form extends React.Component {
    state = { 
        keyword: ''
    };

    handleChange = (e) => {
        this.setState({ keyword: e.target.value});
    }

    handleSubmit = (e) => {

        const numKeywords = this.state.keyword.split(";").length - 1;

        if (numKeywords <= 9) {
            this.props.onSubmit(this.state.keyword);
        } else {
            alert('You can only put up to 10 keywords!');
        }

        e.preventDefault();
       
    }

    render () {
        return (
            <div>
                <img src={headerGif} className="Media-headerGif" alt="fat llama" />
                <h1>Build your own mood board.</h1>
                <h4>Specially curated images for an aesthetically-pleasing journey.</h4>
                <h5>For journalling, art inspiration, vision board - anything.</h5>
                <form onSubmit={this.handleSubmit} className="ui form">
                <div className="field">
                    <input type="text" value={this.state.keyword} onChange={this.handleChange}/>
                    <p className="Instruction"><i>Enter up to 10 words separated by ;</i></p>
                </div>
                {/* <div className="Loader"></div> */}

            </form>
            </div>

        );
    }

    // state = {
    //     image_keyword: '',
    //     photos: []
    // };

    // handleChange(event) {
    //     this.setState({value: event.target.value});
    // }


    // handleSubmit = async(event)=> {

    //     alert('Input was submitted: ' + this.state.image_keyword);
    //     event.preventDefault();

    //     const response = await pexels.get(`/v1/search`, {
    //         params: {
    //             query: this.state.image_keyword,
    //             per_page: 15,
    //             page: 1
    //         }
    //     });

    //     this.setState({ photos: response.data.photos });

    //     <Generator images={this.state.photos}/>
    // }

    // render() {
    //     return (
    //         <form onSubmit={this.handleSubmit}>
    //             <input type="text" value={this.state.image_keyword} onChange={this.handleChange}/>
    //             <p className="Instruction"><i>Enter up to 10 words separated by ;</i></p>
    //         </form>
    //     );
    // }
}

export default Form;