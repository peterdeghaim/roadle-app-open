import { WORDS } from '../../constants/wordlist'
import { TYPE } from '../../constants/streettype'
import { POSTCODE } from '../../constants/postcodes'
import { getWordOfDay } from '../../lib/words'

import React, { Component } from 'react';

class Street extends Component {
    render() {
        return (
            <p className="font-drukwide text-xl text-center lowercase mt-3">
                {WORDS[getWordOfDay().solutionIndex]} {TYPE[getWordOfDay().solutionIndex]}
                <br/> {POSTCODE[getWordOfDay().solutionIndex]}
            </p>
        );
    }
}

export default Street;