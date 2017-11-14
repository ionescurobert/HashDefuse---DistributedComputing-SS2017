import React, {Component} from 'react';
import './App.css';

class About extends Component {
    render() {
        return (
            <div className="About">
                <h1>How it works</h1>
                <p>
                    MD5 means a 128-bit encryption algorithm, generating a 32-character hexadecimal hash, whatever the
                    captcha. This algorithm is not reversible, ie it is normally impossible to find the original word
                    from the md5 hash. Our tool uses a huge database in order to have the best chance possible to trace
                    the captcha. Just enter an MD5 hash in the form above to try to decrypt!
                </p>
            </div>
        );
    }
}

export default About;
